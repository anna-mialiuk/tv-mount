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
          </div>

          <h2 className="bundle-discount__title h2">
            More screens. More deals!{" "}
            <span className="bundle-discount__title-accent">
              Save up to 30%
            </span>
          </h2>

          <p className="bundle-discount__description p">
            Save up to 30% when you book multiple installations. Get the best
            deals on wire concealment today.
          </p>

          <Button
            variant="primary"
            className="projects__button"
            onClick={handleDiscountClick}
          >
            Book your discount
            <img
              className="projects__button-icon"
              src="/button-arrow.svg"
              alt=""
              loading="lazy"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BundleDiscount;
