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
    <nav className="w-full flex flex-col md:flex-row justify-between items-center pt-6 pb-4 mb-12 sm:mb-16 gap-4 select-none">
      {/* Brand Title: GUNAL'S NOTEBOOK */}
      <a
        href="#top"
        className="group inline-block"
        title="Gunal's Notebook - Back to Top"
      >
        <span className="font-marker text-3xl sm:text-4xl text-marker-red tracking-wider inline-block -rotate-3 transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-2">
          GUNAL'S NOTEBOOK
        </span>
      </a>

      {/* Navigation Links */}
      <ul className="flex items-center justify-center gap-6 sm:gap-10 font-sketch text-2xl sm:text-3xl text-ink list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={`transition-all duration-150 inline-block hover:scale-110 hover:text-marker-redDark wavy-underline ${
                activeLink === item.href ? 'text-marker-red font-bold' : ''
              }`}
              style={{
                textDecorationColor: '#e44242',
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
