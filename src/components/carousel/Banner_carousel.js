

import React from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "./Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const bannerr = [
        "carousel (5).jpg",
        "carousel (4).jpg",
        "carousel (1).jpg",
        "carousel (2).jpg",
        "carousel (3).jpg",
      ]



      const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      }
    
      const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    

  return (
    <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
  {bannerr.map((image) => {
                    return (
                        <div className='p-1 ' key={image}>
                            <img className='w-full lg:h-96 rounded sm:h-60 h-52 md:h-72' src={`${image}`} alt="" />
                        </div>
                    )
                })
                }
  </HeroSlider>
  </div>

  <div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {bannerr.map((image) => {
                    return (
                        <div className='p-1 ' key={image}>
                            <img className='w-full lg:h-96 rounded sm:h-60 h-52 md:h-72' src={`${image}`} alt="" />
                        </div>
                    )
                })
                }
  </HeroSlider>
  </div>
    </>
  );
};

export default Banner;