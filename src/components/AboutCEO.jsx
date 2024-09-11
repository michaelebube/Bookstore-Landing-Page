import React from 'react'
import CEOImg from '../assets/img/CEOImg.webp'

const AboutCEO = () => {
  return (
    <>
        <div id='aboutCEO' className=' xs:mt-[60px] sm:mt-[80px] xs:mb-[60px] sm:mb-[100px] lg:mb-[150px]
        xl:mb-[170px]  relative'>
            <div className='flex flex-col xs:gap-2 sm:gap-2 relative sm:px-20 xs:px-10 xl:px-[100px]'>
            <div class="h-[1px] sm:w-[80px] xl:w-[120px] xs:w-11 bg-gray-950 absolute left-[30px] -top-[1px] xs:left-[40px] xs:-top-[2px] sm:left-[80px] sm:-top-[6px] md:left-[80px] md:-top-[5px] lg:left-[80px] lg:-top-[6px] xl:left-[100px] xl:-top-[6px] 2xl:left-[100px] 2xl:-top-[6px]"></div>
            <h1 className='font-cinzel  sm:text-2xl xl:text-4xl font-bold '>ABOUT C.E.O</h1>
            <div class="h-[1px] w-8 sm:w-[80px] xl:w-[120px] xs:w-11 bg-gray-950 absolute left-[30px] -bottom-[1px] xs:left-[40px] xs:-bottom-[1px] sm:left-[80px] sm:-bottom-[5px] md:left-[80px] md:-bottom-[5px] lg:left-[80px] lg:-bottom-[5px] xl:left-[100px] xl:-bottom-[5px] 2xl:left-[100px] 2xl:-bottom-[5px] "></div>

        </div>
        <div className=' relative xs:my-[20px] sm:my-[40px] md:my-[50px] lg:my-[60px]  bg-primaryColor w-full xs:h-[150px] sm:h-[240px] xl:h-[300px] leading-relaxed'>
            <div className='border-b-[1px] xs:pt-6 pt-8 w-3/5 xl:w-4/6'>
                <h1 className='font-cinzel text-white xs:text-xl sm:text-3xl xl:text-4xl text-right pb-1'>RACHEL RAHEEM</h1>
                <h1 className='font-cinzel text-white xs:text-[8px] sm:text-xs text-right pb-1'>c.e.o / founder of bookaholic</h1>
            </div>
            <div className='xs:pl-8 sm:pl-16 md:pl-[80px] lg:pl-[100px] xl:pl-[130px] xs:pt-2 pt-4 xl:pt-6 w-3/5 xl:w-4/6 text-white ' >
                <p className='font-mulish xs:text-[7px] sm:text-sm md:text-[15px] lg:text-[18px] xl:text-[25px] text-right xs:pb-2 sm:pb-4 xl:pb-2 xl:leading-7 '>   Rachel Raheem, founder of Bookaholic, is a passionate bibliophile dedicated to connecting readers with captivating stories. With a background in literature and a vision for accessible reading, Rachel has transformed Bookaholic into a beloved online haven for book lovers.</p>
            </div>

           

        </div>
         <div className='absolute inset-y-0 left-[60%] xl:left-[66.66%] xs:pl-2 xs:pr-2 sm:pl-4 sm:pr-4 md:pl-4 md:pr-4 lg:pl-8 z-10 xl:pl-12 xl:pr-1 '>
             <div class="relative xs:h-[108%] sm:h-[110%] md:h-[110%] lg:h-[120%] w-auto -mb-[10%]">
                <img src={CEOImg} alt="Image of C.E.O"  className=" h-full rounded-sm " />
                <div class="absolute inset-0 m-auto border border-white/70 h-[90%] w-[90%] rounded-sm"></div>


             </div>
                
            </div>

        </div>
    
    </>
   
  )
}

export default AboutCEO