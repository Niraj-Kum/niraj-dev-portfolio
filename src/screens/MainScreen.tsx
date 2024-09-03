/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import Home from "./Home";

const disciplines = ["Engineer", "Full Stack", "Coder"];

const MainScreen = () => {
  const intro = useRef<any>();
  const [visibleSections, setVisibleSections] = useState<any>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] =
    useState<boolean>(false);

  useEffect(() => {
    const revealSections = [intro];

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
      {/* <Experience /> */}
      {/* <Project
        id="project-1"
        sectionRef={projectOne}
        visible={true}
        index="01"
        title="A Tool for Everything"
        description="Creating a platfrom to help developers build better software."
        buttonText="View Project"
        buttonTo="/projects/dtt"
        imageSrc={useMemo(() => [`${dttProject} 980w, ${dttProjectLarge} 1376w`], [])}
        imageAlt={useMemo(() => ['DevTech Tools Landing Page'], [])}
        imagePlaceholder={useMemo(() => [dttProjectPlaceholder], [])}
        imageType="laptop"
      />
      <Skills sectionRef={skillRef} /> */}
    </>
  );
};

export default MainScreen;
