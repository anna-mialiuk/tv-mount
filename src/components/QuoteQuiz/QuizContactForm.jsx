import { QUIZ_DISCOUNT } from "../../data/quoteQuiz";

const CONFETTI_COUNT = 18;

function DiscountPopup({ onClaim }) {
  return (
    <div className="quote-quiz__popup-overlay">
      <div
        className="quote-quiz__popup"
        role="alertdialog"
        aria-labelledby="quiz-discount-title"
        aria-describedby="quiz-discount-text"
      >
        <div className="quote-quiz__confetti" aria-hidden="true">
          {Array.from({ length: CONFETTI_COUNT }, (_, index) => (
            <span key={index} style={{ "--i": index }} />
          ))}
        </div>

        <div className="quote-quiz__badge" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="quote-quiz__badge-shape">
            <defs>
              <linearGradient
                id="quiz-badge-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#D6342A" />
                <stop offset="100%" stopColor="#A71E1E" />
              </linearGradient>
            </defs>
            <polygon
              fill="url(#quiz-badge-gradient)"
              points="100,4 121,45 165,30 158,76 198,100 158,124 165,170 121,155 100,196 79,155 35,170 42,124 2,100 42,76 35,30 79,45"
            />
          </svg>
          <span className="quote-quiz__badge-amount">${QUIZ_DISCOUNT}</span>
          <span className="quote-quiz__badge-label">discount</span>
        </div>

        <h3 className="quote-quiz__popup-title" id="quiz-discount-title">
          You qualify for ${QUIZ_DISCOUNT} OFF + Free wire concealment.
        </h3>

        <p className="quote-quiz__popup-text" id="quiz-discount-text">
          Congratulations! You have received a personal discount available
          exclusively to clients who have placed an order of $1,000 or more with
          us
        </p>

        <button
          type="button"
          className="quote-quiz__main-button quote-quiz__popup-button"
          onClick={onClaim}
          autoFocus
        >
          Claim discount
        </button>
      </div>
    </div>
  );
}

function formatServices(services) {
  if (Array.isArray(services)) {
    return services.length ? services.join(" • ") : "No extra services";
  }

  return services || "No extra services";
}

function QuizContactForm({
  totalSteps,
  answers,
  onSubmit,
  nameInputRef,
  isPopupOpen,
  onClaimDiscount,
  submitError,
  isSubmitting,
  onFieldChange,
}) {
  const selection = [
    answers.tvSize && `${answers.tvSize} TV`,
    answers.wallType,
    formatServices(answers.services),
  ].filter(Boolean);

  return (
    <>
      <form
        className="quote-quiz__body"
        onSubmit={onSubmit}
        onChange={onFieldChange}
        noValidate
      >
        {/* honeypot for bots — hidden from people and screen readers */}
        <input
          type="text"
          name="company"
          className="quote-quiz__honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <p className="quote-quiz__step">
          Step {totalSteps} of {totalSteps}
        </p>

        <h2 className="quote-quiz__final-title">
          Almost done!
          <span>Where should we send your quote?</span>
        </h2>

        <div className="quote-quiz__banner quote-quiz__banner--selection">
          <span className="quote-quiz__banner-label">Your selection:</span>
          <span>{selection.join(" • ")}</span>
        </div>

        <label className="quote-quiz__label" htmlFor="quiz-name">
          Your name*
        </label>
        <input
          ref={nameInputRef}
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
          inputMode="tel"
          aria-invalid={Boolean(submitError && submitError !== "network")}
          required
        />

        {submitError && (
          <p className="quote-quiz__form-error" role="alert">
            {submitError === "network" ? (
              <>
                We couldn’t send your request. Please try again or call us:{" "}
                <a href="tel:+14047938283">(404) 793-8283</a>
              </>
            ) : (
              submitError
            )}
          </p>
        )}

        <div className="quote-quiz__banner quote-quiz__banner--discount">
          You qualify for ${QUIZ_DISCOUNT} off + free wire concealment
        </div>

        <button
          type="submit"
          className="quote-quiz__main-button quote-quiz__main-button--full quote-quiz__main-button--arrow"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Sending..."
            : `Get My Free Quote & Claim $${QUIZ_DISCOUNT} Discount`}
          <img src="/button-arrow.svg" alt="" aria-hidden="true" />
        </button>
      </form>

      {isPopupOpen && <DiscountPopup onClaim={onClaimDiscount} />}
    </>
  );
}

export default QuizContactForm;
