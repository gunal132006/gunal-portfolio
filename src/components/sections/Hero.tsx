import React from 'react';
import { PolaroidCard } from '../ui/PolaroidCard';
import { CharacterDoodle } from '../doodles/CharacterDoodle';
import { GithubIcon, LinkedinIcon, MailIcon } from '../doodles/SocialIcons';
import { portfolioData } from '../../data/portfolioData';
import placeholderAvatar from '../../assets/profile-placeholder.svg';

// Dynamically check if real profile image exists in assets (e.g. profile.jpg / png / webp)
const profileImages = import.meta.glob<{ default: string }>(
  '../../assets/profile.{jpg,jpeg,png,webp}',
  { eager: true }
);
const realProfile = Object.values(profileImages)[0]?.default;
const activeAvatar = realProfile || placeholderAvatar;

export const Hero: React.FC = () => {
  const { personalInfo, contact } = portfolioData;

  return (
    <section
      id="top"
      className="relative w-full mb-20 sm:mb-28 select-none"
    >
      {/* Top-Left Ambient Paper Plane */}
      <img
        src="/Plane.webp"
        alt="Paper plane"
        className="absolute -top-10 -left-2 sm:-left-6 w-20 sm:w-28 z-20 pointer-events-none animate-plane-hover"
      />

      {/* Top-Right Ambient Colored-Pencil Cloud */}
      <img
        src="/cloud1.webp"
        alt="Cloud doodle"
        className="absolute -top-16 right-0 sm:right-[1%] md:-right-2 w-56 sm:w-72 md:w-80 pointer-events-none z-0 animate-cloud-drift opacity-85"
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-28 max-w-6xl mx-auto relative z-10">
        
        {/* ================= LEFT SIDE: POLAROID PHOTOGRAPH ================= */}
        <div className="relative flex-shrink-0 flex items-center justify-center pt-4 sm:pt-0">
          {/* Polaroid Frame Card */}
          <PolaroidCard
            imageSrc={activeAvatar}
            imageAlt={`${personalInfo.name} Polaroid Portrait`}
            caption="Me :)"
            rotate="-2deg"
            showStamp={true}
          />

          {/* Large Colored-Pencil Cloud overlapping bottom-left of Polaroid */}
          <img
            src="/cloud1.webp"
            alt="Cloud sketch"
            className="absolute top-[270px] sm:top-[300px] -left-8 sm:-left-16 w-72 sm:w-[380px] pointer-events-none z-30 animate-cloud-drift-reverse"
          />
        </div>

        {/* ================= RIGHT SIDE: INTRODUCTION & BIO ================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg w-full relative">
          
          {/* Main Greeting */}
          <h1 className="font-marker text-4xl sm:text-5xl text-[#2f2f2f] tracking-wide leading-tight">
            HI, I'M {personalInfo.name.toUpperCase()}.
          </h1>

          {/* Subtitle with Developer Mascot Doodle */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mt-1.5 mb-2">
            <span className="font-marker text-2xl sm:text-3xl text-[#264de4] tracking-wide">
              {personalInfo.role}
            </span>
            <CharacterDoodle className="w-8 h-10 -rotate-6 hover:rotate-12 transition-transform duration-200" />
          </div>

          {/* Physical Yellow Bio Sticky Note with Realistic Paper Clip */}
          <div
            className="relative w-full bg-[#fffb7d] p-5 sm:p-6 mt-6 transition-transform duration-200 hover:rotate-0"
            style={{
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
              transform: 'rotate(-0.5deg)',
            }}
          >
            {/* Realistic Metallic Paper Clip on top-right */}
            <img
              src="/Paper-Clip.webp"
              alt="Paper clip"
              className="absolute -top-12 sm:-top-14 right-2 sm:right-5 w-20 sm:w-28 pointer-events-none z-30"
            />

            <p className="font-reenie text-2xl sm:text-[28px] text-[#2f2f2f] leading-snug">
              {personalInfo.heroBioLines.map((line, idx, arr) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Action Buttons: Resume & GitHub with Pop-Up Surprise */}
          <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-7 w-full">
            {/* Resume Button */}
            <div className="relative group">
              <a
                href="#contact"
                className="hand-button block relative z-10"
              >
                Resume
              </a>
              <img
                src="/Resume.webp"
                alt="resume"
                className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-0"
              />
            </div>

            {/* GitHub Button */}
            <div className="relative group">
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hand-button block relative z-10"
              >
                Github
              </a>
              <img
                src="/Github.webp"
                alt="github"
                className="absolute -top-7 left-1/2 -translate-x-1/2 w-7 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-0"
              />
            </div>
          </div>

          {/* Hand-Drawn Social Doodles Row */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
            <a
              href={contact.phoneUrl}
              className="inline-flex items-center justify-center text-[#2f2f2f] hover:text-[#e44242] transition-transform hover:scale-125 hover:-translate-y-1"
              title="Call / Phone"
              aria-label="Call Gunal"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#2f2f2f] hover:text-[#264de4] transition-transform hover:scale-125 hover:-translate-y-1"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#2f2f2f] hover:text-[#000] transition-transform hover:scale-125 hover:-translate-y-1"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center text-[#2f2f2f] hover:text-[#e44242] transition-transform hover:scale-125 hover:-translate-y-1"
              title="Email"
              aria-label="Email"
            >
              <MailIcon size={24} />
            </a>
          </div>

          {/* Bottom-Right Large Paper Plane with Wind Trail */}
          <img
            src="/Plane2.webp"
            alt="Paper plane swooping"
            className="absolute -bottom-16 -right-12 sm:-right-20 w-44 sm:w-60 pointer-events-none z-20 hidden md:block"
          />

        </div>

      </div>
    </section>
  );
};
