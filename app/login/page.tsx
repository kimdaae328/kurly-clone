"use client"
import React from 'react';
import styles from '../../styles/login/login.module.css';
import { useFormState } from 'react-dom';
import { loginForm } from "./actions";
import FormButton from '../../components/button';
import Input from '@/components/input';
import Link from 'next/link';
import { PASSWORD_MIN_LENGTH } from '@/lib/constans';

export default function Login() {
  const [state, action] = useFormState(loginForm, null);

  return (
    <div className={styles.loginArea}>
      <span className={styles.loginTitle}>로그인</span>

      <form action={action} className={styles.loginForm}>
        <Input
          name="username"
          type="text"
          placeholder="아이디를 입력해주세요"
          required
          errors={state?.fieldErrors.username}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />

        <div className={styles.searchBtn}>
          <button>아이디 찾기</button>
          <button>비밀번호 찾기</button>
        </div>

        <div className={styles.loginBtn}>
          <FormButton text="로그인" />
          <Link href="/join" className={styles.btnLine}>회원가입</Link>
        </div>
      </form>
    </div>
  );
}
