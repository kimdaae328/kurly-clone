import React from 'react';
import styles from '../../styles/bannerItem/bannerSpecialPrice.module.css';
import BannerItem from './bannerItem';
import productData from '../../api/product.json';

interface BannerSpecialPriceProps {
  timeTitle: string;
  timeSubtitle: string;
  itemCount?: number;
}

const BannerSpecialPrice: React.FC<BannerSpecialPriceProps> = ({ itemCount }) => {
  const bannerItems = itemCount ? productData.slice(0, itemCount) : productData;

  return (
    <div className={styles.in}>
      <div className={styles.bannerSpecialPrice}>
        <div className={styles.bannerTimeArea}>
          <span className={styles.title}>일일특가</span>
          <span className={styles.specialInfo}>24시간 한정! 최저가 특가⏰</span>

          <div className={styles.timeArea}>
            <span className={styles.timeUnits}>09:41:49</span>
          </div>

          <span className={styles.specialTip}>망설이면 늦어요!</span>
        </div>

        <div className={styles.bannerItem}>
          {bannerItems.map((item, index) => (
            <BannerItem 
              key={index} 
              height="350px" 
              name={item.name} 
              btnTitle="담기" 
              poster={item.poster}
              before={item.before}
              sales={item.sales}
              price={item.price}
              review={item.review}
            />
          ))}
        </div>
      </div>

      <div className={styles.bannerSpecialPrice}>
        <div className={styles.bannerTimeArea}>
          <span className={styles.title}>🎉뷰컬페 일일특가</span>
          <span className={styles.specialInfo}>24시간 한정 초특가 보장🔥</span>

          <div className={styles.timeArea}>
            <span className={styles.timeUnits}>09:41:49</span>
          </div>

          <span className={styles.specialTip}>망설이면 늦어요!</span>
        </div>

        <div className={styles.bannerItem}>
          {bannerItems.map((item, index) => (
            <BannerItem 
              key={index} 
              height="350px" 
              name={item.name} 
              btnTitle="담기" 
              poster={item.poster}
              before={item.before}
              sales={item.sales}
              price={item.price}
              review={item.review}
            />
          ))}
        </div>
      </div>

      <div className={styles.bannerSpecialPrice}>
        <div className={styles.bannerTimeArea}>
          <span className={styles.title}>✨최저가 도전</span>
          <span className={styles.specialInfo}>놓칠 수 없는 기회!</span>

          <div className={styles.timeArea}>
            <span className={styles.timeUnits}>09:41:49</span>
          </div>

          <span className={styles.specialTip}>망설이면 늦어요!</span>
        </div>

        <div className={styles.bannerItem}>
          {bannerItems.map((item, index) => (
            <BannerItem 
              key={index} 
              height="350px" 
              name={item.name} 
              btnTitle="담기" 
              poster={item.poster}
              before={item.before}
              sales={item.sales}
              price={item.price}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerSpecialPrice;
