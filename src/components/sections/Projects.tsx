import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SpiralNotebook } from '../ui/SpiralNotebook';
import { BalloonCat } from '../doodles/BalloonCat';
import { portfolioData } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const handlePlaceholderClick = (e: React.MouseEvent, type: string, projectTitle: string) => {
    e.preventDefault();
    alert(`${type} link for "${projectTitle}" will be updated when Gunal provides the final URL.`);
  };

  return (
    <section
      id="projects"
      className="relative w-full mb-28 sm:mb-36 scroll-mt-20 select-none overflow-visible"
    >
      {/* 1. SECTION HEADING */}
      <SectionHeading
        title="THINGS I HAVE BUILT"
        rotate="-1.5deg"
        color="black"
        className="mb-12 sm:mb-16"
      />

      {/* Main Spiral Notebook Cards Container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 relative">
        <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-12 relative z-10">
          {projects.map((project) => (
            <SpiralNotebook
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              image={project.image}
              repoUrl={project.repositoryUrl}
              liveUrl={project.liveUrl}
              baseRotate={project.rotate || '0deg'}
              isUpcoming={project.isPlaceholder}
              onRepoClick={
                project.repositoryUrl?.startsWith('#')
                  ? (e) => handlePlaceholderClick(e, 'Repository', project.title)
                  : undefined
              }
              onLiveClick={
                project.liveUrl?.startsWith('#')
                  ? (e) => handlePlaceholderClick(e, 'Live Demo', project.title)
                  : undefined
              }
            />
          ))}
        </div>

        {/* Ambient Balloon Cat Doodle (Desktop & Tablet) */}
        <div className="absolute -bottom-16 right-2 sm:right-8 lg:right-12 hidden md:block pointer-events-none z-20 opacity-90 animate-cat-float">
          <BalloonCat className="w-24 sm:w-28 lg:w-32" />
        </div>
      </div>
    </section>
  );
};
