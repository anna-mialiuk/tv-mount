import { useState } from "react";

import addons from "../../data/addons";
import AddonModal from "../AddonModal/AddonModal";
import Button from "../Button/Button";

import "./PopularAddons.sass";

function PopularAddons({ onQuizOpen }) {
  const [selectedAddon, setSelectedAddon] = useState(null);

  return (
    <>
      <section className="popular-addons">
        <div className="popular-addons__container container">
          <h2 className="popular-addons__title">Pick the right for me</h2>

          <div className="popular-addons__list">
            {addons.map((addon) => (
              <article className="popular-addons__card" key={addon.id}>
                <img
                  src={addon.image}
                  alt={addon.title}
                  className="popular-addons__image"
                  loading="lazy"
                />

                <p className="popular-addons__card-title">{addon.title}</p>

                <Button
                  variant="primary"
                  className="popular-addons__button"
                  onClick={() => setSelectedAddon(addon.id)}
                >
                  More Details
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AddonModal
        addonId={selectedAddon}
        onClose={() => setSelectedAddon(null)}
        onQuizOpen={onQuizOpen}
      />
    </>
  );
}

export default PopularAddons;
