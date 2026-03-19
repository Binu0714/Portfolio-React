import NavBar from './components/NavBar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Skills from './components/sections/Skills';
import NightSky from './components/NightSky'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

useEffect(() => {
  AOS.init({
        duration: 2000
  });
}, []);

  return (
    <div className="min-h-screen"> 
      <NightSky />
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      
    </div>
  )
}

export default App