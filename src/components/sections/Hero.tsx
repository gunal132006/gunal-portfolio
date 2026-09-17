import React from 'react';
import { PolaroidCard } from '../ui/PolaroidCard';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { Cloud } from '../doodles/Cloud';
import { PaperPlane } from '../doodles/PaperPlane';
import { PaperClip } from '../doodles/PaperClip';
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
      className="relative w-full mb-24 sm:mb-32 animate-paper-enter select-none"
    >
      {/* Background Decorative Ambient Clouds for Desktop */}
      <div className="absolute top-0 right-[5%] hidden xl:block pointer-events-none opacity-70">
        <Cloud variant={2} className="w-56 animate-cloud-drift" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24 max-w-6xl mx-auto">
        
        {/* ================= LEFT SIDE: POLAROID PHOTOGRAPH ================= */}
        <div className="relative flex-shrink-0 flex items-center justify-center pt-6 sm:pt-0">
          {/* Cloud behind top-right of polaroid */}
          <Cloud
            variant={2}
            className="absolute -top-10 -right-12 w-44 sm:w-56 opacity-80 z-0 animate-cloud-drift hidden sm:block"
          />

          {/* Polaroid Frame Card */}
          <div className="relative z-10">
            <PolaroidCard
              imageSrc={activeAvatar}
              imageAlt={`${personalInfo.name} Polaroid Portrait`}
              caption="Me :)"
              rotate="-3deg"
              tapeRotate="-14deg"
              stampText="GUNAL S"
            />
          </div>

          {/* Cloud overlapping bottom-left of polaroid */}
          <Cloud
            variant={1}
            className="absolute -bottom-8 -left-10 w-48 sm:w-60 opacity-90 z-20 animate-cloud-drift-reverse hidden sm:block"
          />
        </div>

        {/* ================= RIGHT SIDE: INTRODUCTION & BIO ================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl w-full">
          
          {/* Main Greeting */}
          <h1 className="font-marker text-4xl sm:text-6xl text-ink tracking-tight mb-1">
            HI, I'M {personalInfo.name.toUpperCase()}.
          </h1>

          {/* Subtitle with Mascot Doodle */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="font-marker text-2xl sm:text-4xl text-marker-blue tracking-wide">
              {personalInfo.role}
            </span>
            <CharacterDoodle className="w-9 h-11 -rotate-6 transition-transform hover:rotate-12 duration-200" />
          </div>

          {/* Physical Paper Bio Sticky Note with Paperclip */}
          <div className="relative w-full bg-[#fffb7d] p-6 sm:p-7 rounded-hand-1 border border-stone-300 shadow-paper text-ink transition-all duration-300 hover:rotate-0 -rotate-1">
            {/* Paperclip clipping top-right edge */}
            <div className="absolute -top-8 right-6 pointer-events-none z-20">
              <PaperClip className="w-9 h-18 rotate-12 drop-shadow-sm" />
            </div>

            <p className="font-reenie text-2xl sm:text-3xl text-ink leading-relaxed font-medium">
              {personalInfo.heroBio.greeting}
              <br className="mb-2" />
              {personalInfo.heroBio.lead}{' '}
              {personalInfo.heroBio.highlights.map((h, i) => (
                <React.Fragment key={h}>
                  <span className="highlighter font-bold">{h}</span>
                  {i < personalInfo.heroBio.highlights.length - 1 ? (
                    i === personalInfo.heroBio.highlights.length - 2 ? (
                      ', and '
                    ) : (
                      ', '
                    )
                  ) : (
                    '.'
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Action Buttons: Resume & GitHub */}
          <div className="relative flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 mt-8 w-full">
            {/* Resume Button */}
            <HandDrawnButton
              asAnchor
              href="#resume-placeholder"
              size="md"
              className="w-36 text-center"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume link ready! You can attach your resume PDF when ready.');
              }}
            >
              Resume
            </HandDrawnButton>

            {/* GitHub Button */}
            <HandDrawnButton
              asAnchor
              href={contact.githubUrl}
              target="_blank"
              size="md"
              className="w-36 text-center"
            >
              GitHub
            </HandDrawnButton>

            {/* Paper Plane Doodle Gliding Past Buttons */}
            <div className="hidden sm:block absolute -right-16 lg:-right-24 -top-6 animate-plane-hover pointer-events-none">
              <PaperPlane className="w-24 sm:w-28" rotate="16deg" />
            </div>
          </div>

          {/* Sketch Social Links Row */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-7 text-ink">
            <span className="font-sketch text-sm sm:text-base text-ink-muted">
              Connect:
            </span>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-ink hover:text-marker-red transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-ink hover:text-marker-blue transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="p-1 text-ink hover:text-marker-redDark transition-colors"
              title="Email Contact"
              aria-label="Send an Email"
            >
              <MailIcon size={24} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
