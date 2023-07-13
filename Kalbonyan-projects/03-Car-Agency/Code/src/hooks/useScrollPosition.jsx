import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // update position state
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    // add event listener to scrolling
    window.addEventListener('scroll', updatePosition);

    // first time
    updatePosition();

    // clear old listener
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
export default useScrollPosition;
