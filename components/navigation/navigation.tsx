import Link from "next/link";
import styles from "../../styles/navigation/navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
        <div className={styles.in}>
            <ul className={styles.loginArea}>
                <li>
                    <Link href="/register">회원가입</Link>
                </li>
                <li>
                    <Link href="/login">로그인</Link>
                </li>
                <li>
                    <Link href="/customer">고객센터</Link>
                </li>
            </ul>

            <div className={styles.searchArea}>
                <div className={styles.logoArea}>
                    <h1>
                        <img src="https://res.cloudinary.com/dpr8m7xge/image/upload/v1715833528/qutmynoahyphg1qvpnew.svg" alt="" />
                    </h1>

                    <Link href="/" className={styles.home}>마켓컬리</Link>
                </div>

                <div className={styles.searchInput}>
                    <input type="text" placeholder="검색어를 입력해주세요" />
                </div>

                <ul className={styles.menuItems}>
                    <li>
                        <Link href="/location" className={styles.location}>위치</Link>
                    </li>
                    <li>
                        <Link href="/favorite" className={styles.favorite}>좋아요</Link>
                    </li>
                    <li>
                        <Link href="/cart" className={styles.cart}>장바구니</Link>
                    </li>
                </ul>
            </div>

            <nav className={styles.nav}>
                <div className={styles.categoryArea}>
                    <button className={styles.category}>카테고리</button>
                </div>
                <ul className={styles.list}>
                    <li>
                        <Link href="/new">신상품</Link>
                    </li>
                    <li>
                        <Link href="/best">베스트</Link>
                    </li>
                    <li>
                        <Link href="/frugal">알뜰쇼핑</Link>
                    </li>
                    <li>
                        <Link href="/special">특가/혜택</Link>
                    </li>
                </ul>

                <Link href="/delivery" className={styles.delivery}>
                    <span>샛별·하루</span>
                    배송안내
                </Link>
            </nav>
        </div>
    </header>
  );
}