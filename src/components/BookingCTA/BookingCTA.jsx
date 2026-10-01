import Button from "../Button/Button";
import { QUIZ_DISCOUNT } from "../../data/quoteQuiz";
import "./BookingCTA.sass";

const perks = [
  "Free consultation",
  `$${QUIZ_DISCOUNT} discount`,
  "2-year warranty",
];

function BookingCTA({ onQuizOpen }) {
  return (
    <section id="contact" className="booking-cta">
      <div className="booking-cta__container container">
        <div className="booking-cta__top">
          <h2 className="booking-cta__title">
            Ready for professional TV installation?
          </h2>

          <p className="booking-cta__subtitle">
            Installation on the day you order. <br />
            No hidden fees
          </p>
        </div>

        <div className="booking-cta__bottom">
          <div className="booking-cta__perks">
            <p className="booking-cta__text">Book now and get:</p>

            <ul className="booking-cta__list">
              {perks.map((perk) => (
                <li className="booking-cta__item" key={perk}>
                  <img
                    src="/check.svg"
                    alt=""
                    aria-hidden="true"
                    className="booking-cta__item-icon"
                    loading="lazy"
                  />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="booking-cta__buttons">
            <Button variant="secondary" className="booking-cta__call">
              <img
                src="/phone.svg"
                alt=""
                aria-hidden="true"
                className="booking-cta__call-icon"
              />
              Call: (404) 793-8283
            </Button>

            <Button
              variant="primary"
              className="booking-cta__book"
              onClick={onQuizOpen}
            >
              Book now
              <img
                src="/button-arrow.svg"
                alt=""
                aria-hidden="true"
                className="booking-cta__book-icon"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;
