import { Link } from "react-router-dom";
import "./Footer.sass";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <img
                src="/logo-footer.svg"
                alt="TV Mount Company"
                loading="lazy"
              />
            </a>

            <p>TV Mount Company</p>
            <p>Professional TV Installation</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h3>Navigation</h3>

            <a className="footer__a" href="/">
              Home
            </a>
            <a className="footer__a" href="/#services">
              Services
            </a>
            <a className="footer__a" href="/#about">
              About us
            </a>
            <a className="footer__a" href="/#reviews">
              Reviews
            </a>
            <a className="footer__a" href="/#contact">
              Contact
            </a>
            <a className="footer__a" href="/#blog">
              Blog
            </a>
          </nav>

          <div className="footer__legal">
            <h3>Legal</h3>

            <Link className="footer__a" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="footer__a" to="/cookie-policy">
              Cookie Policy
            </Link>
            <Link className="footer__a" to="/disclaimer">
              Disclaimer
            </Link>
            <Link className="footer__a" to="/terms-of-service">
              Terms of Service
            </Link>
          </div>

          <div className="footer__contacts">
            <h3>Contacts</h3>

            <a href="tel:+14047938283">(404) 793-8283</a>
            <a href="mailto:tvmount@gmail.com">tvmount@gmail.com</a>
            <p>MON-SUN 8:00 AM - 9:00 PM</p>

            <div className="footer__socials">
              <a href="#" aria-label="TV Mount Company on YouTube">
                <img src="/youtube.svg" alt="" loading="lazy" />
              </a>

              <a href="#" aria-label="TV Mount Company on Facebook">
                <img src="/facebook.svg" alt="" loading="lazy" />
              </a>

              <a href="#" aria-label="TV Mount Company on Instagram">
                <img src="/instagram.svg" alt="" loading="lazy" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} TV Mount Company.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
