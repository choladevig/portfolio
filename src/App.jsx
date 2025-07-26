import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Slide from './components/Slide';
import Certifications from './components/Certifications';

export default function App() {
  return (
    <>
      <Slide />
      <Header />
      <main className="space-y-10 pt-10">
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </>
  );
}