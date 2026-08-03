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
            <h3 className="h3">Navigation</h3>

            <a className="footer__a p" href="/">
              Home
            </a>
            <a className="footer__a p" href="/#services">
              Services
            </a>
            <a className="footer__a p" href="/#about">
              About us
            </a>
            <a className="footer__a p" href="/#reviews">
              Reviews
            </a>
            <a className="footer__a p" href="/#contact">
              Contact
            </a>
            <a className="footer__a p" href="/#blog">
              Blog
            </a>
          </nav>

          <div className="footer__legal">
            <h3 className="h3">Legal</h3>

            <Link className="footer__a p" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="footer__a p" to="/cookie-policy">
              Cookie Policy
            </Link>
            <Link className="footer__a p" to="/disclaimer">
              Disclaimer
            </Link>
            <Link className="footer__a p" to="/terms-of-service">
              Terms of Service
            </Link>
          </div>

          <div className="footer__contacts">
            <h3 className="h3">Contacts</h3>

            <a className="footer__a p" href="tel:+14047938283">
              (404) 793-8283
            </a>
            <a className="footer__a p" href="mailto:tvmount@gmail.com">
              tvmount@gmail.com
            </a>
            <p className="p">MON-SUN 8:00 AM - 9:00 PM</p>

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
          <p className="p">© {currentYear} TV Mount Company.</p>
          <p className="p">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
