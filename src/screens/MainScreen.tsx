/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

import Home from "./Home";
import Projects from "./Projects";
import Details from "./Details";
import Articles from "./Articles";
import Contact from "./Contact";

const disciplines = ["Engineer", "AI Builder", "Full Stack", "DevOps", "Shipper"];

const MainScreen = () => {
  const intro = useRef<any>();
  const projectRef = useRef<any>();
  const detailsRef = useRef<any>();
  const articlesRef = useRef<any>();
  const contactRef = useRef<any>();
  const [visibleSections, setVisibleSections] = useState<any>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] =
    useState<boolean>(false);

  useEffect(() => {
    const revealSections = [intro, projectRef, detailsRef, articlesRef, contactRef];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section, 0)) return;
            setVisibleSections((prevSections: any) => [
              ...prevSections,
              section,
            ]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );

    revealSections.forEach((section: any) => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

    return function cleanUp() {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <>
      <Home
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Projects 
        id="projects"
        sectionRef={projectRef}
      />
      <Details 
        id="details"
        sectionRef={detailsRef}
        className="section-alt"
      />
      <Articles 
        id="articles"
        sectionRef={articlesRef}
      />
      <Contact 
        id="contact"
        sectionRef={contactRef}
        className="section-alt"
      />
    </>
  );
};

export default MainScreen;
