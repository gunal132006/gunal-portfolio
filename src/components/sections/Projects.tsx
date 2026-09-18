import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SpiralNotebook } from '../ui/SpiralNotebook';
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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 relative flex justify-center">
        <div className="Projects-Grid">
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

          {/* Authentic Cat Asset from Reference (Bottom Right of Grid) */}
          <img
            src="/Cat.webp"
            alt="Cat"
            className="Cat pointer-events-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
