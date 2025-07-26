// src/components/Experience.jsx
export default function Experience() {
  const roles = [
    {
      company: 'Grey Parrot Systems (Client: BelleTire)',
      logo: './gp.jpeg',
      title: 'Frontend Developer – Intern',
      period: 'May 2024 – Nov 2024',
      details: [
        'Enhanced front-end web applications using ReactJS, Redux, and Next.js, resolving over 15+ critical and high- priority bugs and defects, achieving 100% on-time delivery to production.',
        'Upgraded legacy front-end application built with older versions of ReactJS, NodeJS, NextJS, GraphQL, and Express.js.',
        'Resolved 15+ compatible issues during package and library upgrades and enhancing performance and load time -30%.',
        'Spearheaded 5 production deployments within an Agile workflow, maintaining zero downtime during releases.'
      ],
    },
    {
      company: 'Accenture',
      logo: './accenture.webp',
      title: 'Senior Application Developer',
      period: 'Feb 2020 – Jul 2023',
      details: [
        'Led enhancements of micro-frontend architecture using ReactJS, Redux, and Next.js, resolving 15+ critical issues, achieving WCAG compliance, and ensuring 100% on-time deployments through optimized CI/CD pipelines.',
        'Refactored legacy systems to modern Next.js and React architecture, applying microservices and API best practices to resolve compatibility issues and enhance scalability, reducing page load times by 30%.',
        'Resolved 15+ compatible issues during package and library upgrades and enhancing performance and load time -30%.',
        'Improved coding efficiency by integrating AI-powered assistants (GitHub Copilot, Cursor), speeding up development and enhancing code quality by 30%.',
        'Executed 5+ seamless deployments with zero downtime and automated UI testing frameworks within Agile sprints, improving release efficiency by 40%.',
        'Implemented CI/CD pipelines using GCP Cloud Build, ensuring rapid and automated deployments, resulting in a 50% reduction in release time.'
      ],
    },
    {
      company: 'Infosys',
      logo: './infosys.png',
      title: 'Associate Consultant',
      period: 'Nov 2019 – Feb 2020',
      details: [
        'Worked on a lending front end application for Mainstream Capital Bank improving credit score calculations with 81% accuracy using ReactJS, React hooks, Redux.',
        'Integrated ARIA roles and ensured WCAG compliance across UI components for accessibility and usability.',
        'Enhanced user forms and integrated CRUD operations using formik, MaterialUI, reducing manual processing time by 60%.',
        'Utilized ReactJS features like hooks, React Router, and React memo to improve performance, streamline navigation for SPAs, and reduce unnecessary re-renders.',
      ],
    },
    {
      company: 'IBM',
      logo: './ibm.png',
      title: 'Associate Systems Engineer',
      period: 'Jul 2017 – Oct 2019',
      details: [
        'Designed and developed a smart invoice automation platform using Angular using reactive forms, RxJS, and Angular Material, NodeJS, and Blockchain, leading to a 35% reduction in invoice processing time for UBP Bank.',
        'Implemented Angular features like modular architecture, route guards, lazy loading, and custom pipes to build a scalable UI.',
        'Demonstrated a blockchain proof-of-concept (POC) for ICICI Bank integrating UI reducing supply chain discrepancies by 25%.',
        'Engineered seamless front-end and back-end integration using RESTful APIs and Angular interceptors, boosting efficiency by 30%.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-secondary bg-opacity-20 py-16 animate-fadeIn">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-8">
          {roles.map((role) => (
            <div key={role.company} className="p-6 bg-bgSection rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={role.logo}
                  alt={`${role.company} logo`}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{role.company}</h3>
                  <p>
                    {role.title} | {role.period}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {role.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


