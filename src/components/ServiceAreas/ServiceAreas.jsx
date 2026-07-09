import { useState } from "react";
import Button from "../Button/Button";
import ServiceMap from "./ServiceMap";
import { serviceAreas } from "../../data/serviceAreas";
import "./ServiceAreas.sass";

const defaultMarkers = serviceAreas.map((area) => ({
  name: area.title,
  coords: area.marker || area.center,
}));

function ServiceAreas() {
  const [activeArea, setActiveArea] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [mapCity, setMapCity] = useState(null);

  const handleAreaClick = (area) => {
    const isCurrentArea = activeArea?.title === area.title;

    setActiveArea(isCurrentArea ? null : area);
    setSelectedCity(null);
    setMapCity(null);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleCheckArea = () => {
    if (!selectedCity) return;

    setMapCity(selectedCity);
  };

  const mapCenter = mapCity ? mapCity.coords : [39.8283, -98.5795];
  const mapZoom = mapCity ? 13 : 3;
  const mapMarkers = mapCity ? [mapCity] : defaultMarkers;

  return (
    <section id="services" className="service-areas">
      <div className="container">
        <div className="service-areas__wrapper">
          <div className="service-areas__map">
            <h2 className="service-areas__title-tablet">
              We serve these cities
            </h2>
            <ServiceMap center={mapCenter} zoom={mapZoom} cities={mapMarkers} />
          </div>

          <div className="service-areas__content">
            <h2 className="service-areas__title">We serve these cities</h2>

            <div className="service-areas__list">
              {serviceAreas.map((area) => {
                const isActive = activeArea?.title === area.title;

                return (
                  <div className="service-areas__item" key={area.title}>
                    <button
                      type="button"
                      className={`service-areas__button ${
                        isActive ? "service-areas__button--active" : ""
                      }`}
                      onClick={() => handleAreaClick(area)}
                    >
                      <span>{area.title}</span>

                      <span
                        className={`service-areas__arrow ${
                          isActive ? "service-areas__arrow--active" : ""
                        }`}
                      >
                        ⌃
                      </span>
                    </button>

                    {isActive && (
                      <ul className="service-areas__cities">
                        {area.cities.map((city) => (
                          <li
                            key={city.name}
                            className={`service-areas__city ${
                              selectedCity?.name === city.name
                                ? "service-areas__city--active"
                                : ""
                            }`}
                            onClick={() => handleCityClick(city)}
                          >
                            {city.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="service-areas__actions">
              <Button variant="primary" onClick={handleCheckArea}>
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
