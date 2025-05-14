import React from 'react';
import './styles.css';
import Hero from '../components/Hero/index';
import CurrentProjects from '../components/CurrentProjects/index'; // Replacing CDJSection with CurrentProjects
// import AboutSection from '../components/AboutSection/index'; // This is the "About Me" section
// import Projects from '../components/Projects'; // To be implemented
// import Contact from '../components/Contact'; // To be implemented

const App: React.FC = () => {
  return (
    <div className="App bg-brand-dark text-brand-light-gray min-h-screen overflow-x-hidden">
      <main>
        <Hero />
        <CurrentProjects /> 
        {/* <AboutSection /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
};

export default App;
