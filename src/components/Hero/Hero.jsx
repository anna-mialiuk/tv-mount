import Button from "../Button/Button";
import heroBenefits from "../../data/hero";
import "./Hero.sass";

function BenefitItem({ text }) {
  return (
    <li className="hero__item">
      <img src="/check.svg" alt="check-icon" className="hero__item-icon" />
      <span className="hero__item-span-text text-s">{text}</span>
    </li>
  );
}

function Hero({ onQuizOpen }) {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__wrapper">
          <div className="hero__left-side">
            <h1 className="hero__main-text">
              Professional TV installation in 30 minutes <br />
              <span className="hero__main-span-text">
                (Perfectly level. No visible wires. 2-year warranty)
              </span>
            </h1>

            <p className="hero__paragraph text-s">
              Trusted by 10,000+ customers. 4.9/5 rating on Google
            </p>

            <img
              src="/hero-tablet.jpg"
              alt="TV installation"
              className="hero__tablet-img"
              fetchPriority="high"
            />

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
                  alt="phone"
                />
                Call: (404) 793-8283
              </Button>
            </div>
          </div>

          <div className="hero__right-side">
            <img
              src="/hero.jpg"
              alt="TV installation"
              className="hero__img"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="hero__badges">
          <div className="hero__badge">
            <img src="/google.svg" alt="" className="hero__badge-icon" />
            <span className="hero__span-badge text-sm">
              4.9/5 (8,000+ reviews on Google)
            </span>
          </div>

          <div className="hero__badge">
            <img src="/shield.svg" alt="" className="hero__badge-icon" />
            <span className="hero__span-badge text-sm">
              Insured and certified
            </span>
          </div>

          <div className="hero__badge">
            <img src="/star.svg" alt="" className="hero__badge-icon" />
            <span className="hero__span-badge text-sm">
              Best service in Atlanta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
