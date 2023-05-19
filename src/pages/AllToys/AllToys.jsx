import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const AllToys = () => {
    const [alltoys, setAllToys] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/bookings")
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
            })
    }, [])


    return (

        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Seller Name</th>
                            <th>Sub Category</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>


                        {alltoys?.map((toys) => (
                            <Toy key={toys._id}
                            toys={toys}></Toy>
                        ))}



                    </tbody>

                </table>
            </div>
        </div>




    );
};

export default AllToys;