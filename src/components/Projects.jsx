
import React, { useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Smart Ride‑Sharing System',
    period: 'Jan 2025 – Apr 2025',
    image: './ride.png',
    description:
      'Built a fullstack ride sharing application with React, Material UI and Python/Flask microservices and scikit-learn models for real-time fare & ETA predictions. Engineered a conversational LLM agent (OpenAI GPT 4.0) with prompt engineering to convert natural-language ride requests into geospatial coordinates. Built an analytics dashboard with Chart.js and D3.js and chatbot module, followed MVC and component-based architecture for scalability and maintainability. Architected an Elasticsearch data layer using vector-DB principles and RESTful APIs for semantic search and ride history.',
    tech: [
      'React',
      'Redux',
      'Material UI',
      'Tailwind CSS',
      'OpenAI',
      'LLM Agents',
      'Python',
      'Flask',
      'scikit‑learn',
      'react-charts.js',
      'D3.js',
      'Elasticsearch',
    ],
    link: 'https://github.com/choladevig/MachineLearning-AI-Powered-RideSharingApp',
  },
  {
    title: 'University Blogging Website',
    period: 'Jan 2025 – May 2025',
    image: './blog.jpg',
    description:
    'It’s a browser‑based community hub where students, faculty, staff, and alumni come together to share experiences, ask questions, and join conversations across categories like campus life, career advice, travel, health, and more. You simply pick a topic, write a post or reply to someone else’s, and even tap an AI “smart helper” for quick suggestions if you get stuck. If anything feels off, you can flag it for review, and our moderators step in to keep the conversation friendly. Administrators make sure everyone who’s part of the community can participate—no downloads or installs required, just log in and dive right in!',
    tech: [
      'React',
      'Redux',
      'Material UI',
      'Tailwind CSS',
      'Elasticsearch',
      'Github Copilot',
      'Cursor',
      'Docker',
      'Google Cloud Platform',
    ],
    link: 'https://github.com/choladevig/React-AI-Powered-Blogging_Application',
  },
  {
    title: 'ASD (Autistic Spectrum Disorders) Detection using Machine Learning',
    period: 'Jan 2024 – Apr 2024',
    image: './asd-detection.jpg',
    description:
      'Achieved 96% ASD classification accuracy by training and tuning Logistic Regression, Decision Tree, and Random Forest with GridSearchCV and stratified 5-fold CV. Preprocessed data via median/mode imputation, Z-score/IQR outlier removal, and correlation-based feature pruning. Automated encoding and scaling in ColumnTransformer pipelines (one-hot/ordinal + StandardScaler/MinMax).',
    tech: ['Python', 'scikit‑learn', 'Logistic Regression', 'GridSearchCV', 'Pandas', 'NumPy'],
    link: 'https://github.com/yourusername/asd-detection',
  },
  {
    title: 'Taxi Big Data Analysis',
    period: 'Sept 2023 – Dec 2023',
    image: './Nytaxi.jpg',
    description:
      'Data cleaning & processing of one year of Yellow Taxi Parquet data (~24M records) on AWS EMR using PySpark. Computed key KPIs—average trip speed, fare distributions, payment-type trends—via Spark SQL for reporting. Designed an interactive Tableau dashboard highlighting hourly/weekday demand patterns, borough-level pickup/drop-off heatmaps, and fare‑vs‑tip analyses segmented by rate codes. Automated monthly data pipeline: PySpark scripts triggered by AWS Lambda to ingest new Parquet files, refresh PostgreSQL tables, and update Tableau extracts.',
    tech: ['Python', 'PySpark', 'AWS EMR', 'Lambda', 'PostgreSQL', 'Tableau'],
    link: 'https://github.com/choladevig/RideScope-Big-Data-Insights-on-Urban-Mobility',
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const slideWidth = container.clientWidth / 3;
    container.scrollBy({ left: dir === 'left' ? -slideWidth : slideWidth, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="container mx-auto px-6 py-12 space-y-6">
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 z-10"
        >
          ‹
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 z-10"
        >
          ›
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-8 no-scrollbar"
        >
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => setSelected(p)}
              className="snap-start flex-shrink-0 w-1/3 h-80 bg-bgSection rounded-2xl overflow-hidden cursor-pointer relative group"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-xs text-gray-300">{p.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="bg-secondary bg-opacity-10 p-6 rounded-2xl shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">{selected.title}</h3>
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent inline-flex items-center hover:underline"
            >
              <FaExternalLinkAlt className="mr-1" /> View Repo
            </a>
          </div>
          <p className="italic">{selected.period}</p>
          <p>{selected.description}</p>
          <div className="flex flex-wrap gap-2">
            {selected.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-secondary bg-opacity-20 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
