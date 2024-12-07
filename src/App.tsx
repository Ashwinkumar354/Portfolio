import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-screen">
      <Background />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-white/80 backdrop-blur-sm py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Ashwin Kumar. All rights reserved.</p>
      </footer>
      <Toaster position="bottom-right" />
    </div>
  );
}