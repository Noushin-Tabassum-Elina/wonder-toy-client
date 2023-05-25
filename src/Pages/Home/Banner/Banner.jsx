import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS library
AOS.init();

const Banner = () => {
  return (
    <div className="hero min-h-screen relative bg-cover bg-center" style={{ backgroundImage: `url("https://i.ibb.co/tHtr7Np/2cd51fe99b76774e7c39753b93a336d0.jpg")` }}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 data-aos="fade-right" className="text-6xl text-teal-400 font-extrabold text-center">Welcome to </h1>
          <h1 data-aos="fade-left" className="text-6xl text-pink-600 font-extrabold text-center">WonderToy</h1>
          <p data-aos="zoom-in-up" className="text-center text-white mt-4">WonderToy is more than just a toy website; <br /> it's a gateway to a universe of wonder and adventure. <br /> Each toy is accompanied by a detailed description, providing parents <br /> and caregivers with valuable information about the toy's features, age appropriateness, and benefits.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
