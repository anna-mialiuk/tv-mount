const nextSteps = [
  "We call you back to confirm the details.",
  "A professional technician is assigned to your request.",
  "You receive top-quality service tailored to your needs.",
];

function QuizSuccess({ onClose }) {
  return (
    <div className="quote-quiz__success">
      <div className="quote-quiz__success-icon-wrapper">
        <img
          src="/success-icon.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="quote-quiz__success-icon"
        />
      </div>

      <h2 className="quote-quiz__thank-h">THANK YOU!</h2>
      <h3 className="quote-quiz__thank-sub">Your request has been received.</h3>
      <p className="quote-quiz__thank-p">
        We’ll call you within{" "}
        <span className="quote-quiz__thank-accent">15 minutes</span> to confirm
        your booking and provide the exact price.
      </p>

      <div className="quote-quiz__next-steps">
        <h4 className="quote-quiz__next-steps-h">What happens next:</h4>

        <ol className="quote-quiz__next-steps-wrapper">
          {nextSteps.map((item, index) => (
            <li className="quote-quiz__li" key={item}>
              <span className="quote-quiz__li-number" aria-hidden="true">
                {index + 1}
              </span>
              <p className="quote-quiz__next-steps-p">{item}</p>
            </li>
          ))}
        </ol>
      </div>

      <button
        type="button"
        className="quote-quiz__main-button quote-quiz__main-button--full quote-quiz__success-button"
        onClick={onClose}
      >
        Back to Homepage
      </button>

      <p className="quote-quiz__questions">
        Questions? Call us:{" "}
        <a href="tel:+14047938283" className="quote-quiz__questions-link">
          (404) 793-8283
        </a>
      </p>
    </div>
  );
}

export default QuizSuccess;
