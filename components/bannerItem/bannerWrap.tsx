"use client"
import React from 'react';
import styles from '../../styles/bannerItem/bannerWrap.module.css';
import Link from 'next/link';
import BannerItem from './bannerItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerWrap = ({ bannerTitle, bannerInfo, bannerItems }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className={styles.in}>
      <div className={styles.bannerTitleWrap}>
        <Link href="/" className={styles.banerTitle}>{bannerTitle}</Link>
        <span className={styles.bannerInfo}>{bannerInfo}</span>
      </div>

      <Slider {...settings} className={styles.bannerList}>
        {bannerItems.map((item, index) => (
          <div className={styles.bannerItem}>
            <BannerItem height="350px" itemTitle={item.itemTitle} btnTitle={item.btnTitle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerWrap;
