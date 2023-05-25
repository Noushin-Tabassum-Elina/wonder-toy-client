import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS library
AOS.init();



const Contact = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS library
    AOS.refresh(); // Refresh AOS animations

    return () => {
      AOS.refreshHard(); // Clean up AOS animations on component unmount
    };
  }, []);

    return (
        <section className="bg-gray-100 py-12 m-10">
            <h2 className="text-center text-teal-600 text-6xl font-bold mb-10">Contact Us</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Website Information and Social Links */}
          <div data-aos="flip-right" data-aos-duration="5000" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4 text-teal-600">WonderToy</h2>
            <p className="text-gray-600 mb-6">
            WonderToy is more than just a toy website;
it's a gateway to a universe of wonder and adventure.
Each toy is accompanied by a detailed description, providing parents
and caregivers with valuable information about the toy's feature.
            </p>
            <div className="flex space-x-4">
              {/* Replace the social links with your own */}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div data-aos="flip-left" data-aos-duration="5000" className="bg-white rounded-lg shadow-md p-6 space-y-10">
            <h2 className="text-3xl font-bold mb-4 text-teal-600">Subscribe to WonderToy Blog</h2>
            <form className="flex flex-wrap">
              <div className="w-full md:w-2/3 pr-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/3">
                <button className="btn btn-accent text-white font-bold py-2 px-4 rounded w-full">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};



export default Contact;