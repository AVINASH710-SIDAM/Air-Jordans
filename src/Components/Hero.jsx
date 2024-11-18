// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="h-screen relative bg-black">
//       <div className="absolute top-[40%] left-20 z-20">
//         <h1 className="text-5xl text-white font-bold">Air Not-So-Jordans</h1>
//         <p className="w-[500px] pt-2 text-yellow-500 text-justify text-sm">
//           Flex your style without the price tag. Rock these kicks with pride!
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import '../style/Hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-title">Air Not-So-Jordans</p>
        <p className="hero-description">
          Flex your style without the price tag. Rock these kicks with pride!
        </p>
      </div>
    </section>
  );
};

export default Hero;
