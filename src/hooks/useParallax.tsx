/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function useParallax(multiplier: any) {
  const [offset, setOffset] = useState<number>();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let ticking = false;
    let animationFrame: number;

    const animate = () => {
      setOffset(Math.max(0, window.scrollY) * multiplier);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll);
    }

    return function cleanUp() {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, prefersReducedMotion]);

  return offset;
}

export default useParallax;
