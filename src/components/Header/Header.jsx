import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.sass";

// after this many px the header detaches from the top of the page
const SCROLL_THRESHOLD = 120;
// ignore tiny scroll movements (trackpad inertia) so the header doesn't flicker
const SCROLL_DELTA = 8;

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isShownOnScroll = isScrolled && (!isHidden || isMenuOpen);
  // home page: the header stays over the hero until it has to slide in from the top
  const isOverlay = isHome && !isShownOnScroll;

  // hide the header when scrolling down, show it again when scrolling up
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const isPastThreshold = currentY > SCROLL_THRESHOLD;

      setIsScrolled(isPastThreshold);

      if (!isPastThreshold) {
        setIsHidden(false);
      } else if (Math.abs(delta) >= SCROLL_DELTA) {
        setIsHidden(delta > 0);
      }

      if (Math.abs(delta) >= SCROLL_DELTA || !isPastThreshold) {
        lastScrollY.current = currentY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClassName = [
    "header",
    isOverlay && "header--overlay",
    isScrolled && !isOverlay && "header--scrolled",
    isHome && isShownOnScroll && "header--fixed",
    !isHome && isHidden && !isMenuOpen && "header--hidden",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={headerClassName}>
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
