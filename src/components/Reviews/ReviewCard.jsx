import { useState } from "react";

function ReviewCard({ avatar, name, time, text, city }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const TEXT_LIMIT = 220;

  const isLongReview = text.length > TEXT_LIMIT;

  const displayedText =
    isExpanded || !isLongReview ? text : `${text.slice(0, TEXT_LIMIT)}...`;

  return (
    <article className="reviews__card">
      <div className="reviews__card-top">
        <div className="reviews__card-top-left">
          <img
            src={avatar}
            alt={`${name} avatar`}
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

      <p className="reviews__text">{displayedText}</p>

      {isLongReview && (
        <button
          className="reviews__read-more"
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="reviews__line"></div>

      <p className="reviews__city">{city}</p>
    </article>
  );
}

export default ReviewCard;
