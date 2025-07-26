// src/components/Header.jsx
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';

export default function Header() {
  const links = [
    { href: '#about', label: 'About', Icon: FaUser },
    { href: '#education', label: 'Education', Icon: FaGraduationCap },
    { href: '#experience', label: 'Experience', Icon: FaBriefcase },
    { href: '#projects', label: 'Projects', Icon: FaProjectDiagram },
    { href: '#contact', label: 'Contact', Icon: FaEnvelope },
  ];

  return (
    <header className="fixed w-full bg-secondary bg-opacity-90 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Name */}
        <div className="text-2xl font-bold text-text text-primary">Choladevi Gheereddy</div>
        {/* <div className="text-2xl italic font-bold text-text text-accent">
          Choladevi Gheereddy </div> */}


        <nav className="space-x-6 flex items-center">
          {links.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="relative inline-flex items-center px-3 py-1 group"
            >
              {/* Neon “popup” */}
              <span
                className="
                  absolute inset-0
                  bg-accent/30 rounded-lg
                  opacity-0 blur-sm transform scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all
                "
              />
              <span className="relative z-10 flex items-center gap-2">
                {/* Colored Icon */}
                <Icon className="text-accent" size={20} />
                {/* Link Text */}
                <span className="text-text group-hover:text-accent transition-colors">
                  {label}
                </span>
              </span>
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/choladevig"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:drop-shadow-[0_0_6px_#ccff99] transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/choladevi-gheereddy"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:drop-shadow-[0_0_6px_#ccff99] transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
