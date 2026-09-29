import Button from "../Button/Button";
import benefits from "../../data/benefits";
import "./Benefits.sass";

function Benefits({ onQuizOpen }) {
  return (
    <section className="benefits">
      <div className="benefits__container container">
        <h2 className="benefits__title">
          Why 10,000+ customers choose TV Mount Company
        </h2>

        <div className="benefits__wrapper">
          <picture className="benefits__picture">
            <source
              media="(max-width: 576px)"
              srcSet="/benefits/benefits-photo-mobile.webp"
            />
            <img
              src="/benefits/benefits-photo.webp"
              alt="Customers next to a TV mounted above the fireplace"
              className="benefits__img"
              loading="lazy"
              decoding="async"
            />
          </picture>

          <div className="benefits__content">
            <ul className="benefits__list">
              {benefits.map((item) => (
                <li className="benefits__item" key={item.title}>
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="benefits__icon"
                  />

                  <div>
                    <h3 className="benefits__item-title">{item.title}</h3>
                    <p className="benefits__item-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              className="benefits__button"
              onClick={onQuizOpen}
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
