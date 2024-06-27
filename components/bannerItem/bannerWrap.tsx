"use client"
import React from 'react';
import styles from '../../styles/bannerItem/bannerWrap.module.css';
import Link from 'next/link';
import BannerItem from './bannerItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productData from '../../api/product.json';

export default function BannerWrap() {
  const bannerItems = productData;

  const foodItems = bannerItems.filter(item => item.category === "food");
  const beautyItems = bannerItems.filter(item => item.category === "beauty");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className={styles.in}>
      <div className={styles.bannerTitleWrap}>
        <Link href="/" className={styles.banerTitle}>🛒지금 가장 많이 담는 특가</Link>
        <span className={styles.bannerInfo}>컬리 추천 특가템 최대 30%</span>
      </div>

      <Slider {...settings} className={styles.bannerList}>
          {foodItems.map((item, index) => (
            <div className={styles.bannerItem} key={index}>
              <BannerItem
                height="350px"
                name={item.name}
                btnTitle="내용"
                poster={item.poster}
                before={parseInt(item.before)} // 문자열을 숫자로 변환
                sales={parseInt(item.sales)} // 필요에 따라 다른 속성도 변환할 수 있습니다.
                price={parseInt(item.price)}
                review={parseInt(item.review)}
                id={item.id}
              />
            </div>
          ))}
      </Slider>

      <div className={styles.bannerSection}>
      <div className={styles.bannerTitleWrap}>
        <Link href="/" className={styles.bannerTitle}>🏅뷰컬페에서 가장 인기있어요</Link>
        <span className={styles.bannerInfo}>지금 뷰티컬리는 최대 85% 빅세일 중!</span>
      </div>
      <Slider {...settings} className={styles.bannerList}>
        {beautyItems.map((item, index) => (
          <div className={styles.bannerItem} key={index}>
            <BannerItem
              height="350px"
              name={item.name}
              btnTitle="내용"
              poster={item.poster}
              before={parseInt(item.before)} // 문자열을 숫자로 변환
              sales={parseInt(item.sales)} // 필요에 따라 다른 속성도 변환할 수 있습니다.
              price={parseInt(item.price)}
              review={parseInt(item.review)}
              id={item.id}
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

