import React from 'react'
import BookImg from '../assets/img/BookImg.webp'

const BgStyle = {
    backgroundImage: `url(${BookImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Purchase = () => {
  return (
    <>
        <div style={BgStyle} className="relative xs:h-[160px] sm:h-[250px] md:h-[320px] xl:h-[400px] xs:mt-5 xs:mb-5 mb-8">
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"></div>
      <div className="flex flex-wrap xs:py-7 sm:py-14 md:py-[85px] lg:py-[75px] xl:py-[110px]  items-center justify-center xs:text-sm sm:text-lg md:text-2xl lg:text-3xl
      xl:text-4xl p-4">
        <h1 className="text-white font-cinzel w-full text-center font-bold z-10">
          there is more treasure in books than in
        </h1>
        <h1 className="text-white font-cinzel w-full text-center font-bold z-10">
          the pirate's lot on treasure island
        </h1>
      </div>
      <div className="flex gap-2 sm:gap-3 xl:gap-4 items-center absolute inset-x-0 xs:bottom-7 sm:bottom-14 md:bottom-[80px] lg:bottom-15 2xl:bottom-[80px] px-4 sm:px-0 justify-center">
        <button className="bg-txtColor text-gray-800 xs:w-[90px] xs:h-[37.5px] w-[105px] h-[40px] md:w-[120px] md:h-[50px] lg:w-[135px] lg:h-[60px] xl:w-[150px] xl:h-[60px] font-mulish rounded-md xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  z-10 hover:scale-105 font-bold">
          Rent a book
        </button>
        <button className="text-txtColor w-[105px] h-[40px] xs:w-[90px] xs:h-[37.5px] md:w-[120px] md:h-[50px] lg:w-[135px] lg:h-[60px] xl:w-[150px] xl:h-[60px] font-mulish rounded-md xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl hover:scale-105 border z-10 font-bold">
          Buy a book
        </button>
      </div>
    </div>
    </>
 
  )
}

export default Purchase