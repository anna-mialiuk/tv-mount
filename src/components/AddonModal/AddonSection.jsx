import AddonItem from "./AddonItem";

function AddonSection({ section }) {
  return (
    <section className="addon-modal__section">
      {section.title && (
        <h3 className="addon-modal__section-title">{section.title}</h3>
      )}

      {section.items?.length > 0 && (
        <ul className="addon-modal__items">
          {section.items.map((item) => {
            const key =
              typeof item === "string" ? item : `${item.title}-${item.text}`;

            return <AddonItem item={item} key={key} />;
          })}
        </ul>
      )}

      {section.images?.length > 0 && (
        <div className="addon-modal__gallery">
          {section.images.map((image, index) => (
            <img
              src={image}
              alt={`${section.title || "Gallery"} example ${index + 1}`}
              className="addon-modal__gallery-image"
              loading="lazy"
              key={image}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default AddonSection;
