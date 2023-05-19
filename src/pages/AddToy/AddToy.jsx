import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
// import { useForm } from "react-hook-form";

const AddToy = () => {
    const service = useLoaderData();
    const { title, _id, } = service;
    const { user } = useContext(AuthContext);


    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const namee = form.namee.value;
        const seller = form.sellerName.value;
        const img = form.img.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const email = user?.email;
        const booking = {
            customerName: seller,
            email,
            img: img,
            subCategory: title,
            toyName: namee,
            toy_id: _id,
            price: price,
            availableQuantity : quantity,
            description : description,
            rating : rating
        }

        console.log(booking);

        fetch('http://localhost:9000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking) //from 34
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl'>Add a Toy </h2>
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture Url</span>
                            </label>
                            <input type="text" name="img" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name="namee" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="sellerName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input type="text" defaultValue={title} name="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name="description" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Add a Toy" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>

    );
};

export default AddToy;