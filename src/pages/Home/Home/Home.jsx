import React from 'react';
import Banner from '../Banner/Banner';
import TabCategory from '../../TabCategory/TabCategory';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-5 mb-5'>
            <TabCategory></TabCategory>
            </div>
           
            
        </div>
    );
};

export default Home;