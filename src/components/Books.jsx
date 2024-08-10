import React from 'react';

const Books = ({ data }) => {
  return (
<div className='flex xs:py-6 md:py-2 lg:py-6 xl:py-14 flex-col  sm:gap-2 md:gap-3 lg:gap-3 xl:gap-5 xs:gap-2 items-center  z-10'>
    <div className="relative group">
            <img 
        src={data.img} 
        alt={data.title} 
        className='rounded-full w-[100px] h-[100px] xs:w-[90px] xs:h-[90px] sm:w-[160px] sm:h-[150px] md:w-[150px] md:h-[150px] lg:w-[130px] lg:h-[130px] xl:w-[220px] xl:h-[220px] 2xl:w-[240px] 2xl:h-[240px] group-hover:shadow-2xl ' 
        onError={(e) => console.error('Image error:', e)}     
            />
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
            <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="btn">
                Buy
                </button>
                <button className="btn">
                Read
                </button>
            </div>
    </div>
      
      <h3 className='font-mulish xl:text-xl'>{data.title}</h3>
      <h1 className='text-gray-950 text-md xl:text-xl font-semibold'>${data.price}</h1>
    </div>
  );
};

export default Books