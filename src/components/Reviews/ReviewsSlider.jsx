import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function getVisibleCardsCount() {
  if (window.innerWidth <= 768) {
    return 1;
  }

  if (window.innerWidth <= 1024) {
    return 2;
  }

  return 4;
}

function ReviewsSlider({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards = getVisibleCardsCount();

      setVisibleCards(nextVisibleCards);

      setCurrentIndex((previousIndex) => {
        const nextMaxIndex = Math.max(0, reviews.length - nextVisibleCards);

        return Math.min(previousIndex, nextMaxIndex);
      });
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, [reviews.length]);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + visibleCards,
  );

  const handlePrev = () => {
    setCurrentIndex((previousIndex) => Math.max(0, previousIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((previousIndex) => Math.min(maxIndex, previousIndex + 1));
  };

  return (
    <div className="reviews__slider">
      <div className="reviews__cards">
        {visibleReviews.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${currentIndex + index}`}
            {...review}
          />
        ))}
      </div>

      {reviews.length > visibleCards && (
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
      )}
    </div>
  );
}

export default ReviewsSlider;
