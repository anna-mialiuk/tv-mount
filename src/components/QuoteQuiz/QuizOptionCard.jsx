function QuizOptionCard({ option, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`quote-quiz__option ${
        isActive ? "quote-quiz__option--active" : ""
      } ${option.image ? "" : "quote-quiz__option--text"}`}
      aria-pressed={isActive}
      onClick={onClick}
    >
      {option.image ? (
        <img
          src={option.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="quote-quiz__option-image"
        />
      ) : (
        <span className="quote-quiz__option-dots" aria-hidden="true">
          •••
        </span>
      )}

      <span className="quote-quiz__option-text">
        <strong>{option.title}</strong>
        <span>{option.caption}</span>
      </span>
    </button>
  );
}

export default QuizOptionCard;
