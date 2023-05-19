import React from 'react';

const Toy = ({toys}) => {
    const {
        price, img, toyName, availableQuantity, customerName, category
      } = toys || {};
    return (
        <tr>
            <th>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
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
            <button className='btn btn-ghost btn-xs'>View Details</button>
            {/* <th>
                {
                    status === 'update' ? <span className="font-bold text-primary">Updated Successfully</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Update</button>}
            </th> */}
        </tr>
    );
};

export default Toy;