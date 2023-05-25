import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useTitle } from '../../hooks/useTitle';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const [sort, setSort] = useState('asc');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://wonder-toy-server.vercel.app/myToys?email=${user?.email}&sort=${sort}`)
            .then((res) => res.json())
            .then((data) => setToys(data))
            .catch((error) => console.log(error.message));
    }, [user, sort]);

    const handleDeleteToy = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://wonder-toy-server.vercel.app/toys/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                setToys(toys.filter((toy) => toy._id !== id));
              } else {
                Swal.fire('Error', 'Failed to delete toy', 'error');
              }
            })
            .catch((error) => {
              console.log(error.message);
              Swal.fire('Error', 'Failed to delete toy', 'error');
            });
        }
      });
    };
    
    


    const handleUpdateToy = (id) => {
        // Fetch the toy data from the server based on the ID
        fetch(`https://wonder-toy-server.vercel.app/toys/${id}`)
          .then((res) => res.json())
          .then((toy) => {
           
            console.log('Toy data:', toy);
            Swal.fire({
              title: 'Update Toy',
              html: `
                <div>
                  <label for="toyName">Toy Name:</label>
                  <input type="text" id="toyName" value="${toy.toyName}">
                </div>
                <div>
                  <label for="subcategory">Sub Category:</label>
                  <input type="text" id="subcategory" value="${toy.subcategory}">
                </div>
                <div>
                  <label for="price">Price:</label>
                  <input type="number" id="price" value="${toy.price}">
                </div>
                <div>
                  <label for="availableQuantity">Available Quantity:</label>
                  <input type="number" id="availableQuantity" value="${toy.availableQuantity}">
                </div>
                <div>
                  <label for="rating">Rating:</label>
                  <input type="number" id="rating" value="${toy.rating}">
                </div>
                <div>
                  <label for="detailDescription">Description:</label>
                  <textarea id="detailDescription">${toy.detailDescription}</textarea>
                </div>
              `,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Update',
              preConfirm: () => {
                const updatedToy = {
                  toyName: document.getElementById('toyName').value,
                  subcategory: document.getElementById('subcategory').value,
                  price: parseInt(document.getElementById('price').value),
                  availableQuantity: parseInt(document.getElementById('availableQuantity').value),
                  rating: parseFloat(document.getElementById('rating').value),
                  detailDescription: document.getElementById('detailDescription').value,
                };
      
                // Send the updated toy data to the server
                fetch(`https://wonder-toy-server.vercel.app/toys/${id}`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(updatedToy),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log('Updated toy:', data);
                    Swal.fire('Success', 'Toy updated successfully', 'success');
                    
                    setToys((prevToys) =>
                      prevToys.map((toy) => (toy._id === id ? { ...toy, ...updatedToy } : toy))
                    );
                  })
                  .catch((error) => {
                    console.log(error.message);
                    Swal.fire('Error', 'Failed to update toy', 'error');
                  });
              },
            });
          })
          .catch((error) => console.log(error.message));
      };
      

      useTitle('My Toys')
      


    return (
        <div className="my-10 mt-16">

            <h2 className="text-center text-teal-600 text-6xl font-bold mb-10">ToyCars Collections from: </h2>
            <div className="p-2 space-x-2 space-y-2 text-right">
                <button onClick={() => setSort('asc')} className="btn"><i class="fa-solid fa-sort-up"></i></button>
                <button onClick={() => setSort('dec')} className="btn"><i class="fa-solid fa-sort-down"></i></button>
                
            </div>
            <div className="p-2">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Delete</th>
                                <th>Toy Name</th>
                                <th>Toy image</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Qnt</th>
                                <th>Rating</th>
                                <th>Update</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toys.map((toy, index) => (
                                <tr key={toy._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <button
                                            className="btn btn-circle btn-sm btn-outline"
                                            onClick={() => handleDeleteToy(toy._id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td>{toy.toyName}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded">
                                                <img src={toy.picture} alt="Toy Image" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{toy.subcategory}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.availableQuantity}</td>
                                    <td>{toy.rating}</td>
                                    <th>
                                        <button onClick={() => handleUpdateToy(toy._id)} className="btn btn glass text-green-700 btn-sm">
                                            Update
                                        </button>
                                    </th>
                                    <td>{toy.detailDescription.length ? `${toy.detailDescription.slice(0, 20)}...` : toy.detailDescription}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;
