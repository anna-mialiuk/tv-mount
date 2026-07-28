import { useEffect, useState } from "react";

const STORAGE_KEY = "service-region";

function formatLocation(data) {
  const city = data?.city?.trim();

  const state =
    data?.region_code?.trim() ||
    data?.region?.code?.trim() ||
    data?.region?.trim();

  if (city && state) {
    return `${city}, ${state}`;
  }

  return city || state || "";
}

async function fetchLocation(url, signal) {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data = await response.json();

  if (url.includes("ipwho.is") && data.success === false) {
    throw new Error("ipwho.is lookup failed");
  }

  return formatLocation(data);
}

export default function useServiceRegion() {
  const [serviceRegion, setServiceRegion] = useState(() => {
    return sessionStorage.getItem(STORAGE_KEY) || "";
  });

  useEffect(() => {
    if (serviceRegion) {
      return;
    }

    const controller = new AbortController();

    async function detectLocation() {
      let location = "";

      try {
        location = await fetchLocation("https://ipwho.is/", controller.signal);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        try {
          location = await fetchLocation(
            "https://ipapi.co/json/",
            controller.signal,
          );
        } catch (fallbackError) {
          if (fallbackError.name === "AbortError") {
            return;
          }

          console.error("Failed to detect user location:", fallbackError);

          return;
        }
      }

      if (location) {
        sessionStorage.setItem(STORAGE_KEY, location);
        setServiceRegion(location);
      }
    }

    detectLocation();

    return () => controller.abort();
  }, [serviceRegion]);

  return serviceRegion;
}
