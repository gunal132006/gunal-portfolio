import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="Footer-Container select-none pt-16 sm:pt-20 pb-14" role="contentinfo">
      <h2 className="text-xl sm:text-2xl font-architect leading-relaxed text-[#545454]">
        Made by {personalInfo.name} <br />
        (isn't it obvious)
      </h2>
    </footer>
  );
};
