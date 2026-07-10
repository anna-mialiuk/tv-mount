import LeadForm from "../LeadForm/LeadForm";
import Countdown from "../Countdown/Countdown";
import "./Offer.sass";

const slots = [
  {
    count: "3 slots left",
    text: "for today",
  },
  {
    count: "8 slots left",
    text: "for tomorrow",
  },
];

function Offer() {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__wrapper">
          <div className="offer__content">
            <h2 className="offer__title">LIMITED OFFER!</h2>

            <p className="offer__description text-s">
              Get a $33 discount on any service + Free consultation
            </p>

            <div className="offer__info">
              <Countdown />

              <div className="offer__side">
                <div className="offer__slots">
                  {slots.map((slot) => (
                    <div className="offer__slot" key={slot.count}>
                      <img src="/arrow.svg" alt="" className="offer__arrow" />

                      <div>
                        <strong>{slot.count}</strong>
                        <br />
                        <span>{slot.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="offer__bonus">
                  <img src="/gift.svg" alt="" className="offer__bonus-icon" />

                  <p className="offer__bonus-text">
                    + Free wire concealment (value $49)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="offer__form">
            <LeadForm
              title="Get a discount"
              buttonText="Book now and get a discount"
              note="Offer valid until the end of the day. 3 slots left!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
