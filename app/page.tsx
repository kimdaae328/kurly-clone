import styles from "../styles/home.module.css";
import "../styles/global.css";
import Mainbanner from "../components/mainBanner/mainBanner";
import BannerWrap from "../components/bannerItem/bannerWrap";
import BannerSpecialPrice from "../components/bannerItem/bannerSpecialPrice";
import Link from "next/link";
  
const Home: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.mainBannerLayout}>
        <Mainbanner></Mainbanner>
      </div>
      
      <div className={styles.bannerLayout}>
        <BannerWrap></BannerWrap>
      </div>

      <div className={styles.minibanner}>
        <Link href="/">
          <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1715908718/cc8bf4dfjckacuwrx5na.png" alt="" />
        </Link>
      </div>

      <div className={styles.specialBannerLayout}>
        <BannerSpecialPrice itemCount={2} ></BannerSpecialPrice>
      </div>

      <div className={styles.minibanner}>
        <Link href="/">
          <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1715908718/cc8bf4dfjckacuwrx5na.png" alt="" />
        </Link>
      </div>

    </div>
  );
}

export default Home;