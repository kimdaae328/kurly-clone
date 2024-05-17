import React from 'react';
import styles from '../../styles/login.module.css';

export default function Login() {
  return (
    <div className={styles.loginArea}>
      <span className={styles.loginTitle}>로그인</span>

      <form action="" className={styles.loginForm}>
        <input type="text" placeholder='아이디를 입력해주세요' />
        <input type="password" placeholder='비밀번호를 입력해주세요' />

        <div className={styles.searchBtn}>
          <button>아이디 찾기</button>
          <button>비밀번호 찾기</button>
        </div>

        <div className={styles.loginBtn}>
            <Button>로그인</Button>
            <Button>회원가입</Button>
        </div>
      </form>
    </div>
  );
}
