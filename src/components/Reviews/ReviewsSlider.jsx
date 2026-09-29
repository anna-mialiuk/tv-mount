import { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";

const SWIPE_THRESHOLD = 40;

function getVisibleCardsCount() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function ReviewsSlider({ reviews, summary }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCardsCount);
  const touchStartX = useRef(null);

  const totalCards = reviews.length + 1;
  const maxIndex = Math.max(0, totalCards - visibleCards);

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCardsCount());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeIndex = Math.min(currentIndex, maxIndex);
  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= maxIndex;

  const handlePrev = () => setCurrentIndex(Math.max(0, activeIndex - 1));
  const handleNext = () => setCurrentIndex(Math.min(maxIndex, activeIndex + 1));

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (delta < -SWIPE_THRESHOLD) handleNext();
    if (delta > SWIPE_THRESHOLD) handlePrev();
  };

  return (
    <div className="reviews__slider">
      <div
        className="reviews__track"
        style={{ "--index": activeIndex }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <article className="reviews__card reviews__card--summary">
          <p className="reviews__summary-rating">{summary.rating}</p>
          <span className="reviews__summary-stars" aria-hidden="true">
            ★★★★★
          </span>
          <p className="reviews__summary-count">({summary.count} reviews)</p>
          <img
            className="reviews__summary-logo"
            src="/icons/google.svg"
            alt="Google"
            loading="lazy"
          />
        </article>

        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>

      <div className="reviews__controls">
        <button
          className="reviews__arrow reviews__arrow--prev"
          type="button"
          aria-label="Previous reviews"
          onClick={handlePrev}
          disabled={isPrevDisabled}
        >
          <img
            src={
              isPrevDisabled
                ? "/icons/arrow-left-grey.svg"
                : "/icons/arrow-left-orange.svg"
            }
            alt=""
            aria-hidden="true"
          />
        </button>

        <button
          className="reviews__arrow reviews__arrow--next"
          type="button"
          aria-label="Next reviews"
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          <img
            src={
              isNextDisabled
                ? "/icons/arrow-right-grey.svg"
                : "/icons/arrow-right-orange.svg"
            }
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

export default ReviewsSlider;
