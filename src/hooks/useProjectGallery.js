import { useEffect, useState } from "react";

function useProjectGallery(projects) {
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
    setActiveIndex((current) => {
      if (current === null) return 0;

      return current === 0 ? projects.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return 0;

      return current === projects.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex !== null && activeIndex >= projects.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, projects.length]);

  return {
    activeIndex,
    activeImage,
    isGalleryOpen,
    openGallery,
    closeGallery,
    showPrev,
    showNext,
    setActiveIndex,
  };
}

export default useProjectGallery;
