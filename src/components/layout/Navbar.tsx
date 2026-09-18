import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');

  const navItems = [
    { label: 'Me', href: '#me' },
    { label: 'Skillz', href: '#skillz' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hello!', href: '#contact' },
  ];

  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center mb-16 md:mb-20 gap-4 select-none">
      {/* Brand Title: GUNAL'S (black) NOTEBOOK (red) */}
      <a
        href="#top"
        className="inline-block transition-transform duration-200 hover:scale-105"
        title="Gunal's Notebook - Back to Top"
      >
        <span className="font-marker text-2xl sm:text-[35px] inline-block -rotate-3 tracking-[2px]">
          <span className="text-[#2f2f2f]">GUNAL'S </span>
          <span className="text-[#e44242]">NOTEBOOK</span>
        </span>
      </a>

      {/* Navigation Links */}
      <ul className="flex items-center justify-center gap-6 sm:gap-10 font-architect text-2xl sm:text-[30px] text-[#2f2f2f] list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={`transition-all duration-150 inline-block hover:scale-110 hover:text-[#e44242] cursor-pointer hover:wavy-underline ${
                activeLink === item.href ? 'text-[#e44242] wavy-underline' : ''
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
