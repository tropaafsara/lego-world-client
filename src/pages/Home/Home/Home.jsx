import React from 'react';
import Banner from '../Banner/Banner';
import TabCategory from '../../TabCategory/TabCategory';
import Gallary from '../../Gallary/Gallary';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='mt-8 text-3xl text-center'>Our Gallary</h1>
            <Gallary></Gallary>
            <h1 className='mt-6 text-3xl text-center'>Shop By Category</h1>
            <div className='mt-5 mb-5'>
            <TabCategory></TabCategory>
            </div>
            
           
            
        </div>
    );
};

export default Home;