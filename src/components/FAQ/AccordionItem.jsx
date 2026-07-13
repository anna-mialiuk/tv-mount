function AccordionItem({ question, answer, isActive, onClick }) {
  return (
    <div className={`faq__item ${isActive ? "faq__item--active" : ""}`}>
      <button type="button" className="faq__button" onClick={onClick}>
        <span>{question}</span>

        <img
          src={
            isActive ? "/icons/faq-arrow-active.svg" : "/icons/faq-arrow.svg"
          }
          alt=""
          aria-hidden="true"
          className="faq__icon"
        />
      </button>

      <div className={`faq__content ${isActive ? "faq__content--active" : ""}`}>
        <div className="faq__answer">{answer}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
