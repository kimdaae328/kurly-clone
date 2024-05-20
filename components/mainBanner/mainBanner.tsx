"use client"
import React from 'react'
import styles from "../../styles/mainBanner/mainBanner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Mainbanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.mainbanner}>
      <div className={styles.sliderContainer}>
        <Slider {...settings} className={styles.slickSlider}>
          <div className={styles.slickSlide}>
            <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1715841193/xt1cjirpj4t5564vwrzz.jpg" alt="" />
            <h3>1</h3>
          </div>
          <div className={styles.slickSlide}>
            <h3>2</h3>
          </div>
          <div className={styles.slickSlide}>
            <h3>3</h3>
          </div>
          <div className={styles.slickSlide}>
            <h3>4</h3>
          </div>
          <div className={styles.slickSlide}>
            <h3>5</h3>
          </div>
          <div className={styles.slickSlide}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}
