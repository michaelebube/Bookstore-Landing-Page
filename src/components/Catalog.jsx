import React from 'react';
import CatalogImg from '../assets/img/CatalogBg.jpg';
import { FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../data';
import Books from './Books';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const BgStyle = {
  backgroundImage: `url(${CatalogImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const Catalog = () => {
  return (
    <>
      <div id = 'catalog' style={BgStyle} className='xs:my-[10px] sm:my-[30px] w-full xs:h-[240px] sm:h-[300px] xl:h-[500px] relative'>
        <div className='flex flex-col justify-center mt-[20px] relative text-center'>
          <div className="h-[1px] w-8 sm:w-20 xs:w-11 bg-gray-950 mx-auto"></div>
          <h1 className='font-cinzel text-center sm:text-2xl font-bold'>catalog</h1>
          <div className="h-[1px] w-8 sm:w-20 xs:w-11 bg-gray-950 mx-auto"></div>
        </div>
        <div className='absolute right-10 top-10 flex items-center gap-2 group'>
          <h1 className='font-cinzel xs:text-[10px] sm:text-[13px] md:text-lg font-bold'>View all</h1>
          <FaArrowRight className='h-[14px] group-hover:translate-x-1' />
        </div>
        <div className="absolute bottom-0 w-full">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
           
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={600}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-20-px"
          >
            {data.map((item) => (
              <Books key={item.id} data={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Catalog;
