import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toys }) => {
    const {
        _id, price, img, toyName, availableQuantity, customerName, category, rating
    } = toys || {};
    return (
        <tr>
            <th>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img className='w-1/2' src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>${price}</td>
            
            <td>{availableQuantity}</td>
            <td>{customerName}</td>
            <td>{category}</td>
            <td>
            <Link to={`/toys/${_id}`}>
            <button   className='btn btn-ghost '>View Details</button>
            </Link>
            </td>

            {/* <th>
                {
                    status === 'update' ? <span className="font-bold text-primary">Updated Successfully</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Update</button>}
            </th> */}
        </tr>


        


    );
};

export default Toy;