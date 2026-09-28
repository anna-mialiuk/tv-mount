import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.sass";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contacts", href: "/#contact" },
  { label: "About us", href: "/#about" },
  { label: "Blog", href: "/blog" },
];

function Header({ onQuizOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isOverlay = pathname === "/";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isOverlay ? "header--overlay" : ""}`}>
      <div className="container header__container">
        <a href="/" className="header__logo" onClick={closeMenu}>
          <img
            src={isOverlay ? "/logo-footer.svg" : "/logo.svg"}
            alt="TV Mount Company"
          />
        </a>

        <nav
          className={`header__nav ${isMenuOpen ? "header__nav--active" : ""}`}
        >
          {navLinks.map((link) => (
            <a
              className="header__a"
              href={link.href}
              key={link.label}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="tel:+14047938283" className="header__number-phone">
          (404) 793-8283
        </a>

        <div className="header__actions">
          <a className="header__number-desktop" href="tel:+14047938283">
            (404) 793-8283
          </a>

          <Button
            className="header__button"
            onClick={() => {
              closeMenu();
              onQuizOpen?.();
            }}
          >
            Get My Price
          </Button>

          <button
            type="button"
            className={`header__burger ${
              isMenuOpen ? "header__burger--active" : ""
            }`}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <img
              src={isMenuOpen ? "/close-x.svg" : "/burger.svg"}
              alt=""
              className={`header__burger-icon ${
                isMenuOpen ? "header__burger-icon--active" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
