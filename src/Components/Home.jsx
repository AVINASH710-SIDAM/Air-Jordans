import React from 'react';
import CanavasContainer from './CanavasContainer';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import ByNow from './ByNow';
// import './Home.css'; // Optional: Add specific styles for the Home page if needed

const Home = () => {
  return (
    <>
      <div className="background-overlay">
        <CanavasContainer />
      </div>
      <Header />
      <Hero />
      <About />
      <ByNow />
    </>
  );
};

export default Home;
