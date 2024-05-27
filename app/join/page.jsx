import React from "react";
import styles from "../../styles/join/join.module.css"

export default function JoinPage() {
  return (
    <div className={styles.content}>
      <h2 className={styles.pageTitle}>회원가입</h2>

      <div className={styles.joinFromWrap}>
        <p className={styles.essential}><span>*</span>필수입력사항</p>

        <form className={styles.joinFrom}>
          <div className={styles.joinItem}>
            <label htmlFor="username">아이디:</label>
            <input type="text" id="username" name="username" placeholder="아이디를 입력해주세요" />
            <button className={styles.btnLine}>중복확인</button>
          </div>
          <div className={styles.joinItem}>
            <label htmlFor="password">비밀번호:</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className={styles.joinItem}>
            <label htmlFor="passwordConfirm">비밀번호확인:</label>
            <input type="passwordConfirm" id="passwordConfirm" name="passwordConfirm" />
          </div>
          <div>
          <input data-testid="input-box" id="email" name="email" type="text" placeholder="예: marketkurly@kurly.com">
          </div>
          <button type="submit" className={styles.btnLine}>주소 검색</button>
        </form>
      </div>
    </div>
  );
}