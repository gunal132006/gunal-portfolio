import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TornPaper } from '../ui/TornPaper';
import { TiltCard } from '../ui/TiltCard';
import { Tape } from '../doodles/Tape';
import { Mosquito } from '../doodles/Mosquito';
import { PencilShavings } from '../doodles/PencilShavings';
import { portfolioData } from '../../data/portfolioData';

export const Myself: React.FC = () => {
  const { myself } = portfolioData;

  return (
    <section
      id="me"
      className="relative w-full mb-28 sm:mb-36 scroll-mt-20 select-none"
    >
      {/* 1. SECTION HEADING */}
      <SectionHeading
        title="MYSELF"
        rotate="-2deg"
        color="black"
        className="mb-10 sm:mb-14"
      />

      {/* Decorative Pencil Shavings (Desktop / Tablet) */}
      <div className="absolute right-0 sm:right-6 lg:right-12 top-28 hidden md:block pointer-events-none z-10 opacity-90">
        <PencilShavings className="w-44 lg:w-56 rotate-[160deg]" />
      </div>

      {/* Interactive Mosquito Easter Egg (Left Margin) */}
      <div className="absolute left-2 sm:left-8 lg:left-16 top-48 z-30">
        <Mosquito />
      </div>

      {/* Main Composition Container */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 flex flex-col items-center">
        
        {/* ================= MAIN TORN PAPER ABOUT SHEET ================= */}
        <TiltCard
          maxTilt={6}
          scale={1.01}
          baseRotate="-0.5deg"
          className="w-full max-w-2xl relative z-20"
        >
          <TornPaper
            tapeTop={true}
            tapeRotate="1deg"
            jitter={3}
            className="w-full"
          >
            <div className="space-y-5 font-hand text-xl sm:text-2xl text-ink-dark leading-relaxed">
              <p className="font-marker text-2xl sm:text-3xl text-ink">
                {myself.greeting}
              </p>

              <p>
                a{' '}
                <span className="highlighter font-bold">
                  Computer Science student
                </span>{' '}
                and developer who enjoys{' '}
                <span className="highlighter font-bold">
                  building practical software
                </span>{' '}
                and exploring technology through hands-on projects.
              </p>

              <p>
                I’m interested in{' '}
                <span className="highlighter font-bold">
                  full-stack development
                </span>
                ,{' '}
                <span className="highlighter font-bold">
                  data-driven applications
                </span>
                , problem solving, and learning how different technologies can be
                combined to build useful solutions.
              </p>

              <p>
                I enjoy turning ideas into working applications and continuously
                improving my technical skills through academic and personal
                projects.
              </p>
            </div>
          </TornPaper>
        </TiltCard>

        {/* ================= SECONDARY NOTE: EDUCATION & INTERESTS ================= */}
        <div className="w-full max-w-2xl mt-8 sm:mt-10 flex flex-col sm:flex-row gap-6 justify-between items-stretch">
          
          {/* Education Card */}
          <div className="relative flex-1 bg-white p-5 rounded-hand-2 border border-stone-300 shadow-paper rotate-[-1deg] hover:rotate-0 transition-transform">
            <div className="absolute -top-3 left-6">
              <Tape width="75px" rotate="-6deg" />
            </div>
            <h3 className="font-marker text-lg sm:text-xl text-marker-redDark mb-2 flex items-center gap-2">
              <span>🎓</span>
              <span>EDUCATION</span>
            </h3>
            <div className="font-sketch text-base text-ink space-y-1">
              <p className="font-bold text-ink-dark">{myself.education.degree}</p>
              <p className="text-ink-muted">{myself.education.college}</p>
              <p className="text-xs text-stone-500 font-hand">{myself.education.year}</p>
            </div>
          </div>

          {/* Interests Card */}
          <div className="relative flex-1 bg-white p-5 rounded-hand-1 border border-stone-300 shadow-paper rotate-[1.5deg] hover:rotate-0 transition-transform">
            <div className="absolute -top-3 right-6">
              <Tape width="75px" rotate="8deg" />
            </div>
            <h3 className="font-marker text-lg sm:text-xl text-marker-blue mb-2 flex items-center gap-2">
              <span>💡</span>
              <span>INTERESTS</span>
            </h3>
            <ul className="font-sketch text-base text-ink space-y-1 list-none p-0">
              {myself.interests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-marker-blue text-xs">✦</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
