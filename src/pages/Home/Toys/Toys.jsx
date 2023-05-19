import React, { useEffect, useState } from 'react';
import ToysCard from './ToysCard';
import NavBar from '../../Shared/Navbar/Navbar';

const Toys = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/toys')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-4">
        <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-600">Toy Categories</h3>
           
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services.map(service => <ToysCard
                    key={service._id}
                    service={service}
                ></ToysCard>)
            }
           
        </div>
    </div>
    );
};

export default Toys;