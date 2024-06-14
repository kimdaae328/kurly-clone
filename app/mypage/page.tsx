import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/mypage/mypage.module.css";
import { logOut, deleteAccount } from "./actions";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Mypage() {
  const user = await getUser();

  return (
    <div className={styles.content}>
      <div className={styles.mypage}>
        <div className={styles.sidebar}>
          <div className={styles.userNameWrap}>
            <span className={styles.level}>웰컴</span>
            <h2 className={styles.userName}>{user?.username}님</h2>
          </div>

          <div className={styles.sideMenuList}>
            <div className={styles.sideMenuItem}>
              <span className={styles.sideMenuTitle}>내 정보관리</span>
              <form action={logOut}>
                <button>로그아웃</button>
              </form>
              <Link href="/edit-profile">
                정보 수정
              </Link>
              <form action={deleteAccount}>
                <button>회원탈퇴</button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.sideContent}>
          <div className={styles.sideConTitle}>
            <h3>주문 내역</h3>
            <span className={styles.sideConInfo}>최대 지난 3년간의 주문내역까지 확인할 수 있어요</span>
          </div>
        </div>
      </div>
    </div>
  );
}
