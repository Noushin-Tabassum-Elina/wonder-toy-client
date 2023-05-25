import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [categoryToy, setCategoryToy] = useState([]);
  const subcategories = ['Fashion Dolls', 'Fantasy Dolls', 'Career Dolls'];

  useEffect(() => {
    fetch('https://wonder-toy-server.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setCategoryToy(data))
      .catch((error) => console.log(error));
  }, []);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const getToysBySubcategory = (subcategory) => {
    return categoryToy.filter((toy) => toy.subcategory === subcategory);
  };

  const renderToyCards = (subcategory) => {
    const toys = getToysBySubcategory(subcategory);
    return toys.slice(0, 3).map((toy) => (
      <div key={toy._id} className="p-4 bg-white rounded shadow">
        <img
          src={toy.picture}
          alt={toy.toyName}
          className="w-32 h-32 mx-auto mb-4 rounded"
        />
        <h3 className="text-xl font-bold">{toy.toyName}</h3>
        <p className="text-gray-600">${toy.price}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">&#9733;</span>
          <p className="ml-1">{toy.rating}</p>
        </div>
        <Link to={`/toys/${toy._id}`} className="btn btn-outline btn-secondary mt-4 px-4 py-2">
       
          View Details
        </Link>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div>
      <h2 className="text-center m-5 text-5xl mb-4 font-extrabold text-teal-600">Visit Most Popular Categories</h2>
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange} className="p-4">
          <TabList className="flex space-x-4 justify-center">
            {subcategories.map((subcategory, index) => (
              <Tab
                key={subcategory}
                className={`px-4 py-2 bg-red-700 text-white rounded hover:bg-red-950 ${
                  activeTab === index ? 'bg-red-950' : ''
                }`}
              >
                {subcategory}
              </Tab>
            ))}
          </TabList>

          {subcategories.map((subcategory, index) => (
            <TabPanel key={subcategory}>
              <h2 className="text-center m-5 text-4xl mb-4 font-extrabold text-teal-600"> {subcategory} are here</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {renderToyCards(subcategory)}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
