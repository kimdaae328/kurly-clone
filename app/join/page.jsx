"use client"

import React from "react";
import styles from "../../styles/join/join.module.css"
import Input from '@/components/input';
import { useFormState } from "react-dom";
import { joinForm } from './actions'
import {
  PASSWORD_MIN_LENGTH,
} from "@/lib/constans";


export default function JoinPage() {
  const [state, dispatch] = useFormState(joinForm, null);

  return (
    <div className={styles.content}>
      <h2 className={styles.pageTitle}>회원가입</h2>

      <div className={styles.joinFromWrap}>
        <p className={styles.essentialWrap}><span className={styles.essential}>*</span>필수입력사항</p>

        <form action={dispatch} className={styles.joinFrom}>
          <div className={styles.joinItem}>
            <label htmlFor="username">아이디 <span className={styles.essential}>*</span></label>
            <Input
              name="username"
              type="text"
              placeholder="아이디를 입력해주세요"
              required
              errors={state?.fieldErrors.username}
              minLength={3}
              maxLength={10}
            />
            {/* <button className={styles.btnLine}>중복확인</button> */}
          </div>
          <div className={styles.joinItem}>
            <label htmlFor="password">비밀번호 <span className={styles.essential}>*</span></label>
            <Input
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              errors={state?.fieldErrors.password}
              minLength={PASSWORD_MIN_LENGTH}
            />
          </div>
          <div className={styles.joinItem}>
            <label htmlFor="passwordConfirm">비밀번호확인 <span className={styles.essential}>*</span></label>
            <Input
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호를 확인"
              required
              errors={state?.fieldErrors.passwordConfirm}
              minLength={PASSWORD_MIN_LENGTH}
            />
          </div>
          <div className={styles.joinItem}>
            <label htmlFor="email">이메일 <span className={styles.essential}>*</span></label>
            <Input
              name="email"
              type="email"
              placeholder="예: marketkurly@kurly.com"
              required
              errors={state?.fieldErrors.email}
            />
            {/* <button className={styles.btnLine}>중복확인</button> */}
          </div>
          <div className={styles.joinItem}>
            <label htmlFor="mobileNumber">휴대폰 <span className={styles.essential}>*</span></label>
            <Input
              name="mobileNumber"
              type="tel"
              placeholder="숫자만 입력해주세요"
              required
              errors={state?.fieldErrors.mobileNumber}
            />
          </div>
          <button type="submit" className={styles.btnColor}>가입하기</button>
        </form>
      </div>
    </div>
  );
}