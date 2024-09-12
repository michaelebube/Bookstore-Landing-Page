import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <div className='bg-primaryColor w-full p-5  flex items-center  px-6 sm:px-[60px] justify-between ' >
        <div className='flex gap-1'>
        <div class="w-[1px] h-8 sm:h-10 bg-white"></div>
        <h1 className='font-ephesis text-3xl xs:text-2xl sm:text-4xl text-white'>Bookaholic</h1>
        </div>
        

        <div className='flex xs:gap-[12px]  sm:gap-[40px] font-mulish text-txtColor xl:-translate-x-[500px] sm:text-[13px] text-[10px] md:text-md lg:text-lg xl:text-xl  '>
          <Link to='about-us' smooth= {true} >
            <p className='hover:text-white cursor-pointer'>ABOUT US</p>
          </Link>
          
           
          
         <Link to='catalog' smooth={true} offset={-10}>
            <p className='hover:text-white cursor-pointer'>CATALOG</p> 
         </Link> 
            
       
          <Link to='aboutCEO' smooth={true} offset={-30}>
            <p className='hover:text-white cursor-pointer'>ABOUT C.E.O</p>
          </Link>
            
            
            
        </div>
    </div>
    </>
   
  )
}

export default Navbar