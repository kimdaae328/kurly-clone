import React from 'react';
import styles from '../../styles/bannerItem/bannerWrap.module.css';
import Link from 'next/link';
import BannerItem from './bannerItem';

interface BannerItemProps {
  itemTitle: string;
  btnTitle: string;
}

interface BannerWrapProps {
  bannerTitle: string;
  bannerInfo: string;
  bannerItems: BannerItemProps[];
}

const BannerWrap: React.FC<BannerWrapProps> = ({ bannerTitle, bannerInfo, bannerItems }) => {
  return (
    <div className={styles.in}>
      <div className={styles.bannerTitleWrap}>
        <Link href="/" className={styles.banerTitle}>{bannerTitle}</Link>
        <span className={styles.bannerInfo}>{bannerInfo}</span>
      </div>

      <ul className={styles.bannerList}>
        {bannerItems.map((item, index) => (
          <li key={index}>
            <BannerItem height="350px" itemTitle={item.itemTitle} btnTitle={item.btnTitle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BannerWrap;
