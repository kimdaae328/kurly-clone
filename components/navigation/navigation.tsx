'use client';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../styles/navigation/navigation.module.css';
import { IoSearch } from "react-icons/io5";
  
export default function Navigation() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?query=${searchQuery}`);
        }
    };

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('../../lib/checkLogin');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log('로그인 상태 확인', result);
                setIsLoggedIn(result.loggedIn);
            } catch (error) {
                console.error('로그인 상태 확인 오류:', error);
            }
        };

        checkLoginStatus();
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.in}>
                <ul className={styles.loginArea}>
                {isLoggedIn ? (
                        <>
                            <li>
                                <Link href="/mypage">마이페이지</Link>
                            </li>
                            <li>
                                <form action="/api/logout" method="POST">
                                    <button type="submit">로그아웃</button>
                                </form>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/join">회원가입</Link>
                            </li>
                            <li>
                                <Link href="/login">로그인</Link>
                            </li>
                        </>
                    )}
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

                    <form className={styles.searchInput} onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="검색어를 입력해주세요"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <div className={styles.searchWrap}>
                            <button onClick={handleSearch}><IoSearch /></button>
                        </div>
                    </form>

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
