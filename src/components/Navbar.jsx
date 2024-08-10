import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='bg-primaryColor w-full p-5  flex items-center xs:px-[8px] px-[15px] sm:px-[60px] justify-between ' >
        <div className='flex gap-1'>
        <div class="w-[1px] h-8 sm:h-10 bg-white"></div>
        <h1 className='font-ephesis text-3xl xs:text-2xl sm:text-4xl text-white'>Bookaholic</h1>
        </div>
        

        <div className='flex xs:gap-[7px] gap-3 sm:gap-[40px] font-mulish text-txtColor xl:-translate-x-[500px] text-[13px] md:text-md lg:text-lg xl:text-xl  '>
          <a href="#about-us">
            <p className='hover:text-white'>ABOUT US</p>
          </a>
          <a href="#catalog"> 
            <p className='hover:text-white'>CATALOG</p> 
          </a>
          <a href="#aboutCEO">
            <p className='hover:text-white'>ABOUT C.E.O</p>
            </a>
            
        </div>
    </div>
    </>
   
  )
}

export default Navbar