import { useEffect, useState } from "react";

import Button from "../Button/Button";
import { QUIZ_DISCOUNT } from "../../data/quoteQuiz";
import { getTimeLeft } from "../../utils/getTimeLeft";
import "./LimitedOffer.sass";

const pad = (value) => String(value).padStart(2, "0");

function LimitedOffer({ onQuizOpen }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3_600_000);
  const minutes = Math.floor((timeLeft % 3_600_000) / 60_000);
  const seconds = Math.floor((timeLeft % 60_000) / 1000);

  return (
    <section className="limited-offer">
      <div className="limited-offer__container container">
        <h2 className="limited-offer__title">Limited offer!</h2>

        <p className="limited-offer__text">
          <img
            src="/limited-offer/gift.svg"
            alt=""
            aria-hidden="true"
            className="limited-offer__gift"
            loading="lazy"
          />
          <span>
            Add more services to reach $300 and unlock your ${QUIZ_DISCOUNT}{" "}
            discount <strong>+ free wire concealment!</strong>
          </span>
        </p>

        <div
          className="limited-offer__timer"
          role="timer"
          aria-label={`${hours} hours ${minutes} minutes ${seconds} seconds left`}
        >
          <span>{pad(hours)}</span>
          <span className="limited-offer__separator">:</span>
          <span>{pad(minutes)}</span>
          <span className="limited-offer__separator">:</span>
          <span>{pad(seconds)}</span>
        </div>

        <Button
          variant="primary"
          className="limited-offer__button"
          onClick={onQuizOpen}
        >
          Book now and get a discount
        </Button>

        <p className="limited-offer__note">
          Offer valid until the end of the day. 3 slots left!
        </p>
      </div>
    </section>
  );
}

export default LimitedOffer;
