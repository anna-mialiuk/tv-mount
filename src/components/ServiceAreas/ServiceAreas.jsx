import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { serviceAreas } from "../../data/serviceAreas";
import Button from "../Button/Button";
import ServiceAreaItem from "./ServiceAreaItem";

import "./ServiceAreas.sass";

const ServiceMap = lazy(() => import("./ServiceMap"));

const DEFAULT_CENTER = [39.8283, -98.5795];
const DEFAULT_ZOOM = 3;
const CITY_ZOOM = 13;

const defaultMarkers = serviceAreas.map((area) => ({
  name: area.title,
  coords: area.marker || area.center,
}));

function ServiceAreas() {
  const [activeArea, setActiveArea] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [mapCity, setMapCity] = useState(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  const mapRef = useRef(null);

  useEffect(() => {
    const mapElement = mapRef.current;

    if (!mapElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      },
    );

    observer.observe(mapElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleAreaClick = (area) => {
    setActiveArea((currentArea) =>
      currentArea?.title === area.title ? null : area,
    );

    setSelectedCity(null);
    setMapCity(null);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleCheckArea = () => {
    if (!selectedCity) {
      return;
    }

    setShouldLoadMap(true);
    setMapCity(selectedCity);

    if (window.matchMedia("(max-width: 768px)").matches) {
      window.setTimeout(() => {
        mapRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  const mapCenter = mapCity?.coords || DEFAULT_CENTER;
  const mapZoom = mapCity ? CITY_ZOOM : DEFAULT_ZOOM;
  const mapMarkers = mapCity ? [mapCity] : defaultMarkers;

  return (
    <section id="services" className="service-areas">
      <div className="container">
        <div className="service-areas__wrapper">
          <div ref={mapRef} className="service-areas__map">
            <h2 className="service-areas__title-tablet">
              We serve these cities
            </h2>

            {shouldLoadMap && (
              <Suspense fallback={null}>
                <ServiceMap
                  center={mapCenter}
                  zoom={mapZoom}
                  cities={mapMarkers}
                />
              </Suspense>
            )}
          </div>

          <div className="service-areas__content">
            <h2 className="service-areas__title">We serve these cities</h2>

            <div className="service-areas__list">
              {serviceAreas.map((area) => (
                <ServiceAreaItem
                  key={area.title}
                  area={area}
                  isActive={activeArea?.title === area.title}
                  selectedCity={selectedCity}
                  onToggle={handleAreaClick}
                  onSelectCity={handleCityClick}
                />
              ))}
            </div>

            <div className="service-areas__actions">
              <Button
                variant="primary"
                onClick={handleCheckArea}
                disabled={!selectedCity}
              >
                Check if we serve your area
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;
