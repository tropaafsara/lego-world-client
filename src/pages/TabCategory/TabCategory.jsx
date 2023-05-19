import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllToys from '../AllToys/AllToys';
import Toy from '../AllToys/Toy';

const TabCategory = () => {

    const [alltoys, setAllToys] = useState([])
    // const [activeTab, setActiveTab] = useState("lego-city")
    const [activeTab, setActiveTab] = useState()

    useEffect(() => {
        fetch(`http://localhost:9000/bookings/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
            })
    }, [activeTab])

    // const result = alltoys.filter(toys=>toys.category==activeTab)
    // setAllToys(result);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div>
            <div
              onClick={() => handleTabClick("lego-city")}
              className={`tab  tab2 remote ${
                activeTab == "lego-city" ? " bg-danger text-white" : ""
              }`}
            >
              Lego City
            </div>
            <div
              onClick={() => handleTabClick("lego-architecture")}
              className={`tab  tab2 Offline ${
                activeTab == "lego-architecture" ? " bg-danger text-white" : ""
              }`}
            >
              Lego Architecture
            </div>
            <div
              onClick={() => handleTabClick("lego-cars")}
              className={`tab  tab2 Offline ${
                activeTab == "lego-cars" ? " bg-danger text-white" : ""
              }`}
            >
              Lego Cars
            </div>
            <div>
            {alltoys?.map((toys) => (
                            <Toy key={toys._id}
                            toys={toys}></Toy>
                        ))}
            </div>
        </div>
    );
};

export default TabCategory;
