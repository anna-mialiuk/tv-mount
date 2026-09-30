import { useState } from "react";

function useProjectGallery(projects) {
  const [rawIndex, setActiveIndex] = useState(null);

  // if the list got shorter (e.g. desktop -> mobile set), fall back to the
  // first photo — calculated here instead of fixing state in an effect
  const activeIndex =
    rawIndex !== null && rawIndex >= projects.length ? 0 : rawIndex;

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
