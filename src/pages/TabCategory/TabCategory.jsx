import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllToys from '../AllToys/AllToys';
import Toy from '../AllToys/Toy';
import T from '../AllToys/T';

const TabCategory = () => {

    const [alltoys, setAllToys] = useState([])
    const [activeTab, setActiveTab] = useState("")

    useEffect(() => {
        fetch(`https://lego-world-server-tasnimafsara12-gmailcom.vercel.app/bookings/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
            })
    }, [activeTab])
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div className='mx-8 mt-8'>
            <div className='flex justify-between font-bold p-4 mb-4 border-4 rounded-full border-sky-600'>
            <div
              onClick={() => handleTabClick("lego-city")}
              className={`tab tab2 remote text-2xl ${
                activeTab === "lego-city" ? "text-sky-600" : ""
              }`}
            >
              Lego City
            </div>
            <div
              onClick={() => handleTabClick("lego-architecture")}
              className={`tab tab2 Offline text-2xl ${
                activeTab === "lego-architecture" ? "text-sky-600" : ""
              }`}
            >
              Lego Architecture
            </div>
            <div
              onClick={() => handleTabClick("lego-cars")}
              className={`tab tab2 Offline text-2xl ${
                activeTab === "lego-cars" ? "text-sky-600" : ""
              }`}
            >
              Lego Cars
            </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 '>
            {alltoys?.map((toys) => (
                            <T key={toys._id}
                            toys={toys}></T>
                        ))}
            </div>
        </div>
    );
};

export default TabCategory;
