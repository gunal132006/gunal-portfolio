import React, { useState } from 'react';
import { TornPaper } from '../ui/TornPaper';
import { TiltCard } from '../ui/TiltCard';
import { portfolioData } from '../../data/portfolioData';

export const Myself: React.FC = () => {
  const { myself } = portfolioData;
  const [swatted, setSwatted] = useState(false);

  return (
    <section
      id="me"
      className="relative w-full mb-24 sm:mb-32 scroll-mt-20 select-none"
    >
      {/* 1. Section Header: MYSELF */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="font-marker text-4xl sm:text-[50px] text-[#000] tracking-wide inline-block">
          MYSELF
        </h1>
      </div>

      {/* Decorative Pencil Shavings on the Right */}
      <img
        src="/shavings.webp"
        alt="pencil shavings"
        className="absolute w-[220px] sm:w-[300px] right-[2%] sm:right-[5%] top-[15%] pointer-events-none z-10 rotate-180 drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hidden md:block"
      />

      {/* Main Composition Container */}
      <div className="max-w-4xl mx-auto px-4 relative flex justify-center items-center">
        
        {/* Interactive Mosquito Doodle on the Left */}
        <div className="absolute -left-2 sm:left-2 lg:left-6 top-1/2 -translate-y-1/2 z-30">
          {!swatted ? (
            <img
              src="/Mosquito1.webp"
              alt="mosquito"
              className="w-9 sm:w-12 cursor-pointer drop-shadow-md transition-transform hover:scale-110 active:scale-90"
              title="Click to swat!"
              onClick={() => setSwatted(true)}
            />
          ) : (
            <div className="relative">
              <img
                src="/Mosquito.webp"
                alt="swatted mosquito"
                className="w-9 sm:w-12 drop-shadow-sm"
              />
              <img
                src="/Blood.webp"
                alt="blood splat"
                className="w-9 sm:w-12 absolute inset-0 -z-10"
              />
            </div>
          )}
        </div>

        {/* ================= MAIN TORN PAPER ABOUT SHEET ================= */}
        <TiltCard
          maxTilt={6}
          scale={1.01}
          baseRotate="-0.5deg"
          className="w-full max-w-xl relative z-20"
        >
          <TornPaper tapeTop={true} className="w-full">
            <p>
              I'm a <span className="Highlighter">Computer Science student</span> who is passionate about building software, <span className="Highlighter">full-stack web applications</span>, and data-driven solutions.
            </p>
            
            <br />

            <p>
              Right now, I'm pursuing my <span className="Highlighter">{myself.education.degree}</span> at <span className="Highlighter">{myself.education.college}</span>. I'm currently in <span className="Highlighter">{myself.education.year}</span> and continuously improving my skills in Full-Stack Development, Problem Solving, and software architectures.
            </p>

            <br />

            <p>
              Areas of focus: <span className="Highlighter">Software Development</span>, <span className="Highlighter">Web Applications</span>, and <span className="Highlighter">Data Analysis</span>.
            </p>
          </TornPaper>
        </TiltCard>

      </div>
    </section>
  );
};
