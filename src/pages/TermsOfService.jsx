import SEO from "../components/SEO/SEO";
import seo from "../data/seo";

function TermsOfService() {
  return (
    <>
      <SEO {...seo.terms} />
      <main className="legal-page">
        <div className="container">
          <h1>Terms of Service</h1>

          <p>
            By using this website and requesting services from TV Mount Company,
            you agree to these Terms of Service.
          </p>

          <h2>Services</h2>
          <p>
            We provide TV mounting and related installation services. Final
            pricing depends on the details of your request and installation
            requirements.
          </p>

          <h2>Appointments</h2>
          <p>
            Appointment times are subject to availability. We may contact you to
            confirm or reschedule your booking.
          </p>

          <h2>Payments</h2>
          <p>
            Payment terms will be confirmed before service begins. Additional
            work may require additional charges.
          </p>

          <h2>Warranty</h2>
          <p>
            Warranty terms may vary depending on the service performed. Details
            will be provided during booking or service confirmation.
          </p>
        </div>
      </main>
    </>
  );
}

export default TermsOfService;
