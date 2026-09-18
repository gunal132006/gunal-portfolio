import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { StickyNote } from '../ui/StickyNote';
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

      {/* Authentic Floating Hot-Air Balloon from Reference */}
      <img
        src="/Balloon.webp"
        alt="Balloon"
        className="Balloon pointer-events-none"
        loading="lazy"
        decoding="async"
      />

      {/* Main Sticky Notes Container */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-14 lg:gap-16">
          
          {/* 1. Frontend Sticky Note */}
          <StickyNote
            title={skills.frontend.title}
            color={skills.frontend.color}
            rotate="-2deg"
            pinColor={skills.frontend.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-architect text-xl text-ink">
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
            rotate="2deg"
            pinColor={skills.backend.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-architect text-xl text-ink">
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
            rotate="-1.5deg"
            pinColor={skills.databases.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-architect text-xl text-ink">
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
            rotate="1.5deg"
            pinColor={skills.tools.pinColor}
            className="transition-transform duration-200"
          >
            <ul className="list-none space-y-2 p-0 font-architect text-xl text-ink">
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
