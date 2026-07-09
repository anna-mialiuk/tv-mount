function QuizHeader({ onClose }) {
  return (
    <div className="quote-quiz__header">
      <div className="quote-quiz__header-left-wrapper">
        <img
          src="/logo-footer.svg"
          alt="TV Mount Company"
          className="quote-quiz__logo"
          loading="lazy"
        />

        <h3 className="quote-quiz__header-title">
          Get Your Quote — TV Mounting
        </h3>
      </div>

      <button type="button" className="quote-quiz__close" onClick={onClose}>
        <img
          src="/close-x.svg"
          loading="lazy"
          alt="close"
          className="quote-quiz__close-icon"
        />
      </button>
    </div>
  );
}

export default QuizHeader;
