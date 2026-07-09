import SEO from "../components/SEO/SEO";
import seo from "../data/seo";

function Disclaimer() {
  return (
    <>
      <SEO {...seo.disclaimer} />
      <main className="legal-page">
        <div className="container">
          <h1>Disclaimer</h1>

          <p>
            The information on this website is provided for general
            informational purposes only.
          </p>

          <h2>Service Information</h2>
          <p>
            Prices, discounts, availability, and service times may vary
            depending on location, wall type, TV size, and installation
            complexity.
          </p>

          <h2>No Guarantee</h2>
          <p>
            While we aim to provide accurate information, we do not guarantee
            that all website content is always complete, current, or error-free.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to third-party websites. We are not
            responsible for their content or policies.
          </p>
        </div>
      </main>
    </>
  );
}

export default Disclaimer;
