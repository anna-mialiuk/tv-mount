import SEO from "../components/SEO/SEO";
import seo from "../data/seo";

function PrivacyPolicy() {
  return (
    <>
      <SEO {...seo.privacy} />
      <main className="legal-page">
        <div className="container">
          <h1>Privacy Policy</h1>

          <p>
            TV Mount Company respects your privacy. This Privacy Policy explains
            how we collect, use, and protect information submitted through our
            website forms.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect your name, phone number, city, and service
            preferences when you request a quote or contact us.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use your information to contact you, confirm your request,
            provide pricing, and schedule TV mounting services.
          </p>

          <h2>Data Protection</h2>
          <p>
            We do not sell your personal information. We take reasonable steps
            to keep your information secure.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions, contact us at tvmountc@gmail.com or call
            (404) 793-8283.
          </p>
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
