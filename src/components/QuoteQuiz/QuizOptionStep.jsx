import QuizOptionCard from "./QuizOptionCard";

function QuizOptionStep({
  stepIndex,
  totalSteps,
  step,
  value,
  onOptionClick,
  onBack,
  onNext,
}) {
  const selected = step.multiple ? value || [] : value;
  const isNoneActive = step.multiple && value === step.noneOption;

  // multi-select steps are optional, single-select steps need an answer
  const canContinue = step.multiple || Boolean(value);

  const isActive = (optionValue) =>
    step.multiple
      ? Array.isArray(selected) && selected.includes(optionValue)
      : selected === optionValue;

  const handleClick = (optionValue) => {
    if (!step.multiple) {
      onOptionClick(optionValue);
      return;
    }

    const current = Array.isArray(selected) ? selected : [];
    const next = current.includes(optionValue)
      ? current.filter((item) => item !== optionValue)
      : [...current, optionValue];

    onOptionClick(next);
  };

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
            key={option.value}
            option={option}
            isActive={isActive(option.value)}
            onClick={() => handleClick(option.value)}
          />
        ))}

        {step.noneOption && (
          <button
            type="button"
            className={`quote-quiz__check-option quote-quiz__none ${
              isNoneActive ? "quote-quiz__check-option--active" : ""
            }`}
            aria-pressed={isNoneActive}
            onClick={() =>
              onOptionClick(isNoneActive ? undefined : step.noneOption)
            }
          >
            <span className="quote-quiz__checkbox" aria-hidden="true" />
            <span className="quote-quiz__check-text">{step.noneOption}</span>
          </button>
        )}
      </div>

      <div className="quote-quiz__footer">
        <button type="button" className="quote-quiz__back" onClick={onBack}>
          <img src="/icons/arrow-left-grey.svg" alt="" aria-hidden="true" />
          Back
        </button>

        <button
          type="button"
          className="quote-quiz__main-button quote-quiz__main-button--arrow"
          onClick={onNext}
          disabled={!canContinue}
        >
          Next Step
          <img src="/button-arrow.svg" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default QuizOptionStep;
