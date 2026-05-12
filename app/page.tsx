'use client';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const ThreeBackground = dynamic(() => import('./components/ThreeBackground'), { ssr: false });
const Cursor = dynamic(() => import('./components/Cursor'), { ssr: false });

export default function Home() {
  return (
    <>
      <Cursor />
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
