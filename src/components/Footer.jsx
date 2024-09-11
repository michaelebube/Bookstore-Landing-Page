import React from 'react'
import FooterBg from '../assets/img/FooterBg.webp'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const BgStyle ={
    backgroundImage: `url(${FooterBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Footer = () => {
  return (
    <>
        <div style={BgStyle} className='w-full xs:h-[95px] sm:h-[150px] sm:mb-[2px] md:h-[180px] lg:h-[200px] xl:h-[220px] relative'>
           <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>
            <div className='grid grid-cols-3 gap-2 xs:py-2 py-3 relative h-full '>
                <div className= 'flex justify-center items-center h-full border-r-[1px] border-white  '>
                    <h1 className='font-ephesis xs:text-[18px] sm:text-3xl xl:text-5xl text-white'>Bookaholic</h1>
                   
                </div>


    <div className='flex flex-col xs:space-y-1 md:space-y-2 xl:space-y-3  border-r-[1px]'>
        <div className='flex flex-col xs:gap-2 sm:gap-2 relative xs:px-5 sm:px-10 xl:px-[100px] xs:pt-[12px] sm:pt-[25px]'>
            <div class="h-[1px] sm:w-[45px] md:w-[60px] xl:w-[65px] xs:w-[30px] bg-white/90 absolute left-[30px] -top-[1px] xs:left-[20px] xs:top-[6px] sm:left-[40px] sm:top-[20px]  lg:left-[40px] lg:top-[20px] xl:left-[100px] xl:top-[20px] 2xl:left-[100px] 2xl:top-[20px]"></div>
            <h1 className='font-cinzel xs:text-[10px]  sm:text-lg md:text-md lg:text-lg xl:text-xl font-bold text-white/90 '>CONTACT US</h1>
            <div class="h-[1px] w-8 sm:w-[45px] md:w-[60px] xl:w-[65px] xs:w-[30px] bg-white/90 absolute left-[30px] -bottom-[1px] xs:left-[20px] xs:top-[28px] sm:left-[40px] sm:top-[52px] lg:left-[40px] lg:top-[54px] xl:left-[100px] xl:-bottom-[5px] 2xl:left-[100px] 2xl:-bottom-[5px] "></div>

        </div>

        <div className='font-mulish xs:px-5 sm:px-10 xl:px-[100px] xs:text-[8px] sm:text-[15px] md:text-[18px] xl:text-[22px] text-white/50'>
            <h1 className='xs:pt-[4px]  '>+9987546633544</h1>
           <h1 className=' xs:pt-[1px]  '>bookaholic@books.com</h1>
        </div>

        <div className='flex xs:gap-5 text-white/90 xs:text-[10px] sm:text-[15px] md:text-[24px] xl"text-[30px] pt-[2px] xs:px-5 sm:px-10 xl:px-[100px] '>
            <a href="/#" className='hover:scale-105'>
                <FaTwitter />
            </a>
            <a href="/#" className='hover:scale-105'>
                <FaFacebookF  />
            </a>
            <a href="/#" className='hover:scale-105'>
                <FaInstagram />
            </a>
        </div>
        

    </div>

    <div className='flex flex-col xs:space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-4  border-r-[1px]'>
        <div className='flex flex-col xs:gap-2 sm:gap-2 relative xs:px-5 sm:px-[30px] xl:px-[90px] xs:pt-[12px] sm:pt-[25px]'>
            <div class="h-[1px] sm:w-[45px] md:w-[60px] xl:w-[65px] xs:w-[30px] bg-white/90 absolute left-[30px] -top-[1px] xs:left-[20px] xs:top-[6px] sm:left-[30px] sm:top-[20px]  lg:left-[30px] lg:top-[20px] xl:left-[100px] xl:top-[20px] 2xl:left-[90px] 2xl:top-[20px]"></div>
            <h1 className='font-cinzel xs:text-[10px]  sm:text-lg md:text-md lg:text-lg xl:text-xl font-bold text-white/90 '>NEWSLETTER</h1>
            <div class="h-[1px] w-8 sm:w-[45px] md:w-[60px] xl:w-[65px] xs:w-[30px] bg-white/90 absolute left-[30px] -bottom-[1px] xs:left-[20px] xs:top-[28px] sm:left-[30px] sm:top-[52px] lg:left-[30px] lg:top-[54px] xl:left-[100px] xl:-bottom-[5px] 2xl:left-[90px] 2xl:-bottom-[5px] "></div>

        </div>

        <div className='xs:px-5 sm:px-[30px]  xl:px-[90px]  sm:py-[3px] md:py-2  sm:rounded-md'>
            <input type="email" name="" id="" placeholder='Enter your email' className='xs:p-1 sm:p-2 md:p-4 lg:p-5 xs:h-[15px] sm:h-[30px] md:h-[35px] xl:h-[45px] xs:text-[8px] sm:text-sm md:text-[16px] lg:text-lg xs:w-[80px] sm:w-[175px] md:w-[213px] lg:w-[270px] xl:w-[320px]' />
            <button className='xs:h-[15px] sm:h-[30px] bg-txtColor  sm:w-[175px] md:h-[35px] xs:w-[80px] md:w-[213px] lg:h-[40px] xl:h-[45px] lg:w-[270px] xl:w-[320px] xs:-mt-[2px]  sm:mt-2 xl:mt-3  xs:font-mulish xs:text-[8px] sm:text-sm lg:text-[16px] xl:text-lg hover:scale-105 font-bold'>SUBSCRIBE</button>
        </div>
    </div>
               
                
            </div>
        </div>
    </>
  
  )
}

export default Footer