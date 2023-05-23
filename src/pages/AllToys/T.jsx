import React from 'react';
import { Link } from 'react-router-dom';
const T = ({ toys }) => {
    const {
        _id, price, img, toyName, availableQuantity, customerName, category, rating
    } = toys || {};
    return (
        <div className=''>
            <div className="card w-full bg-base-100 shadow-xl p-3 shadow-lg shadow-blue-500/50 bg-white ">
                <figure><img className='w-full' src={img}  /></figure>
                <div className="card-body mt-8 rounded ">
                    <h2 className="card-title text-base">{toyName}</h2>
                    <div className='flex items-center'>
                    {/* <span className='text-sky-600 font-black text-3xl'><BsCurrencyDollar></BsCurrencyDollar></span> */}
                    <h1 className='text-sky-600 font-black text-3xl'> ${price}</h1>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <div className="rating ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                    </div>
                    <h1 className=''>{rating}</h1>
                    </div >
                    <Link to={`/toys/${_id}`}>
                        <button className='btn btn-ghost  bg-sky-600 hover:bg-cyan-500   text-white'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default T;