import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main className="space-y-10 pt-10">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}