import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyInfo = () => {
    const toy = useLoaderData();
    const { customerName, email, img, toyName, price, availableQuantity, description, rating, category } = toy;
    return (
        <div className='mb-8'>
            <div className='flex gap-9'>
            <img className='mb-8 w-1/2' src={img} alt="" />
            <div >
                <h1 className='text-3xl'>Toy Name : {toyName}</h1>
                <div>
                <p className='mt-5'>Seller Name: {customerName}</p>
                <p className='mt-5'>Seller Email: {email}</p>
                <p className='mt-5'>Price: {price}</p>
                <p className='mt-5'>Rating: {rating}</p>
                <p className='mt-5'>Available Quantity: {availableQuantity}</p>
                <p className='mt-5'>Description: {description}</p> 
                </div>
            </div>
            </div>
 
        </div>
    );
};

export default ToyInfo;
