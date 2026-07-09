function formatAnswer(value) {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "No extra services";
  }

  return value || "Not selected";
}

function QuizContactForm({ totalSteps, answers, onBack, onSubmit }) {
  return (
    <form className="quote-quiz__body" onSubmit={onSubmit}>
      <p className="quote-quiz__step">Step {totalSteps} of {totalSteps}</p>

      <h2 className="quote-quiz__title">
        Almost done! Where should we send your quote?
      </h2>

      <div className="quote-quiz__selection">
        Your selection: {formatAnswer(answers.tvSize)} •{" "}
        {formatAnswer(answers.wallType)} • {formatAnswer(answers.services)}
      </div>

      <label className="quote-quiz__label" htmlFor="quiz-name">
        Your name*
      </label>
      <input
        id="quiz-name"
        name="name"
        type="text"
        className="quote-quiz__input"
        placeholder="Enter your full name"
        autoComplete="name"
        required
      />

      <label className="quote-quiz__label" htmlFor="quiz-phone">
        Phone Number*
      </label>
      <input
        id="quiz-phone"
        name="phone"
        type="tel"
        className="quote-quiz__input"
        placeholder="(404) 000-0000"
        autoComplete="tel"
        required
      />

      <div className="quote-quiz__discount">
        You qualify for $50 OFF + Free wire concealment
      </div>

      <div className="quote-quiz__footer">
        <button type="button" className="quote-quiz__back" onClick={onBack}>
          ← Back
        </button>

        <button type="submit" className="quote-quiz__main-button">
          Get My Free Quote & Claim $50 Discount →
        </button>
      </div>
    </form>
  );
}

export default QuizContactForm;
