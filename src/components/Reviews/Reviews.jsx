import ReviewCard from "./ReviewCard";
import reviews from "../../data/reviews";
import "./Reviews.sass";

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="reviews__title">What Our Customers Say</h2>

        <div className="reviews__rating">
          <span className="stars">★★★★★</span>
          <p className="reviews__rate-text text-sm">
            4.9 / 5.0 (8,000+ reviews)
          </p>
        </div>

        <div className="reviews__cards">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
