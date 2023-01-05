import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { imgContainer, img, section } from './AutoSlider.css'
import { graphql, useStaticQuery } from 'gatsby';

const AutoSlider = React.memo(() => {
  const data = useStaticQuery(query);

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
            <picture>
              <source type="image/webp" srcSet={'/images/top_slider_img01.webp'} />
              <img className={img} src="/images/top_slider_img01.png" alt="slider image" loading="lazy" />
            </picture>
          </div>
          <div className={imgContainer}>
            <picture>
              <source type="image/webp" srcSet={'/images/top_slider_img02.webp'} />
              <img className={img} src="/images/top_slider_img02.png" alt="slider image" loading="lazy" />
            </picture>
          </div>
          <div className={imgContainer}>
            <picture>
              <source type="image/webp" srcSet={'/images/top_slider_img03.webp'} />
              <img className={img} src="/images/top_slider_img03.png" alt="slider image" loading="lazy" />
            </picture>
          </div>
          <div className={imgContainer}>
            <picture>
              <source type="image/webp" srcSet={'/images/top_slider_img04.webp'} />
              <img className={img} src="/images/top_slider_img04.png" alt="slider image" loading="lazy" />
            </picture>
          </div>
          <div className={imgContainer}>
            <picture>
              <source type="image/webp" srcSet={'/images/top_slider_img05.webp'} />
              <img className={img} src="/images/top_slider_img05.png" alt="slider image" loading="lazy" />
            </picture>
          </div>
          <div className={imgContainer}>
            <picture>
              <source type="image/webp" srcSet={'/images/top_slider_img06.webp'} />
              <img className={img} src="/images/top_slider_img06.png" alt="slider image" loading="lazy" />
            </picture>
          </div>
        </Slider>
      </section>
    </>
  )
});

export default AutoSlider;

const query = graphql`
query{
  allFile(filter: {name: {in: ["top_slider_img01",
    "top_slider_img02",
    "top_slider_img03",
    "top_slider_img04",
    "top_slider_img05",
    "top_slider_img06"
  ]}}) {
    edges {
      node {
        id
        name
        childrenImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  }
}`
