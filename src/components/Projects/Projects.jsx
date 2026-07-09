import { useState } from "react";
import projects from "../../data/projects";
import Button from "../Button/Button";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";
import "./Projects.sass";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isGalleryOpen = activeIndex !== null;
  const activeImage = isGalleryOpen ? projects[activeIndex] : null;

  const openGallery = (index = 0) => {
    setActiveIndex(index);
  };

  const closeGallery = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="projects" id="blog">
      <div className="container">
        <h2 className="projects__title">Our Work: Before and After</h2>

        <div className="projects__grid">
          {projects.map((image, index) => (
            <ProjectCard
              key={image}
              image={image}
              onClick={() => openGallery(index)}
            />
          ))}
        </div>

        <div className="projects__actions">
          <Button
            variant="primary"
            className="projects__button"
            onClick={() => openGallery(0)}
          >
            View all projects
            <img
              className="projects__button-icon"
              src="/button-arrow.svg"
              alt="button-icon"
              loading="lazy"
            />
          </Button>
        </div>
      </div>

      {isGalleryOpen && (
        <ProjectGallery
          projects={projects}
          activeIndex={activeIndex}
          activeImage={activeImage}
          onClose={closeGallery}
          onPrev={showPrev}
          onNext={showNext}
          onSelect={setActiveIndex}
        />
      )}
    </section>
  );
}

export default Projects;
