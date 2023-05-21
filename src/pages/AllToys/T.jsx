import React from 'react';
import { Link } from 'react-router-dom';
const T = ({ toys }) => {
    const {
        _id, price, img, toyName, availableQuantity, customerName, category, rating
    } = toys || {};
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-8 shadow-lg shadow-blue-500/50">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body mt-8 rounded ">
                    <h2 className="card-title">{toyName}</h2>
                    <div className='flex items-center'>
                    {/* <span className='text-sky-600 font-black text-3xl'><BsCurrencyDollar></BsCurrencyDollar></span> */}
                    <h1 className='text-sky-600 font-black text-3xl'> ${price}</h1>
                    </div>
                    <div className='flex gap-4 '>
                    <div className="rating ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                    </div>
                    {rating}
                    </div >
                    <Link to={`/toys/${_id}`}>
                        <button className='btn btn-ghost  bg-sky-600 hover:bg-cyan-500 font-bold mt-5 '>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default T;