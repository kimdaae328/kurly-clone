"use server";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/mypage/mypage.module.css";

// 로그아웃
export async function logOut() {
  const session = await getSession();
  await session.destroy();
  redirect("/");
}

// 회원탈퇴
export async function deleteAccount() {
  const session = await getSession();
  if (session.id) {
    await db.user.delete({
      where: {
        id: session.id,
      },
    });
    await session.destroy();
    redirect("/");
  }
}
