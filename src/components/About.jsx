import React, { useState } from 'react';
import Typewriter from './Typewriter';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiNextdotjs,
  SiMysql,
  SiElasticsearch,
  SiJira,
  SiGit,
  SiGithubcopilot,
  SiAmazon,
  SiWebpack,
  SiTailwindcss,
  SiBootstrap
} from 'react-icons/si';
import { FaDatabase, FaMousePointer } from 'react-icons/fa';


export default function About() {
  const roles = [
    'Frontend Developer',
    'UI Developer',
    'ReactJS Developer',
    'Angular Developer',
  ];

  const skills = [
    { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#1572B6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'SQL', icon: FaDatabase, color: '#4DB33D' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' },
    { name: 'JIRA', icon: SiJira, color: '#0052CC' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Cursor', icon: FaMousePointer, color: '#FFFFFF' },
    { name: 'GitHub', icon: SiGithubcopilot, color: '#FFFFFF' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Webpack', icon: SiWebpack, color: '#1572B6' },
    { name: 'Tailwindcss', icon: SiTailwindcss, color: '#1572B6' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#9455f4' },

  ];

  return (
    <section id="about" className="container mx-auto px-6 py-6">
      <Typewriter
        words={roles}
        typingSpeed={90}
        pauseTime={1000}
        className="bg-secondary bg-opacity-20 rounded-xl mb-8"
      />

      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Photo */}
        <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="/full.jpeg"
            alt="Choladevi Gheereddy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio + Skills */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg leading-relaxed">
            A Passionate Front End Developer with over 5 years of experience building responsive,
            user-centric web applications using modern JavaScript frameworks - Angular,
            ReactJS, Next.js and TypeScript. Skilled in designing and integrating RESTful
            APIs, implementing robust CI/CD pipelines, and architecting cloud-native solutions
            on AWS and Google Cloud Platform (GCP). Experienced in leveraging AI-powered coding
            assistants (GitHub Copilot, Cursor) to enhance code quality and productivity. Holds an M.S. in
            Computer Science from Illinois Tech Chicago, with a passion for crafting intuitive, high-impact
            interfaces and driving innovation.
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6">
              {skills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex flex-col items-center p-4 bg-secondary bg-opacity-20 rounded-lg"
                >
                  <Icon size={48} color={color} />
                  <span className="mt-2 text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}