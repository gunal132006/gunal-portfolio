import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Myself } from './components/sections/Myself';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { WaveDivider } from './components/ui/WaveDivider';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto relative">
      {/* 1. Notebook Sticky/Floating Header */}
      <Navbar />

      {/* 2. Main Storytelling Sections */}
      <main className="space-y-6 sm:space-y-12">
        {/* Open Notebook & Introduction */}
        <Hero />

        {/* About Myself & Personal Background */}
        <Myself />

        {/* My Tech Stack & Tools */}
        <TechStack />

        {/* Things I Have Built (Projects) */}
        <Projects />

        {/* Invite Contact & Stationery Form */}
        <Contact />
      </main>

      {/* 3. Illustrated Scene Transition: Layered Waves & Origami Sailboat */}
      <WaveDivider />

      {/* 4. Notebook Close / Footer */}
      <Footer />
    </div>
  );
};

export default App;
