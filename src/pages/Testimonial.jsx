import React from 'react';

const Testimonial = () => {
    return (
        <div className='grid grid-cols-2 gap-6 '>
            <div className='flex justify-between rounded-lg p-8 bg-yellow-800	'>
                <div className='p-3'>
                    <h1 className='mb-3'>Products</h1>
                    <span className='text-3xl font-bold'>3455</span>
                </div>
                <div className='p-3'>
                    <h1 className='mb-3'>Customers</h1>
                    <span className='text-3xl font-bold'>30k +</span>
                </div>

                <div className='p-3'>
                    <h1 className='mb-3'>Happy</h1>
                    <span className='text-3xl font-bold mt-'>21k +</span>
                </div>
            </div >


            <div className='text-center flex mt-5'>
                <img className='mx-5 relative w-32 h-24 overflow-hidden rounded-full' src='https://i.ibb.co/FXLKGkR/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg'  alt="" />
                
                <div className='text-center align-middle'>
                <h1 className='text-2xl'>Anne Hathaway</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, voluptatibus!</p>
                <div className="rating ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Testimonial;