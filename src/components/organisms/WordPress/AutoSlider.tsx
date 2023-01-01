import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { imgContainer, img, section } from './AutoSlider.css'

const AutoSlider = React.memo(() => {

  const settings = {
    dots: false,
    swipe: false,
    autoplay: true,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 769, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className={section} >
        <Slider {...settings}>
          <div className={imgContainer}>
            <img className={img} src="/images/top_slider_img01.png" alt="" />
          </div>
          <div className={imgContainer}>
            <img className={img} src="/images/top_slider_img02.png" alt="" />
          </div>
          <div className={imgContainer}>
            <img className={img} src="/images/top_slider_img03.png" alt="" />
          </div>
          <div className={imgContainer}>
            <img className={img} src="/images/top_slider_img04.png" alt="" />
          </div>
          <div className={imgContainer}>
            <img className={img} src="/images/top_slider_img05.png" alt="" />
          </div>
          <div className={imgContainer}>
            <img className={img} src="/images/top_slider_img06.png" alt="" />
          </div>
        </Slider>
      </section>
    </>
  )
});

export default AutoSlider;
