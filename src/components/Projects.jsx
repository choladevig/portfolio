// import React, { useRef, useState } from 'react';
// import { FaExternalLinkAlt } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'Smart Ride‑Sharing System',
//     period: 'Jan 2025 – Apr 2025',
//     image: './ride.png',
//     description:
//       'Built full-stack ride sharing application with React, Material UI and Python/Flask microservices and scikit-learn models for real-time fare & ETA predictions. Engineered a conversational LLM agent (OpenAI GPT 4.o) with prompt engineering to convert natural-language ride requests into geospatial coordinates.Built an analytics dashboard with Chart.js and D3.js and chatbot module, followed MVC and component-based architecture for scalability and maintainability.Architected an Elasticsearch data layer using vector-DB principles and RESTful APIs for semantic search and ride history.',
//     tech: [
//       'React',
//       'Material UI',
//       'Python',
//       'Flask',
//       'scikit‑learn',
//       'Chart.js',
//       'D3.js',
//       'Elasticsearch',
//     ],
//     link: 'https://github.com/yourusername/rideshare',
//   },

//   {
//     title: 'University Blogging Website',
//     period: 'Jan 2025 – May 2025',
//     image: './blog.jpg',
//     description:
//       'Designed and developed a feature-rich blogging platform supporting user authentication, role-based access, post creation/editing, and commenting. Implemented reusable standalone components with Angular 14 for consistent UI and maintainable architecture. Integrated Angular Universal for server-side rendering to improve SEO and first-page load performance. Developed dynamic forms for post and comment editing using reactive forms with advanced validation rules. Built JWT-based secure authentication with Node.js and Express, including refresh token strategies. Applied Angular interceptors for global error handling and API token injection, improving security. Designed and optimized Elasticsearch schemas using vector embeddings for efficient semantic search across posts, comments, and user roles Enabled rich text editing with Quill integrated into Angular reactive forms for modern writing UX. Deployed on AWS EC2 with Docker containers, using GitHub Actions to automate build and deployment workflows',
//     tech: ['React', 'Material UI', 'Tailwind CSS', 'ElasticSearch', 'ChatGpt- 4.o mini', 'OpenAI'],
//     link: 'https://github.com/yourusername/taxi-analysis',
//   },
//   {
//     title: 'ASD Detection ML Pipeline',
//     period: 'Jan 2024 – Apr 2024',
//     image: './asd-detection.png',
//     description:
//       'Achieved 96% ASD classification accuracy by training and tuning Logistic Regression, Decision Tree, and Random Forest with GridSearchCV and stratified 5-fold CV. Preprocessed data via median/mode imputation, Z-score/IQR outlier removal, and correlation-based feature pruning. Automated encoding and scaling in ColumnTransformer pipelines (one-hot/ordinal + StandardScaler/MinMax)',
//     tech: ['Python', 'scikit‑learn', 'GridSearchCV', 'Pandas', 'NumPy'],
//     link: 'https://github.com/yourusername/asd-detection',
//   },
//   {
//     title: 'Taxi Big Data Analysis',
//     period: 'Sept 2023 – Dec 2023',
//     image: './Nytaxi.jpg',
//     description:
//       'Data cleaning & Processing of one year of Yellow Taxi Parquet data (~24M records) on AWS EMR using PySpark Computed key KPIs average trip speed, fare distributions, payment-type trends via Spark SQL for reporting. Designed an interactive Tableau dashboard highlighting hourly/weekday demand patterns, borough-level pickup/drop-off heatmaps, and fare-vs-tip analyses segmented by rate codes. Automated monthly data pipeline, PySpark scripts triggered by AWS Lambda to ingest new Parquet files, refresh PostgreSQL tables, and update Tableau extracts.',
//     tech: ['PySpark', 'AWS EMR', 'Lambda', 'PostgreSQL', 'Tableau'],
//     link: 'https://github.com/yourusername/taxi-analysis',
//   },
// ];

// export default function Projects() {
//   const scrollRef = useRef(null);
//   const [selected, setSelected] = useState(null);

//   const scroll = (dir) => {
//     const container = scrollRef.current;
//     const slideWidth = container.clientWidth / 3;              // one-third
//     container.scrollBy({ left: dir === 'left' ? -slideWidth : slideWidth, behavior: 'smooth' });
//   };

//   return (
//     <section id="projects" className="container mx-auto px-6 py-12 space-y-6">
//       <h2 className="text-4xl font-bold">Projects</h2>

//       <div className="relative">
//         {/* Prev/Next */}
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 z-10"
//         >
//           ‹
//         </button>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 z-10"
//         >
//           ›
//         </button>

//         {/* Carousel showing 3 slides per view */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-8 scrollbar-hide"
//         >
//           {projects.map((p) => (
//             <div
//               key={p.title}
//               onClick={() => setSelected(p)}
//               className="snap-start flex-shrink-0 w-1/3 h-80 bg-bgSection rounded-2xl overflow-hidden cursor-pointer relative group"
//             >
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
//                 <h3 className="text-lg font-semibold text-white">{p.title}</h3>
//                 <p className="text-xs text-gray-300">{p.period}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Details */}
//       {selected && (
//         <div className="bg-secondary bg-opacity-10 p-6 rounded-2xl shadow-lg space-y-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-2xl font-semibold">{selected.title}</h3>
//             <a
//               href={selected.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-accent inline-flex items-center hover:underline"
//             >
//               <FaExternalLinkAlt className="mr-1" /> View Repo
//             </a>
//           </div>
//           <p className="italic">{selected.period}</p>
//           <p>{selected.description}</p>
//           <div className="flex flex-wrap gap-2">
//             {selected.tech.map((t) => (
//               <span
//                 key={t}
//                 className="px-3 py-1 bg-secondary bg-opacity-20 rounded-full text-sm"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


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
    link: 'https://github.com/yourusername/rideshare',
  },
  {
    title: 'University Blogging Website',
    period: 'Jan 2025 – May 2025',
    image: './blog.jpg',
    description:
      'Designed and developed a feature-rich blogging platform supporting user authentication, role-based access, post creation/editing, and commenting. Implemented reusable standalone components with Angular 14 for consistent UI and maintainable architecture. Integrated Angular Universal for server-side rendering to improve SEO and first-page load performance. Developed dynamic forms for post and comment editing using reactive forms with advanced validation rules. Built JWT-based secure authentication with Node.js and Express, including refresh token strategies. Applied Angular interceptors for global error handling and API token injection, improving security. Designed and optimized Elasticsearch schemas using vector embeddings for efficient semantic search across posts, comments, and user roles. Enabled rich text editing with Quill integrated into Angular reactive forms for modern writing UX. Deployed on AWS EC2 with Docker containers, using GitHub Actions to automate build and deployment workflows.',
    tech: [
      'Angular 14',
      'Universal SSR',
      'Reactive Forms',
      'JWT Auth',
      'Elasticsearch',
      'Github Copilot',
      'Cursor',
      'Docker',
      'Google Cloud Platform',
    ],
    link: 'https://github.com/yourusername/university-blog',
  },
  {
    title: 'ASD Detection using Machine Learning',
    period: 'Jan 2024 – Apr 2024',
    image: './asd-detection.jpg',
    description:
      'Achieved 96% ASD classification accuracy by training and tuning Logistic Regression, Decision Tree, and Random Forest with GridSearchCV and stratified 5-fold CV. Preprocessed data via median/mode imputation, Z-score/IQR outlier removal, and correlation-based feature pruning. Automated encoding and scaling in ColumnTransformer pipelines (one-hot/ordinal + StandardScaler/MinMax).',
    tech: ['Python', 'scikit‑learn', 'GridSearchCV', 'Pandas', 'NumPy'],
    link: 'https://github.com/yourusername/asd-detection',
  },
  {
    title: 'Taxi Big Data Analysis',
    period: 'Sept 2023 – Dec 2023',
    image: './Nytaxi.jpg',
    description:
      'Data cleaning & processing of one year of Yellow Taxi Parquet data (~24M records) on AWS EMR using PySpark. Computed key KPIs—average trip speed, fare distributions, payment-type trends—via Spark SQL for reporting. Designed an interactive Tableau dashboard highlighting hourly/weekday demand patterns, borough-level pickup/drop-off heatmaps, and fare‑vs‑tip analyses segmented by rate codes. Automated monthly data pipeline: PySpark scripts triggered by AWS Lambda to ingest new Parquet files, refresh PostgreSQL tables, and update Tableau extracts.',
    tech: ['PySpark', 'AWS EMR', 'Lambda', 'PostgreSQL', 'Tableau'],
    link: 'https://github.com/yourusername/taxi-analysis',
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
