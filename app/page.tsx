import styles from "../styles/home.module.css";
import "../styles/global.css";
import Mainbanner from "../components/mainBanner/mainBanner";
import BannerWrap from "../components/bannerItem/bannerWrap";
import BannerSpecialPrice from "../components/bannerItem/bannerSpecialPrice";
import Link from "next/link";

  
  const bannerItems1 = [
    { name: "타이틀1", btnTitle: "담기" },
    { name: "타이틀2", btnTitle: "담기" },
    { name: "타이틀3", btnTitle: "담기" },
    { name: "타이틀4", btnTitle: "담기" }
  ];

  const bannerItems2 = [
    { name: "타이틀5", btnTitle: "담기" },
    { name: "타이틀6", btnTitle: "담기" },
    { name: "타이틀7", btnTitle: "담기" },
    { name: "타이틀8", btnTitle: "담기" }
  ];

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
        <div>
          <BannerSpecialPrice timeTitle="일일특가" timeSubtitle="24시간 한정! 최저가 특가⏰" itemCount={1} itemTitles={["타이틀111"]} ></BannerSpecialPrice>
        </div>
        <div>
          <BannerSpecialPrice timeTitle="🎉뷰컬페 일일특가" timeSubtitle="24시간 한정 초특가 보장🔥" itemCount={2} itemTitles={["타이틀222", "타이틀333"]}></BannerSpecialPrice>
        </div>
        <div>
          <BannerSpecialPrice timeTitle="✨최저가 도전" timeSubtitle="놓칠 수 없는 기회!" itemCount={2} itemTitles={["타이틀444", "타이틀555"]}></BannerSpecialPrice>
        </div>
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