import { useState } from "react";

import mountingStyles from "../../data/mountingStyles";
import Button from "../Button/Button";

import "./MountingStyles.sass";

function MountingStyles({ onQuizOpen }) {
  const [activeStyleId, setActiveStyleId] = useState(mountingStyles[0].id);

  const activeStyle =
    mountingStyles.find((style) => style.id === activeStyleId) ||
    mountingStyles[0];

  return (
    <section className="mounting-styles">
      <div className="mounting-styles__container container">
        <div className="mounting-styles__header">
          <h2 className="mounting-styles__title">
            All Mounting Styles Available
          </h2>

          <p className="mounting-styles__subtitle">
            Fixed, Tilt, Full-Motion & More
          </p>
        </div>

        <div
          className="mounting-styles__tabs"
          role="tablist"
          aria-label="TV mounting styles"
        >
          {mountingStyles.map((style) => {
            const isActive = style.id === activeStyleId;

            return (
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`mounting-styles__tab ${
                  isActive ? "mounting-styles__tab--active" : ""
                }`}
                onClick={() => setActiveStyleId(style.id)}
                key={style.id}
              >
                {style.tab}
              </button>
            );
          })}
        </div>

        <div className="mounting-styles__content">
          <div className="mounting-styles__image-wrapper">
            <img
              src={activeStyle.image}
              alt={activeStyle.title}
              className="mounting-styles__image"
              loading="lazy"
            />
          </div>

          <div className="mounting-styles__information">
            <h3 className="mounting-styles__content-title">
              {activeStyle.title}
            </h3>

            <div className="mounting-styles__description">
              {activeStyle.paragraphs.map((paragraph) => (
                <p className="mounting-styles__paragraph p" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <Button
              variant="primary"
              className="mounting-styles__button"
              onClick={onQuizOpen}
            >
              Get my Price
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MountingStyles;
