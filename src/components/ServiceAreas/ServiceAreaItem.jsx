function ServiceAreaItem({
  area,
  isActive,
  selectedCity,
  onToggle,
  onSelectCity,
}) {
  return (
    <div className="service-areas__item">
      <button
        type="button"
        className={`service-areas__button ${
          isActive ? "service-areas__button--active" : ""
        }`}
        onClick={() => onToggle(area)}
        aria-expanded={isActive}
      >
        <span>{area.title}</span>

        <img
          src={
            isActive ? "/icons/faq-arrow-active.svg" : "/icons/faq-arrow.svg"
          }
          alt=""
          aria-hidden="true"
          className={`service-areas__arrow ${
            isActive ? "service-areas__arrow--active" : ""
          }`}
        />
      </button>

      {isActive && (
        <ul className="service-areas__cities">
          {area.cities.map((city) => (
            <li key={city.name}>
              <button
                type="button"
                className={`service-areas__city ${
                  selectedCity?.name === city.name
                    ? "service-areas__city--active"
                    : ""
                }`}
                onClick={() => onSelectCity(city)}
              >
                {city.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceAreaItem;
