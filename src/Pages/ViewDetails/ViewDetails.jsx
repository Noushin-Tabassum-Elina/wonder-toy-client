import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const ViewDetails = () => {

  useTitle('Toy Details');

  const { _id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {

    fetch(`https://wonder-toy-server.vercel.app/toys/${_id}`)
      .then((res) => res.json())
      .then((data) => setToy(data))
      .catch((error) => console.log(error));
  }, [_id]);

  
  if (!toy) {
    return <progress className="progress w-56"></progress>;
  }

  const { picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription } = toy;



  return (
    <div className="flex justify-center items-center m-10">
      <div className="card w-96 h-fit bg-base-100 shadow-xl flex flex-col justify-center items-center">
        <figure className="px-10 pt-10">
          <img src={picture} alt={toyName} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-teal-600 font-bold">{toyName}</h2>

          <p>Seller: {sellerName}</p>
          <p>Email: {sellerEmail}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Available Quantity: {availableQuantity}</p>
          <p>{detailDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
