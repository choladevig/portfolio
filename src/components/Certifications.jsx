// src/components/Certifications.jsx
import { FaAws } from 'react-icons/fa';

export default function Certifications() {
  const certs = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: 'April 2024',
      link: 'https://www.credly.com/badges/1e7c1079-ef17-49e1-ae00-09caab762770?source=linked_in_profile'
    },
  ];

  return (
    <section id="certifications" className="container mx-auto px-6 py-12 animate-fadeIn">
      <h2 className="text-4xl font-bold mb-6">Certifications</h2>
      <ul className="space-y-4">
        {certs.map(({ name, issuer, date, link }) => (
          <li
            key={name}
            className="flex items-center gap-4 p-4 bg-secondary bg-opacity-20 rounded-2xl shadow hover:border-accent border-2 border-transparent transition"
          >
            <FaAws size={32} className="text-accent flex-shrink-0" />
            <div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:text-accent transition"
              >
                {name}
              </a>
              <p className="text-sm text-text/70">
                {issuer} &middot; {date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
