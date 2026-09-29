import { sizeStep } from "../../data/quoteQuiz";
import QuizCheckOption from "./QuizCheckOption";

function QuizSizeStep({ totalSteps, answers, onChange, onNext }) {
  const selectedSize = sizeStep.sizes.find(
    (size) => size.text === answers.tvSize,
  );
  const needsTechnicians = Boolean(selectedSize?.needsTechnicians);

  const canContinue =
    Boolean(selectedSize) &&
    (!needsTechnicians || Boolean(answers.technicians));

  const handleSizeClick = (size) => {
    onChange({
      tvSize: size.text,
      technicians: size.needsTechnicians ? answers.technicians : undefined,
    });
  };

  return (
    <div className="quote-quiz__body">
      <p className="quote-quiz__step">Step 1 of {totalSteps}</p>

      <h2 className="quote-quiz__title">{sizeStep.title}</h2>
      <p className="quote-quiz__subtitle">{sizeStep.subtitle}</p>

      <div className="quote-quiz__check-grid">
        {sizeStep.sizes.map((size) => (
          <QuizCheckOption
            key={size.text}
            text={size.text}
            price={size.price}
            isActive={answers.tvSize === size.text}
            onClick={() => handleSizeClick(size)}
          />
        ))}

        <QuizCheckOption
          text={sizeStep.removeOldTv.text}
          price={sizeStep.removeOldTv.price}
          isActive={Boolean(answers.removeOldTv)}
          onClick={() => onChange({ removeOldTv: !answers.removeOldTv })}
        />
      </div>

      <label
        className="quote-quiz__label quote-quiz__label--muted"
        htmlFor="quiz-quantity"
      >
        {sizeStep.quantityLabel}
      </label>
      <div className="quote-quiz__select-wrapper">
        <select
          id="quiz-quantity"
          className="quote-quiz__select"
          value={answers.tvQuantity || sizeStep.quantities[0]}
          onChange={(event) => onChange({ tvQuantity: event.target.value })}
        >
          {sizeStep.quantities.map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      </div>

      {needsTechnicians && (
        <>
          <h3 className="quote-quiz__title quote-quiz__title--second">
            {sizeStep.techniciansTitle}
          </h3>

          <div className="quote-quiz__check-grid quote-quiz__check-grid--row">
            {sizeStep.technicians.map((option) => (
              <QuizCheckOption
                key={option.text}
                text={option.text}
                price={option.price}
                pricePrefix="+"
                isActive={answers.technicians === option.text}
                onClick={() => onChange({ technicians: option.text })}
              />
            ))}
          </div>
        </>
      )}

      <button
        type="button"
        className="quote-quiz__main-button quote-quiz__main-button--full"
        onClick={onNext}
        disabled={!canContinue}
      >
        Next Step
        <img src="/button-arrow.svg" alt="" aria-hidden="true" />
      </button>
    </div>
  );
}

export default QuizSizeStep;
