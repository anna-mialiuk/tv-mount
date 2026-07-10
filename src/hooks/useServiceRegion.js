import { useEffect, useState } from "react";

function getServiceRegion(data) {
  const city = String(data?.city || "").toLowerCase();
  const region = String(data?.region || "").toLowerCase();
  const regionCode = String(data?.region_code || "").toUpperCase();
  const countryCode = String(data?.country_code || "").toUpperCase();

  if (countryCode !== "US") return "USA";

  if (city.includes("philadelphia") || regionCode === "PA") {
    return "Philadelphia";
  }

  if (regionCode === "NJ") {
    return "New Jersey";
  }

  if (city.includes("chicago") || regionCode === "IL") {
    return "Chicago Area";
  }

  if (city.includes("atlanta") || regionCode === "GA") {
    return "Atlanta Area";
  }

  return "USA";
}

export default function useServiceRegion() {
  const [serviceRegion, setServiceRegion] = useState("USA");

  useEffect(() => {
    async function loadRegion() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setServiceRegion(getServiceRegion(data));
      } catch {
        setServiceRegion("USA");
      }
    }

    loadRegion();
  }, []);

  return serviceRegion;
}
