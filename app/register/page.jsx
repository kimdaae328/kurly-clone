import React from "react";

export default function RegisterPage() {
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <form>
        <label htmlFor="username">사용자 이름:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">이메일:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">비밀번호:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}