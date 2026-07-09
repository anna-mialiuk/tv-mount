import SEO from "../components/SEO/SEO";
import seo from "../data/seo";

function CookiePolicy() {
  return (
    <>
      <SEO {...seo.cookies} />
      <main className="legal-page">
        <div className="container">
          <h1>Cookie Policy</h1>

          <p>
            This Cookie Policy explains how TV Mount Company may use cookies and
            similar technologies on this website.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small files stored on your device that help websites
            work properly and improve user experience.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            We may use cookies for basic website functionality, analytics, and
            improving our advertising performance.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            You can disable cookies in your browser settings. Some website
            features may not work correctly without cookies.
          </p>
        </div>
      </main>
    </>
  );
}

export default CookiePolicy;
