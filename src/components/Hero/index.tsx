import React, { useState, useEffect } from 'react';
import './styles.css';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const roles: string[] = ["Music Producer & DJ", "Tech Founder", "Business Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [isHoveringName, setIsHoveringName] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center h-screen text-center text-white bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.2), rgba(18, 18, 18, 0.5)), url('/images/Headshot.jpg')",
      }}
    >
      <div className="z-10 max-w-4xl px-4">
        <h1 
          id="hero-title-static" 
          className="text-7xl font-thin tracking-wider md:text-8xl lg:text-9xl transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHoveringName(true)}
          onMouseLeave={() => setIsHoveringName(false)}
          style={{
            color: isHoveringName ? 'rgba(255, 255, 255, 0.8)' : 'white',
            textShadow: isHoveringName ? '0 0 15px rgba(255, 255, 255, 0.3)' : 'none',
          }}
        >
          Santonio Echols
        </h1>
        <div id="hero-dynamic-text" className="mt-6 text-3xl font-light md:text-4xl h-12">
          <span className="hero-role transition-opacity duration-500 ease-in-out">
            {roles[currentRoleIndex]}
          </span>
        </div>
        <p className="mt-8 text-xl md:text-2xl font-extralight text-brand-light-gray max-w-2xl mx-auto">
          Innovating at the intersection of creativity and technology.
        </p>
        <a 
          href="https://linktr.ee/justemanuell" // Updated to link to Linktree
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 mt-12 text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-full bg-brand-orange hover:bg-orange-700 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
        >
          Explore My Work
        </a>
      </div>
      {/* Seamless Waterfall Gradient Transition - increased height for smoother effect */}
      <div 
        className="absolute bottom-0 left-0 w-full h-96 z-0" // Increased height from h-64 to h-96
        style={{ background: "linear-gradient(to bottom, rgba(18, 18, 18, 0) 0%, #121212 100%)" }} // #121212 is brand-dark
      ></div>
    </section>
  );
};

export default Hero;
