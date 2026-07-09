import LeadForm from "../LeadForm/LeadForm";
import "./BookingCTA.sass";

function BookingCTA() {
  return (
    <section id="contact" className="booking-cta">
      <div className="container">
        <div className="booking-cta__wrapper">
          <div className="booking-cta__content">
            <h2 className="booking-cta__title">
              READY FOR PROFESSIONAL TV INSTALLATION?
            </h2>

            <p className="booking-cta__subtitle">
              Installation on the day you order. No hidden fees
            </p>

            <p className="booking-cta__text">Book now and get:</p>

            <ul className="booking-cta__list">
              <li className="booking-cta__item">
                <img
                  src="/check.svg"
                  alt="icon"
                  className="booking-cta__item-icon"
                  loading="lazy"
                />
                <span className="booking-cta__item-span-text">
                  Free consultation
                </span>
              </li>
              <li className="booking-cta__item">
                <img
                  src="/check.svg"
                  alt="icon"
                  className="booking-cta__item-icon"
                  loading="lazy"
                />
                <span className="booking-cta__item-span-text text-s">
                  $50 discount
                </span>
              </li>
              <li className="booking-cta__item">
                <img
                  src="/check.svg"
                  alt="icon"
                  className="booking-cta__item-icon"
                  loading="lazy"
                />
                <span className="booking-cta__item-span-text text-s">
                  2-year warranty
                </span>
              </li>
            </ul>
          </div>

          <div className="booking-cta__form">
            <LeadForm
              title="Get a $50 discount"
              buttonText="Book now"
              showCallButton={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;
