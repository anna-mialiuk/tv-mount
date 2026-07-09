import "./Card.sass";

function Card({ icon, number, title, text, time }) {
  return (
    <article className="card">
      <div className="card__top">
        {icon && <img src={icon} alt="" className="card__icon" />}
        {number && <div className="card__number">{number}</div>}
        <h3 className="card__title">{title}</h3>
      </div>
      <p className="card__text">{text}</p>

      {time && (
        <div className="card__time">
          <img
            src="/clock.svg"
            alt="icon"
            loading="lazy"
            className="card__clock"
          />
          <span className="card__time-text">{time}</span>
        </div>
      )}
    </article>
  );
}

export default Card;
