import reviews from "../../data/reviews";
import ReviewsSlider from "./ReviewsSlider";
import "./Reviews.sass";

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__container container">
        <h2 className="reviews__title">What Our Customers Say</h2>

        <div className="reviews__google">
          <div className="reviews__google-left">
            <span className="reviews__google-stars">★★★★★</span>

            <p className="reviews__google-text">
              <strong>5.0/ 5.0</strong>
            </p>

            <img
              className="reviews__google-logo"
              src="/icons/google.svg"
              alt="Google"
              loading="lazy"
            />
          </div>

          <div className="reviews__google-button">Review us on Google</div>
        </div>

        <ReviewsSlider reviews={reviews} />
      </div>
    </section>
  );
}

export default Reviews;
