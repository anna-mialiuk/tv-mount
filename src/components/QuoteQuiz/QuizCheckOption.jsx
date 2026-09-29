function QuizCheckOption({ text, price, isActive, onClick, pricePrefix = "" }) {
  return (
    <button
      type="button"
      className={`quote-quiz__check-option ${
        isActive ? "quote-quiz__check-option--active" : ""
      }`}
      aria-pressed={isActive}
      onClick={onClick}
    >
      <span className="quote-quiz__checkbox" aria-hidden="true" />
      <span className="quote-quiz__check-text">{text}</span>
      <span className="quote-quiz__price">
        {pricePrefix}${price}
      </span>
    </button>
  );
}

export default QuizCheckOption;
