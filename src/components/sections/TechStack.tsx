import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { StickyNote } from '../ui/StickyNote';
import { HotAirBalloon } from '../doodles/HotAirBalloon';
import { portfolioData } from '../../data/portfolioData';

export const TechStack: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skillz"
      className="relative w-full mb-28 sm:mb-36 scroll-mt-20 select-none overflow-visible"
    >
      {/* 1. SECTION HEADING */}
      <SectionHeading
        title="MY TECH STACK"
        rotate="-1.5deg"
        color="black"
        className="mb-12 sm:mb-16"
      />

      {/* Ambient Hot-Air Balloon Doodle (Desktop & Tablet) */}
      <div className="absolute right-2 sm:right-6 lg:right-10 -top-6 sm:top-2 hidden md:block pointer-events-none z-10 opacity-90 animate-balloon-float">
        <HotAirBalloon className="w-32 lg:w-44" />
      </div>

      {/* Main Sticky Notes Container */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          
          {/* 1. Frontend Sticky Note */}
          <StickyNote
            title={skills.frontend.title}
            color={skills.frontend.color}
            rotate={skills.frontend.rotate}
            pinColor={skills.frontend.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-sketch text-lg sm:text-xl text-ink">
              {skills.frontend.items.map((tech) => (
                <li key={tech} className="tracking-wide">
                  {tech}
                </li>
              ))}
            </ul>
          </StickyNote>

          {/* 2. Backend Sticky Note */}
          <StickyNote
            title={skills.backend.title}
            color={skills.backend.color}
            rotate={skills.backend.rotate}
            pinColor={skills.backend.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-sketch text-lg sm:text-xl text-ink">
              {skills.backend.items.map((tech) => (
                <li key={tech} className="tracking-wide">
                  {tech}
                </li>
              ))}
            </ul>
          </StickyNote>

          {/* 3. Databases Sticky Note */}
          <StickyNote
            title={skills.databases.title}
            color={skills.databases.color}
            rotate={skills.databases.rotate}
            pinColor={skills.databases.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-sketch text-lg sm:text-xl text-ink">
              {skills.databases.items.map((tech) => (
                <li key={tech} className="tracking-wide">
                  {tech}
                </li>
              ))}
            </ul>
          </StickyNote>

          {/* 4. Tools Sticky Note */}
          <StickyNote
            title={skills.tools.title}
            color={skills.tools.color}
            rotate={skills.tools.rotate}
            pinColor={skills.tools.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-sketch text-lg sm:text-xl text-ink">
              {skills.tools.items.map((tech) => (
                <li key={tech} className="tracking-wide">
                  {tech}
                </li>
              ))}
            </ul>
          </StickyNote>

        </div>
      </div>
    </section>
  );
};
