import Button from "../Button/Button";
import "./BundleDiscount.sass";

function BundleDiscount({ onQuizOpen }) {
  const handleDiscountClick = () => {
    if (typeof onQuizOpen === "function") {
      onQuizOpen();
    }
  };

  return (
    <section className="bundle-discount">
      <div className="bundle-discount__container container">
        <div className="bundle-discount__info">
          <div className="bundle-discount__label">
            <span>Limited offer</span>

            <span className="bundle-discount__label-dot" aria-hidden="true">
              •
            </span>

            <span className="bundle-discount__label-accent">Best value</span>
          </div>

          <h2 className="bundle-discount__title">
            More screens. Less
            <br />
            hassle.{" "}
            <span className="bundle-discount__title-accent">
              Save up to 30%
            </span>
          </h2>

          <p className="bundle-discount__description">
            Save up to 30% when you book multiple installations. Professional
            wire concealment included — flawless walls in a single visit.
          </p>

          <Button
            variant="primary"
            className="projects__button"
            onClick={handleDiscountClick}
          >
            View all projects
            <img
              className="projects__button-icon"
              src="/button-arrow.svg"
              alt=""
              loading="lazy"
            />
          </Button>
        </div>
      </div>

      <div className="bundle-discount__visual" aria-hidden="true">
        <img
          className="bundle-discount__image"
          src="/discounts/tv-top.webp"
          alt=""
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default BundleDiscount;
