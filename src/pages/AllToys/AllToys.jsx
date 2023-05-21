import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const AllToys = () => {
    const [alltoys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("https://lego-world-server-tasnimafsara12-gmailcom.vercel.app/bookings")
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
            })
    }, [])


    const handleSearch = () =>{
        fetch(`https://lego-world-server-tasnimafsara12-gmailcom.vercel.app/searchByToyname/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            setAllToys(data);
          });
    }

    return (

        <div>
            <div className='text-end mb-4'>
            <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border-4 rounded-md border-sky-600"
          />{" "}
            <button onClick={handleSearch} className='text-center text-xl'>Search</button>
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