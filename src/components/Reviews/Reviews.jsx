import reviews, { reviewsSummary } from "../../data/reviews";
import ReviewsSlider from "./ReviewsSlider";
import "./Reviews.sass";

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__container container">
        <div className="reviews__header">
          <h2 className="reviews__title">What Our Customers Say</h2>

          <span className="reviews__google-button" aria-disabled="true">
            Review us on Google
          </span>
        </div>

        <ReviewsSlider reviews={reviews} summary={reviewsSummary} />
      </div>
    </section>
  );
}

export default Reviews;
