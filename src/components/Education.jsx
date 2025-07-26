// src/components/Education.jsx
export default function Education() {
  const schools = [
    {
      institution: 'Illinois Institute of Technology, Chicago',
      period: 'Aug 2023 – May 2025',
      degree: 'M.S. in Computer Science, GPA 3.66',
      logo: './iit.png',
      coursework: 'Course Work : Machine Learning, NLP, Big Data Technologies, Advanced Database Organization, Software Project Management'
    },
    {
      institution: 'Jawaharlal Nehru Technological University',
      period: 'Aug 2012 – Apr 2016',
      degree: 'B.S. in Computer Science, GPA 4.0',
      logo: './jntu.png',
      coursework: 'Course Work : Data Structures and Algorithms, Object Oriented Programming, Web Application Development, Database Management'
    },
  ];

  return (
    <section id="education" className="container mx-auto px-6 py-12 animate-fadeIn">
      <h2 className="text-4xl font-bold mb-6">Education</h2>
      <ul className="space-y-4">
        {schools.map(({ institution, period, degree, logo, coursework }) => (
          <li
            key={institution}
            className="flex items-center gap-4 p-4 bg-secondary bg-opacity-180 rounded-2xl shadow-lg hover:bg-opacity-400 transition  hover:border-accent border-2 border-transparent transition"
          >
            {/* School Logo */}
            <img
              src={logo}
              alt={`${institution} logo`}
              className="w-14 h-14 object-contain flex-shrink-0"
            />
            {/* School Details */}
            <div>
              <h3 className="text-2xl font-semibold">{institution}</h3>
              <p className="italic text-sm">{period}</p>
              <p className="mt-1 text-base">{degree}</p>
              <p className="mt-1 text-base">{coursework}</p>

            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
