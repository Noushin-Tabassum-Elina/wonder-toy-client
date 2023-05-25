import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { useTitle } from '../../hooks/useTitle';

const AddToy = () => {

    const {user} = useContext(AuthContext);
    console.log(user)

    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const picture = form.picture.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;

        const newToy = { picture, toyName, sellerName, sellerEmail, subcategory, price, rating, availableQuantity, detailDescription };

        console.log(newToy);

        fetch('https://wonder-toy-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
                
            })
    }
    useTitle('Add Toy')



    return (
        <div className="container mx-auto mt-16">
            <h1 className="text-center text-teal-600 text-6xl font-bold mb-10">Add A Toy</h1>
            <form className="w-full" onSubmit={handleAddToy}>
                <div className="mb-4">
                    <label htmlFor="picture" className="text-teal-600 block font-bold mb-1">
                        Picture URL of the toy:
                    </label>
                    <input
                        type="text"
                        name="picture"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="toyName" className="text-teal-600 block font-bold mb-1">
                        toyName:
                    </label>
                    <input
                        type="text"
                        name="toyName"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="text-teal-600 block font-bold mb-1">
                        Seller toyName:
                    </label>
                    <input
                        type="text"
                        name="sellerName"
                        defaultValue={user.displayName}
                        className="input input-bordered w-full"

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="text-teal-600 block font-bold mb-1">
                        Seller Email:
                    </label>
                    <input
                        type="email"
                        name="sellerEmail"
                        defaultValue={user.email}
                        className="input input-bordered w-full"

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subcategory" className="text-teal-600 block font-bold mb-1">
                        Sub-category:
                    </label>
                    <input
                        type="text"
                        name="subcategory"
                        className="input input-bordered w-full"

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="text-teal-600 block font-bold mb-1">
                        Price:
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="text-teal-600 block font-bold mb-1">
                        Rating:
                    </label>
                    <input
                        type="text"
                        name="rating"
                        className="input input-bordered w-full"

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="availableQuantity" className="text-teal-600 block font-bold mb-1">
                        Available Quantity:
                    </label>
                    <input
                        type="text"
                        name="availableQuantity"
                        className="input input-bordered w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="detailDescription" className="text-teal-600 block font-bold mb-1">
                        Detail Description:
                    </label>
                    <textarea
                        name="detailDescription"
                        className="textarea textarea-bordered w-full" />
                </div>
                {/* <button type="submit" className="btn btn-primary w-full">Submit</button> */}
                <input type="submit" value="Add Toy"className="btn btn-accent w-full mb-5" />
            </form>
        </div>

    );
};

export default AddToy;
