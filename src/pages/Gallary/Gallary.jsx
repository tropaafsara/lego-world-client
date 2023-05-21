import React from 'react';

const Gallary = () => {
    return (
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2 ">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2  ">
      
      
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center  transition duration-300 ease-in-out hover:scale-110  "
          src="https://i.ibb.co/h1mXdBV/a.jpg" />

      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 "
          src="https://i.ibb.co/GdSjtwc/g.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 "
          src="https://i.ibb.co/DYWtKz8/e.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 "
          src="https://i.ibb.co/LZBqHW5/c.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 "
          src="https://i.ibb.co/y66wmzq/f.png" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110  "
          src="https://i.ibb.co/fHDk0zD/b.jpg" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Gallary;