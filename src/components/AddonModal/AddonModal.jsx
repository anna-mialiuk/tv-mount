import { useEffect } from "react";

import addonDetails from "../../data/addonDetails";
import Button from "../Button/Button";
import AddonSection from "./AddonSection";

import "./AddonModal.sass";

function AddonModal({ addonId, onClose, onQuizOpen }) {
  const addon = addonDetails[addonId];

  useEffect(() => {
    if (!addon) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [addon, onClose]);

  if (!addon) return null;

  const handleBookNow = () => {
    onClose();
    onQuizOpen();
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="addon-modal"
      role="presentation"
      onMouseDown={handleOverlayClick}
    >
      <div
        className="addon-modal__window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="addon-modal-title"
      >
        <button
          type="button"
          className="addon-modal__close"
          aria-label="Close popup"
          onClick={onClose}
        >
          <img src="/close-x.svg" alt="" className="addon-modal__close-icon" />
        </button>

        <div className="addon-modal__content">
          <header className="addon-modal__header">
            <h2 className="addon-modal__title" id="addon-modal-title">
              {addon.title}
            </h2>

            {addon.subtitle && (
              <p className="addon-modal__subtitle">{addon.subtitle}</p>
            )}

            {addon.intro?.length > 0 && (
              <div className="addon-modal__intro">
                {addon.intro.map((paragraph) => (
                  <p className="addon-modal__intro-text p" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </header>

          <div className="addon-modal__sections">
            {addon.sections.map((section) => (
              <AddonSection section={section} key={section.id} />
            ))}
          </div>

          <div className="addon-modal__footer">
            <Button
              variant="primary"
              className="addon-modal__button"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddonModal;
