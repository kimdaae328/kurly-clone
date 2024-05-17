import React from 'react'
import styles from '../../styles/bannerWrap.module.css'
import Link from 'next/link'
import BannerItem from './bannerItem'

export default function BannerWrap({bannerTitle, bannerInfo, bannerItems = []}) {
  return (
    <div className={styles.in}>
        <div className={styles.bannerTitleWrap}>
          <Link href="/" className={styles.banerTitle}>{bannerTitle}</Link>
          <span className={styles.bannerInfo}>{bannerInfo}</span>
        </div>

        <ul className={styles.bannerList}>
          {bannerItems.map((item, index) => (
            <li key={index}>
              <BannerItem itemTitle={item.itemTitle} btnTitle={item.btnTitle} />
            </li>
          ))}
        </ul>
    </div>
  )
}
