/* eslint-disable @typescript-eslint/no-explicit-any */

import { techStack } from "../utils/constants";
import "./Skills.css";
import LinkCarousel from "../components/LinkCarousel";

const Skills = (props: any) => {
  const { sectionRef } = props;
  return (
    <section ref={sectionRef} className="skill-section" id="skills">
      <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
        <h1 className="pr-5 text-3xl font-bold">🥷 Skills and Technologies</h1>
        <div className="flex-grow border-t border-black dark:border-white border-1"></div>
      </div>
      <div className="transition-all duration-500 delay-300 translate-y-0 gap-y-4 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 motion-reduce:transition-none opacity-1 blur-0">
        <p>
          Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant apps and
          websites for smartphones, tablets, and desktops.
        </p>
        <LinkCarousel repeat={4} links={techStack} />
      </div>
    </section>
  );
};

export default Skills;
