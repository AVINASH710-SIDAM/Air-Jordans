import React from 'react';
import CanavasContainer from './CanavasContainer';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import ByNow from './ByNow';


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
