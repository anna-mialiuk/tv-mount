function ProjectCard({ image, onClick }) {
  return (
    <button
      type="button"
      className="projects__card"
      onClick={onClick}
      aria-label="Open project gallery"
    >
      <img
        src={image}
        alt="TV Mount Company project"
        loading="lazy"
        className="projects__image"
      />
    </button>
  );
}

export default ProjectCard;
