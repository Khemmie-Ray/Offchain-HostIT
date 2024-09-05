import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiStarShuriken } from "react-icons/gi";

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
          },
      },
    ]
  };

  const announcements = [
    { id: 1, text: "HostIT powered by Lisk" },
    { id: 2, text: "Web3 Lagos Conference 24" },
    { id: 3, text: "HostIT" },
    { id: 4, text: "Web3Bridge will be 5 🥳🥳🥳" },
    { id: 5, text: "HostIT" },
  ];

  return (
   <div className='w-[100%] sticky top-0'>
     <Slider {...settings}>
    {announcements.map((info) => (
        <div className='bg-[#0D0042] text-[#11EBF2] py-4' key={info.id}>
            <p className='flex justify-between items-center font-[600] text-[20px] px-4'>{info.text} <GiStarShuriken /></p>
        </div>
    ))}
        </Slider>
   </div>
  );
};

export default Banner;
