import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    fetch('https://wonder-toy-server.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useTitle('All Toys')

  return (
    <div className="container mx-auto p-4 mt-12">
      <h1 className="text-center text-teal-600 text-6xl font-bold mb-10">All Toys</h1>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className='text-teal-600'>
            <tr>
              <th className="px-4 py-2">Seller</th>
              <th className="px-4 py-2">Toy Name</th>
              <th className="px-4 py-2">Sub-category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Available Quantity</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.slice(0, 20).map((toy) => (
              <tr key={toy._id}>
                <td className="px-4 py-4">{toy.sellerName}</td>
                <td className="px-4 py-4">{toy.toyName}</td>
                <td className="px-4 py-4">{toy.subcategory}</td>
                <td className="px-4 py-4">${toy.price}</td>
                <td className="px-4 py-4">{toy.availableQuantity}</td>
                <td className="px-4 py-4">
                  <Link
                    to={`/toys/${toy._id}`}
                    className="btn btn-outline btn-secondary mt-4 px-4 py-2"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
