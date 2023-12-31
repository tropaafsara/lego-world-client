import img1 from '../../../assets/images/banner/1.webp';
// import img2 from '../../../assets/images/banner/2.jpg';
// import img3 from '../../../assets/images/banner/3.jpg';
// import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/vqKTJqQ/img2.png" className="w-full rounded-xl" />
                {/* <img src="https://i.ibb.co/FHfWjfq/im.png" className="w-full rounded-xl" /> */}
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Where Imagination Takes Shape, LEGO World!</h2>
                        <p>A vast selection of LEGO sets, accessories, and collectibles to unleash your imaginations and bring your dreams to life, one brick at a time.</p>
                        <div>
                            <button className="btn btn-ghost  bg-sky-600 hover:bg-cyan-500  mt-5 text-white mr-5">Discover More</button>
                             </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-ghost text-white text-3xl mr-5">❮</a>
                    <a href="#slide2" className="btn btn-ghost text-black text-3xl ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/FHfWjfq/im.png" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Where Imagination Takes Shape, LEGO World!</h2>
                        <p>A vast selection of LEGO sets, accessories, and collectibles to unleash your imaginations and bring your dreams to life, one brick at a time.</p>
                        <div>
                            <button className="btn btn-ghost  bg-sky-600 hover:bg-cyan-500  mt-5 text-white mr-5">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-ghost text-white text-3xl mr-5">❮</a>
                    <a href="#slide3" className="btn btn-ghost text-black text-3xl">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Where Imagination Takes Shape, LEGO World!</h2>
                        <p>A vast selection of LEGO sets, accessories, and collectibles to unleash your imaginations and bring your dreams to life, one brick at a time.</p>
                        <div>
                            <button className="btn btn-ghost  bg-sky-600 hover:bg-cyan-500  mt-5 text-white mr-5">Discover More</button>
                             </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-ghost text-white text-3xl">❮</a>
                    <a href="#slide4" className="btn btn-ghost text-black text-3xl">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Where Imagination Takes Shape, LEGO World!</h2>
                        <p>A vast selection of LEGO sets, accessories, and collectibles to unleash your imaginations and bring your dreams to life, one brick at a time.</p>
                        <div>
                            <button className="btn btn-ghost  bg-sky-600 hover:bg-cyan-500  mt-5 text-white mr-5">Discover More</button>
                            </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-ghost text-white text-3xl">❮</a>
                    <a href="#slide1" className="btn btn-ghost text-black text-3xl">❯</a>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;