import React from 'react';
import styles from '../../styles/bannerItem/bannerSpecialPrice.module.css';
import BannerItem from './bannerItem';

interface BannerSpecialPriceProps {
  timeTitle: string;
  timeSubtitle: string;
  itemCount?: number;
  itemTitles?: string[];
}

const BannerSpecialPrice: React.FC<BannerSpecialPriceProps> = ({ timeTitle, timeSubtitle, itemTitles = [] }) => {
  return (
    <div className={styles.in}>
      <div className={styles.bannerSpecialPrice}>
        <div className={styles.bannerTimeArea}>
          <span className={styles.title}>{timeTitle}</span>
          <span className={styles.specialInfo}>{timeSubtitle}</span>

          <div className={styles.timeArea}>
            <span className={styles.timeUnits}>09:41:49</span>
          </div>

          <span className={styles.specialTip}>망설이면 늦어요!</span>
        </div>

        <div className={styles.bannerItem}>
            {itemTitles.map((title, index) => (
                <BannerItem key={index} height="350px" itemTitle={title} btnTitle="담기" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BannerSpecialPrice;
