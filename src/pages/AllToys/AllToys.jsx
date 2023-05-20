import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const AllToys = () => {
    const [alltoys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://localhost:9000/bookings")
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
            })
    }, [])


    const handleSearch = () =>{
        fetch(`http://localhost:9000/searchByToyname/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            setAllToys(data);
          });
    }

    return (

        <div>
            <div className='text-end '>
            <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border rounded-md"
          />{" "}
            <button onClick={handleSearch} className='text-center'>Search</button>
            </div>
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