import React from 'react';
import Banner from '../Banner/Banner';
import TabCategory from '../../TabCategory/TabCategory';
import Gallary from '../../Gallary/Gallary';
import Testimonial from '../../Testimonial';
import NewsLetter from '../NewsLetter/NewsLetter';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='mt-8 text-3xl text-center font-bold'>Trending Toys</h1>
           
            <Gallary></Gallary>
            <hr className='mt-7 mb-5'></hr>
            <h1 className='mt-8 mb-8 text-3xl text-center font-bold '>Our Testimonial</h1>
            <Testimonial></Testimonial>
            <hr className='mt-7 mb-5'></hr>
            <h1 className='mt-8 text-3xl text-center font-bold'>Shop By Category</h1>
            <div className='mt-5 mb-5'>
            <TabCategory></TabCategory>
            </div>
            <NewsLetter></NewsLetter>
            
           
            
        </div>
    );
};

export default Home;