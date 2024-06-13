"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/join/join.module.css";
import Input from '@/components/input';
import { useForm } from "react-hook-form";
import { updateProfile, getProfile } from './actions';

export default function EditProfilePage() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getProfile();
      setUserData(data);
      setValue("username", data.username);
      setValue("email", data.email);
      setValue("mobileNumber", data.mobileNumber);
    }
    fetchData();
  }, [setValue]);

  const onSubmit = async (data: any) => {
    await updateProfile(null, new FormData(document.querySelector('form')));
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.pageTitle}>정보 수정</h2>

      <div className={styles.joinFromWrap}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.joinFrom}>
          <div className={styles.joinItem}>
            <label htmlFor="username">아이디 <span className={styles.essential}>*</span></label>
            <Input
              name="username"
              type="text"
              placeholder="아이디를 입력해주세요"
              required
              errors={errors?.username}
              minLength={3}
              maxLength={10}
              {...register("username", { required: true, minLength: 3, maxLength: 10 })}
            />
          </div>
          <div className={styles.joinItem}>
            <label htmlFor="email">이메일 <span className={styles.essential}>*</span></label>
            <Input
              name="email"
              type="email"
              placeholder="예: marketkurly@kurly.com"
              required
              errors={errors?.email}
              {...register("email", { required: true })}
            />
          </div>
          <button type="submit" className={styles.btnColor}>수정하기</button>
        </form>
      </div>
    </div>
  );
}
