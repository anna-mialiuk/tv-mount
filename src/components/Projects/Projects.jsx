import projectsData from "../../data/projects";
import useIsMobile from "../../hooks/useIsMobile";
import useProjectGallery from "../../hooks/useProjectGallery";
import Button from "../Button/Button";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";
import "./Projects.sass";

const VISIBLE_PROJECTS_COUNT = 8;

function Projects() {
  const isMobile = useIsMobile();

  const projects = isMobile ? projectsData.mobile : projectsData.desktop;

  const visibleProjects = projects.slice(0, VISIBLE_PROJECTS_COUNT);

  const {
    activeIndex,
    activeImage,
    isGalleryOpen,
    openGallery,
    closeGallery,
    showPrev,
    showNext,
    setActiveIndex,
  } = useProjectGallery(projects);

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__title">Our Work: Before and After</h2>

        <div className="projects__grid">
          {visibleProjects.map((image, index) => (
            <ProjectCard
              key={image}
              image={image}
              onClick={() => openGallery(index)}
            />
          ))}
        </div>

        {projects.length > VISIBLE_PROJECTS_COUNT && (
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
                alt=""
                loading="lazy"
              />
            </Button>
          </div>
        )}
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
