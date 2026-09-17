import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const { personalInfo, contact } = portfolioData;

  return (
    <footer className="w-full pt-8 pb-12 text-center select-none relative z-20">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        
        {/* Subtle decorative divider line */}
        <div className="w-24 h-0.5 bg-stone-300 mx-auto rounded-full mb-6" />

        {/* Main Signature Text */}
        <h2 className="font-marker text-2xl sm:text-3xl text-ink tracking-wide">
          Made by {personalInfo.name}{' '}
          <span className="text-marker-red inline-block -rotate-3 text-xl sm:text-2xl">
            (isn't it obvious)
          </span>
        </h2>

        {/* Subtitle / Philosophy */}
        <p className="font-hand text-lg sm:text-xl text-ink-muted">
          Built with curiosity &amp; code.
        </p>

        {/* Quick Social & Top Links */}
        <div className="flex items-center justify-center gap-6 pt-2 font-sketch text-base text-ink">
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-marker-red wavy-underline transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-marker-blue wavy-underline transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="#top"
            className="hover:text-marker-redDark wavy-underline transition-colors"
          >
            Back to Top ↑
          </a>
        </div>

        {/* Notebook page bottom margin mark */}
        <div className="pt-4 text-xs font-sketch text-stone-400 tracking-widest uppercase">
          — Gunal S • Personal Portfolio Notebook —
        </div>
      </div>
    </footer>
  );
};
