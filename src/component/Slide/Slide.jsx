import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from './Sdata';

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
   <div className='slide'>
   <Slider {...settings}>
     {Sdata.map((value) => {
        return (
          <div className='!flex'>
            <div className='w-[350px] h-[350px]'>
              <img src={value.cover} alt='' className='w-full h-full'/>
            </div>
            <div className='w-[50%] pt-[60px] pb-[70px] pl-[30px]'>
              <span>{value.category}</span>
              <h2>{value.title}</h2>
              <p>{value.desc}</p>
            </div>
          </div>
        )
     })}
    </Slider>
   </div>
  </>
    
  )
}

export default Slide