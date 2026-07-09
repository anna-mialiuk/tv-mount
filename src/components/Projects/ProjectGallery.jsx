import { useEffect } from "react";

function ProjectGallery({
  projects,
  activeIndex,
  activeImage,
  onClose,
  onPrev,
  onNext,
  onSelect,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="projects__modal" onClick={onClose} role="presentation">
      <button
        type="button"
        className="projects__close"
        onClick={onClose}
        aria-label="Close project gallery"
      >
        ×
      </button>

      <div
        className="projects__modal-content"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Project gallery"
      >
        <img
          src={activeImage}
          alt="TV Mount Company project preview"
          loading="lazy"
          className="projects__modal-image"
        />

        <div className="projects__thumbs">
          {projects.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`projects__thumb ${
                activeIndex === index ? "projects__thumb--active" : ""
              }`}
              onClick={() => onSelect(index)}
              aria-label={`Open project ${index + 1}`}
              aria-pressed={activeIndex === index}
            >
              <img src={image} alt="" loading="lazy" />
            </button>
          ))}
        </div>

        <div className="projects__arrows">
          <button type="button" onClick={onPrev} aria-label="Previous project">
            ←
          </button>

          <button type="button" onClick={onNext} aria-label="Next project">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
