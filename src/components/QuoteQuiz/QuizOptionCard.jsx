function QuizOptionCard({ option, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`quote-quiz__option ${
        isActive ? "quote-quiz__option--active" : ""
      }`}
      onClick={onClick}
    >
      <img
        src={option.image}
        alt={option.text}
        loading="lazy"
        className="quote-quiz__option-image"
      />

      <span className="quote-quiz__option-text">{option.text}</span>
    </button>
  );
}

export default QuizOptionCard;
