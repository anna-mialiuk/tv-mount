function ReviewCard({ avatar, name, time, text, city }) {
  return (
    <article className="reviews__card">
      <div className="reviews__card-top">
        <div className="reviews__card-top-left">
          <img
            src={avatar}
            alt="avatar"
            className="reviews__avatar"
            loading="lazy"
          />
          <div>
            <h3 className="reviews__name">{name}</h3>
            <div className="reviews__stars">★★★★★</div>
          </div>
        </div>
        <span className="reviews__time">{time}</span>
      </div>

      <p className="reviews__text">{text}</p>
      <div className="reviews__line"></div>
      <p className="reviews__city">{city}</p>
    </article>
  );
}

export default ReviewCard;
