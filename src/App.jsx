import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased">
      {/* Background with strong radial gradient for glowing effect */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#121212]">
        {/* Glow effect using multiple radial gradients */}
        <div className="absolute inset-0">
          {/* Purple glow */}
          <div className="absolute -top-10 right-10 h-[400px] w-[400px] bg-purple-500 rounded-full opacity-30 blur-3xl"></div>
          {/* Orange glow */}
          <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] bg-orange-500 rounded-full opacity-30 blur-3xl"></div>
          {/* Blue glow */}
          <div className="absolute bottom-10 right-1/2 h-[400px] w-[400px] bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8">
        <Navbar />
        <Hero />
      
        <Projects />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
};

export default App;
