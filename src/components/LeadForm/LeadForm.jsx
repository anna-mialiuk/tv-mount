import Button from "../Button/Button";
import sendLead from "../../utils/sendLead";
import "./LeadForm.sass";

function LeadForm({
  title = "Get a discount",
  buttonText = "Book now and get a discount",
  note = "",
  showCallButton = false,
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      await sendLead({
        formName: title,
        name: formData.get("name"),
        city: formData.get("city"),
        phone: formData.get("phone"),
      });

      event.currentTarget.reset();
      alert("Thank you! Your request has been sent.");
    } catch (error) {
      console.error("Lead form submit error:", error);
      alert("Failed to send request. Please try again.");
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h3 className="lead-form__title">{title}</h3>

      <label className="visually-hidden" htmlFor="lead-name">
        Name
      </label>
      <input
        id="lead-name"
        name="name"
        type="text"
        placeholder="Name"
        className="lead-form__input"
        autoComplete="name"
      />

      <label className="visually-hidden" htmlFor="lead-city">
        City
      </label>
      <input
        id="lead-city"
        name="city"
        type="text"
        placeholder="City"
        className="lead-form__input"
        autoComplete="address-level2"
      />

      <label className="visually-hidden" htmlFor="lead-phone">
        Phone number
      </label>
      <input
        id="lead-phone"
        name="phone"
        type="tel"
        placeholder="Phone number"
        className="lead-form__input"
        autoComplete="tel"
      />

      <Button type="submit" variant="primary" className="lead-form__button">
        {buttonText}
      </Button>

      {showCallButton && (
        <Button variant="outline" className="lead-form__call">
          <img src="/phone.svg" alt="" className="lead-form__button-icon" />
          Call: (404) 793-8283
        </Button>
      )}

      {note && <p className="lead-form__note">{note}</p>}
    </form>
  );
}

export default LeadForm;
