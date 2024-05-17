import Link from 'next/link'
import React from 'react'
import styles from "../../styles/bannertitle.module.css";


export default function Bannertitle() {
  return (
    <div className={styles.bannerTitleWrap}>
        <img src="" alt="" />
        <Link href="/" className={styles.banerTitle}>타이틀</Link>
        <span className={styles.bannerInfo}>서브타이틀 내용</span>
    </div>
  )
}
