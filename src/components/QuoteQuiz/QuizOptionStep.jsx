import QuizOptionCard from "./QuizOptionCard";

const NO_SERVICES_VALUE = "No additional services needed";

function QuizOptionStep({
  stepIndex,
  totalSteps,
  step,
  value,
  onOptionClick,
  onBack,
  onNext,
}) {
  const hasRequiredAnswer = step.required === false || Boolean(value);
  const isServicesStep = step.name === "services";
  const isNoServicesActive = value === NO_SERVICES_VALUE;

  return (
    <div className="quote-quiz__body">
      <p className="quote-quiz__step">
        Step {stepIndex + 1} of {totalSteps}
      </p>

      <h2 className="quote-quiz__title">{step.title}</h2>
      <p className="quote-quiz__subtitle">{step.subtitle}</p>

      <div className="quote-quiz__options">
        {step.options.map((option) => (
          <QuizOptionCard
            key={option.text}
            option={option}
            isActive={value === option.text}
            onClick={() => onOptionClick(option.text)}
          />
        ))}
      </div>

      {isServicesStep && (
        <button
          type="button"
          className={`quote-quiz__no-services ${
            isNoServicesActive ? "quote-quiz__no-services--active" : ""
          }`}
          onClick={() => onOptionClick(NO_SERVICES_VALUE)}
        >
          <span className="quote-quiz__no-services-circle" />
          <span>No additional services needed — just the mount</span>
        </button>
      )}

      <div
        className={`quote-quiz__footer ${
          stepIndex === 0 ? "quote-quiz__footer--single" : ""
        }`}
      >
        {stepIndex > 0 && (
          <button type="button" className="quote-quiz__back" onClick={onBack}>
            ← Back
          </button>
        )}

        <button
          type="button"
          className="quote-quiz__main-button"
          onClick={onNext}
          disabled={!hasRequiredAnswer}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}

export default QuizOptionStep;
