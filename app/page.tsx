import styles from "../styles/home.module.css";
import "../styles/global.css";
import Mainbanner from "../components/mainbanner";
import BannerWrap from "../components/bannerItem/bannerwrap";
import BannerSpecialPrice from "../components/bannerItem/bannerSpecialPrice";
import Link from "next/link";

  
  const bannerItems1 = [
    { itemTitle: "타이틀1", btnTitle: "담기" },
    { itemTitle: "타이틀2", btnTitle: "담기" },
    { itemTitle: "타이틀3", btnTitle: "담기" },
    { itemTitle: "타이틀4", btnTitle: "담기" }
  ];

  const bannerItems2 = [
    { itemTitle: "타이틀5", btnTitle: "담기" },
    { itemTitle: "타이틀6", btnTitle: "담기" },
    { itemTitle: "타이틀7", btnTitle: "담기" },
    { itemTitle: "타이틀8", btnTitle: "담기" }
  ];

const Home: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.mainBannerLayout}>
        <Mainbanner></Mainbanner>
      </div>
      
      <div className={styles.bannerLayout}>
        <BannerWrap bannerTitle="🛒지금 가장 많이 담는 특가" bannerInfo="컬리 추천 특가템 최대 30%" bannerItems={bannerItems1}></BannerWrap>
      </div>

      <div className={styles.bannerLayout}>
        <BannerWrap bannerTitle="🏅뷰컬페에서 가장 인기있어요" bannerInfo="지금 뷰티컬리는 최대 85% 빅세일 중!" bannerItems={bannerItems2}></BannerWrap>
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