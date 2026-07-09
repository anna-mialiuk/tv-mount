const nextSteps = ["Same-day installation", "2-year warranty", "Clear pricing"];

function QuizSuccess({ onClose }) {
  return (
    <div className="quote-quiz__success">
      <div className="quote-quiz__success-icon-wrapper">
        <img
          src="/success-icon.png"
          alt="success"
          loading="lazy"
          className="quote-quiz__success-icon"
        />
      </div>

      <h2 className="quote-quiz__thank-h">THANK YOU!</h2>
      <h3 className="quote-quiz__thank-sub">Your request has been received.</h3>
      <p className="quote-quiz__thank-p">
        We’ll call you within 1 hour to confirm your booking and provide the
        exact price.
      </p>

      <div className="quote-quiz__next-steps">
        <h4 className="quote-quiz__next-steps-h">What happens next:</h4>

        <ul className="quote-quiz__next-steps-wrapper">
          {nextSteps.map((item) => (
            <li className="quote-quiz__li" key={item}>
              <img
                src="/check.svg"
                alt="icon"
                loading="lazy"
                className="quote-quiz__check-icon"
              />
              <p className="quote-quiz__next-steps-p">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="quote-quiz__main-button"
        onClick={onClose}
      >
        Back to Homepage
      </button>

      <p className="quote-quiz__questions">
        Questions? Call us: (404) 793-8283
      </p>
    </div>
  );
}

export default QuizSuccess;
