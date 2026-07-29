import useServiceRegion from "../../hooks/useServiceRegion";
import Button from "../Button/Button";
import heroBenefits from "../../data/hero";
import "./Hero.sass";

function BenefitItem({ text }) {
  return (
    <li className="hero__item">
      <img
        src="/check.svg"
        alt=""
        className="hero__item-icon"
        aria-hidden="true"
      />

      <span className="hero__item-span-text text-s">{text}</span>
    </li>
  );
}

function Hero({ onQuizOpen }) {
  const serviceRegion = useServiceRegion();

  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__wrapper">
          <div className="hero__left-side">
            <h1 className="hero__main-text">
              Professional TV installation in 30 minutes
            </h1>

            <p className="hero__paragraph text-s">
              Trusted by 10,000+ customers. 5/5 rating on Google
            </p>

            <picture className="hero__tablet-picture">
              <source media="(max-width: 576px)" srcSet="/hero-mobile.webp" />

              <img
                src="/hero-tablet.webp"
                alt="Professional TV installation"
                className="hero__tablet-img"
                fetchPriority="high"
                decoding="async"
              />
            </picture>

            <div className="hero__benefits">
              <ul className="hero__list">
                {heroBenefits.slice(0, 3).map((item) => (
                  <BenefitItem key={item} text={item} />
                ))}
              </ul>

              <ul className="hero__list">
                {heroBenefits.slice(3).map((item) => (
                  <BenefitItem key={item} text={item} />
                ))}
              </ul>
            </div>

            <ul className="hero__list-tablet">
              {heroBenefits.map((item) => (
                <BenefitItem key={item} text={item} />
              ))}
            </ul>

            <div className="hero__buttons">
              <Button variant="primary" onClick={onQuizOpen}>
                Book now
              </Button>

              <Button variant="outline">
                <img
                  className="hero__button-icon"
                  src="/phone.svg"
                  alt=""
                  aria-hidden="true"
                />
                Call: (404) 793-8283
              </Button>
            </div>
          </div>

          <div
            className="hero__right-side"
            role="img"
            aria-label="Professional TV installation"
          />
        </div>

        <div className="hero__badges">
          <div className="hero__badge">
            <img
              src="/google.svg"
              alt=""
              className="hero__badge-icon"
              aria-hidden="true"
            />

            <span className="hero__span-badge text-s">
              5/5 rating on Google
            </span>
          </div>

          <div className="hero__badge">
            <img
              src="/shield.svg"
              alt=""
              className="hero__badge-icon"
              aria-hidden="true"
            />

            <span className="hero__span-badge text-s">
              Licensed and insured
            </span>
          </div>

          <div className="hero__badge">
            <img
              src="/star.svg"
              alt=""
              className="hero__badge-icon"
              aria-hidden="true"
            />

            <span className="hero__span-badge text-s">
              {serviceRegion
                ? `Best service in ${serviceRegion}`
                : "Best service near you"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
