import discounts from "../../data/discounts";
import "./BundleDiscount.sass";

function BundleDiscount() {
  return (
    <section className="bundle-discount">
      <div className="bundle-discount__container container">
        <div className="bundle-discount__list">
          {discounts.map((discount) => (
            <article className="bundle-discount__card" key={discount.id}>
              <div className="bundle-discount__card-inner">
                <div className="bundle-discount__text">
                  <p className="bundle-discount__title">{discount.title}</p>

                  <p className="bundle-discount__subtitle">
                    {discount.subtitle}
                  </p>
                </div>

                <div className="bundle-discount__visual">
                  <img
                    src={discount.image}
                    alt={`${discount.subtitle} discount`}
                    className="bundle-discount__image"
                    loading="lazy"
                  />

                  <span className="bundle-discount__badge">
                    {discount.badge}
                  </span>
                </div>
              </div>

              <img
                src="/crown.png"
                alt=""
                className="bundle-discount__crown"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BundleDiscount;
