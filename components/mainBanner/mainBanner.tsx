"use client"
import React from 'react'
import styles from "../../styles/mainBanner/mainBanner.module.css"
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
    arrows: true,
    autoplay : true,
  //   prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
	// nextArrow : "<button type='button' class='slick-next'>Next</button>",
  };

  return (
    <div className={styles.mainbanner}>
      <div className={styles.sliderContainer}>
        <Slider {...settings} className={styles.slickSlider}>
          <div className={styles.slickSlide}>
            <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1716253626/b4vw83xbqecqrcegfmac.jpg" alt="" />
            <h3>1</h3>
          </div>
          <div className={styles.slickSlide}>
            <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1716253626/pdimtqx6najh34ccxsis.jpg" alt="" />
            <h3>2</h3>
          </div>
          <div className={styles.slickSlide}>
            <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1716253626/rsyvu5fwmgkm0w9ylcsh.jpg" alt="" />
            <h3>3</h3>
          </div>
          <div className={styles.slickSlide}>
            <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1716253626/bzk89qqnl1eeyylwh3no.jpg" alt="" />
            <h3>4</h3>
          </div>
          <div className={styles.slickSlide}>
            <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1715841193/xt1cjirpj4t5564vwrzz.jpg" alt="" />
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}
