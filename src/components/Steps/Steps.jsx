import Button from "../Button/Button";
import steps from "../../data/steps";
import "./Steps.sass";

function Steps({ onQuizOpen }) {
  return (
    <section className="steps">
      <div className="steps__container container">
        <h2 className="steps__title">How we work: 4 simple steps</h2>

        <ol className="steps__list">
          {steps.map((step) => (
            <li className="steps__card" key={step.number}>
              <span className="steps__number" aria-hidden="true">
                {step.number}
              </span>

              <h3 className="steps__card-title">{step.title}</h3>
              <p className="steps__text">{step.text}</p>

              <span className="steps__time">
                <img
                  src="/clock.svg"
                  alt=""
                  aria-hidden="true"
                  className="steps__clock"
                  loading="lazy"
                />
                {step.time}
              </span>
            </li>
          ))}
        </ol>

        <Button
          variant="primary"
          className="steps__button"
          onClick={onQuizOpen}
        >
          Book now
        </Button>
      </div>
    </section>
  );
}

export default Steps;
