import { Helmet } from "react-helmet-async";

import Button from "../Button/Button";
import heroBenefits from "../../data/hero";
import "./Hero.sass";

function Hero({ onQuizOpen }) {
  return (
    <section className="hero">
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/hero-bg-mobile.webp"
          media="(max-width: 576px)"
        />
        <link
          rel="preload"
          as="image"
          href="/hero-bg.webp"
          media="(min-width: 577px)"
        />
      </Helmet>

      <picture className="hero__bg">
        <source media="(max-width: 576px)" srcSet="/hero-bg-mobile.webp" />

        <img
          src="/hero-bg.webp"
          alt=""
          className="hero__bg-img"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="hero__container container">
        <a href="tel:+14047938283" className="hero__phone">
          <span className="hero__phone-icon">
            <img src="/icons/phone-white.svg" alt="" aria-hidden="true" />
          </span>
          (404) 793-8283
        </a>

        <h1 className="hero__title">
          TV Mount
          <br />
          Company
        </h1>

        <ul className="hero__list">
          {heroBenefits.map((item) => (
            <li className="hero__item text-s" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <Button variant="primary" className="hero__button" onClick={onQuizOpen}>
          Book now
        </Button>

        <p className="hero__afterpay">
          <img
            src="/icons/afterpay.svg"
            alt=""
            aria-hidden="true"
            className="hero__afterpay-icon"
          />
          *afterpay available
        </p>
      </div>
    </section>
  );
}

export default Hero;
