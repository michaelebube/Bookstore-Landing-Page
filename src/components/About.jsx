import React from 'react'
import AboutImg from '../assets/img/AboutBook.webp'
import { FaPlay } from 'react-icons/fa'
import LazyLoad from 'react-lazyload';

const About = () => {
  return (
    <>
          <div id='about-us' className='my-[60px] '>
    <div className='grid grid-cols-2 xs:grid-cols-1 xs:space-y-4 sm:grid-cols-2 gap-2'>
        {/* Image Section */}
      <div className='xs:w-[280px] sm:w-[320px] md:w-[380px] lg:w-[480px] xl:w-[725px] relative'>
        <div className="image-container">
          <LazyLoad>
               <img
            src={AboutImg}
            alt=""
            className='h-[200px] w-[150px] xs:w-[260px] xs:h-[250px] sm:w-[300px] sm:h-[340px] md:w-[405px] md:h-[375px] lg:w-[450px] lg:h-[450px] xl:w-[65px] xl:h-[280px] rounded-sm shadow-inner-md'
          />
          </LazyLoad>
       
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className="bg-white rounded-full p-4 flex items-center justify-center">
            <FaPlay className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
          </div>
        </div>
      </div>

        {/* Text Section */}
      <div >
        <div className='xs:gap-1 sm:gap-2 relative xl:mt-[25%] md:px-[35%] px-[38%] sm:px-[32%] xl:px-[40%] '>
            <div class="h-[1px] w-8 sm:w-20 xs:w-11 bg-gray-950   absolute "></div>
            <h1 className='font-cinzel   sm:text-xl xl:text-3xl  font-bold w-[120px] xl:w-[200px] '>ABOUT US</h1>
            <div class="h-[1px] w-8 sm:w-20 xs:w-11 bg-gray-950 absolute "></div>

      </div>

      <div className=' md:py-[20px]  py-[10px] sm:py-[12px]  xs:w-[300px]  sm:w-[250px] sm:ml-8 md:w-[300px] lg:w-[400px]   
      xl:w-[450px] 2xl:w-[500px] xs:mx-auto md:px-2 xl:mx-auto '>
        <div className=''>
            <p className='font-mulish text-center md:text-lg lg:text-xl xl:text-3xl 2xl:text-[25px]'>
            Welcome to <span className='font-ephesis text-3xl xs:text-xl sm:text-3xl xl:text-4xl text-gray-950 text-center '>Bookaholic</span>, where our passion for books fuels everything we do. From bestsellers to hidden gems, we curate an extensive collection to satisfy every reader's taste. Our mission is to connect people with the stories that inspire and transform. Join our community of book lovers and discover your next great read at our book haven, where every page opens a new world.
        </p>

        </div>
        
      </div>
        </div>
        
    </div>
  </div>
  
    </>
  )
}

export default About