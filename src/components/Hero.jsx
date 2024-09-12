import React from 'react'
import HeroImg from '../assets/img/HeroImg.webp'

const BgStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Hero = () => {
  return (
    <>
    
         <div style={BgStyle} className='relative h-[300px] md:h-[450px] xl:h-[550px]'>
            <div className= 'absolute inset-0 bg-black bg-opacity-40 shadow-inner-md '>
                <div className='flex flex-col justify-between xs:space-y-[45%] 2xs:space-y-[115px] sm:space-y-[150px] md:space-y-[210px] lg:space-y-[215px] xl:space-y-[50%] px-[100px] py-[30px] sm:py-[30px] md:py-[50px]  sm:px-[130px] md:px-[150px] lg:px-[200px] xl:px-[450px]  items-center '>
                    <div className="flex flex-wrap max-w-2xl text-lg sm:text-xl md:text-3xl lg:text-4xl ">
                        <h1 className='text-txtColor font-cinzel w-full text-center '>a room without books is like</h1>
                        <h1 className='text-txtColor font-cinzel w-full  text-center ' >a body without a soul</h1>

                    </div>

                    <div className='flex gap-2 items-center'>
                        <button className='bg-txtColor text-gray-800  w-[105px] h-[40px] md:w-[120px] md:h-[50px] lg:w-[130px] lg:h-[55px] xl:w-[150px] xl:h-[60px] font-mulish rounded-md text-[13px] sm:text-sm md:text-md lg:text-lg  hover:scale-105 font-bold'> Rent a book</button>

                        <button className=' text-txtColor  w-[105px] h-[40px] md:w-[120px] md:h-[50px] lg:w-[130px] lg:h-[55px] xl:w-[150px] xl:h-[60px] font-mulish rounded-md text-[13px] sm:text-sm md:text-md lg:text-lg border hover:scale-105 font-bold'> Buy a book</button>
                    </div>
                    
                </div>
            </div>

         </div>

    </>
   
  )
}

export default Hero