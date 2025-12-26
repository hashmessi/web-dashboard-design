import { useState, useEffect } from 'react';

/**
 * Custom hook for animating number values with easing
 * @param {number} end - Target number to animate to
 * @param {number} duration - Animation duration in milliseconds (default: 2000)
 * @returns {number} Current animated value
 */
export const useAnimatedNumber = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        // Ease out quart
        const easeVal = 1 - Math.pow(1 - progress, 4);
        setCount(end * easeVal);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};
