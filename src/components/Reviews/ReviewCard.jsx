import { useState } from "react";

const TEXT_LIMIT = 200;

function ReviewCard({ avatar, name, time, text, rating = 5 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongReview = text.length > TEXT_LIMIT;
  const displayedText =
    isExpanded || !isLongReview
      ? text
      : `${text.slice(0, TEXT_LIMIT).trim()}...`;

  return (
    <article className="reviews__card">
      <div className="reviews__author">
        {avatar ? (
          <img src={avatar} alt="" className="reviews__avatar" loading="lazy" />
        ) : (
          <span
            className="reviews__avatar reviews__avatar--letter"
            aria-hidden="true"
          >
            {name.charAt(0)}
          </span>
        )}

        <div>
          <h3 className="reviews__name">{name}</h3>
          <span className="reviews__time">{time}</span>
        </div>
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

      <div className="reviews__rating">
        <span className="reviews__stars" aria-hidden="true">
          {"★".repeat(rating)}
        </span>
        <span className="reviews__rating-value">{rating.toFixed(1)}</span>
      </div>
    </article>
  );
}

export default ReviewCard;
