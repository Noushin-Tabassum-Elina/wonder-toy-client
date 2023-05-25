import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS library
AOS.init();

const Gallery = () => {
  const images = [
    'https://i.ibb.co/8gPzPKD/zhang-kaiyv-ECyp-Wirp-0c-unsplash.jpg',
    'https://i.ibb.co/NCVtTrd/tengyart-Wucn-Dg-Udgn8-unsplash.jpg',
    'https://i.ibb.co/6nV78pz/tengyart-FTum-Od-B4ls-I-unsplash.jpg',
    'https://i.ibb.co/jvZmDTS/tengyart-84-Wk03-OY-c-unsplash.jpg',
    'https://i.ibb.co/jvmFRq7/tengyart-n-Gi9ya-e-FM-unsplash.jpg',
    'https://i.ibb.co/Wz1X7Wb/melvina-mak-g3i-Py-Bk-N2vw-unsplash.jpg',
    'https://i.ibb.co/n36LkYP/tengyart-m-WDa-Xfgc7e0-unsplash.jpg',
    'https://i.ibb.co/Jn8mhBd/49957bf1aa25c8efbe401028975eb0f9.jpg',
  ];

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-6xl font-extrabold text-center text-teal-600 m-4">Picture Gallery</h2>
      <div className="flex flex-wrap justify-center" data-aos="fade-up">
        {images.map((image, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg max-w-xs mx-auto"
              style={{ maxWidth: '300px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
