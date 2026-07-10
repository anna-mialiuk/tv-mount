import { useEffect, useState } from "react";

function formatLocation(data) {
  const city = data?.city?.trim();
  const region = data?.region?.trim();

  if (city && region) {
    if (city.toLowerCase() === region.toLowerCase()) {
      return city;
    }

    return `${city}, ${region}`;
  }

  return city || region || "";
}

export default function useServiceRegion() {
  const [serviceRegion, setServiceRegion] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function detectLocation() {
      try {
        const response = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Location request failed");
        }

        const data = await response.json();
        setServiceRegion(formatLocation(data));
      } catch {
        setServiceRegion("");
      }
    }

    detectLocation();

    return () => controller.abort();
  }, []);

  return serviceRegion;
}
