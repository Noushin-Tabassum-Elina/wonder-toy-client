import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomerReview = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library

    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      const reviewsSection = document.getElementById('customer-reviews');

      if (isInViewport(reviewsSection)) {
        AOS.refresh(); // Refresh AOS animations when the section is in the viewport
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener on component unmount
    };
  }, []);

  return (
    <div>
      <div className="m-10">
        <h2 className="text-center text-teal-600 text-6xl font-bold mb-10">Customer Reviews</h2>
        <div id="customer-reviews" className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <div data-aos="zoom-in" data-aos-duration="5000" className="p-4 bg-teal-100 shadow rounded-lg">
            <div className="flex items-center mb-4">
              <img src="https://i.ibb.co/jWnknS4/person1.jpg" alt="Emily Johnson" className="w-12 h-12 rounded-full mr-4" />
              <h3 className="text-lg font-semibold">Emily Johnson</h3>
            </div>
            <p className="text-gray-700 mb-4">WonderToy has exceeded my expectations! The quality of the toys and the level of imagination they inspire is truly remarkable. My daughter can spend hours playing and creating magical stories. Highly recommended!</p>
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-gray-700 ml-1">5</span>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="5000" className="p-4 bg-teal-100 shadow rounded-lg">
            <div className="flex items-center mb-4">
              <img src="https://i.ibb.co/wQ2RW6h/person2.jpg" alt="James Thompson" className="w-12 h-12 rounded-full mr-4" />
              <h3 className="text-lg font-semibold">James Thompson</h3>
            </div>
            <p className="text-gray-700 mb-4">I'm impressed with the variety of toys available at WonderToy. They have something for every child's interest and age range. The customer service was also excellent. Will definitely be purchasing more toys from here!</p>
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-gray-700 ml-1">4.5</span>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="5000" className="p-4 bg-teal-100 shadow rounded-lg">
            <div className="flex items-center mb-4">
              <img src="https://i.ibb.co/mHM0ypQ/person3.jpg" alt="Sophia Roberts" className="w-12 h-12 rounded-full mr-4" />
              <h3 className="text-lg font-semibold">Sophia Roberts</h3>
            </div>
            <p className="text-gray-700 mb-4">WonderToy has become our go-to website for all our toy shopping needs. The toys are not only entertaining but also educational. My son's creativity and problem-solving skills have improved significantly. We couldn't be happier!</p>
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-gray-700 ml-1">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
