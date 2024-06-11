import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import React from 'react'
import db from '@/lib/db';
import getSession from '@/lib/session';

async function getUser() {
  const session = await getSession();
  if (session.id) {
async function getUser(){
  const session = getSession();
  if(session.id){
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
      }
    })
  }
  notFound();
}

export default async function Mypage() {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/");
  };
export default function Mypage() {
  const user = await getUser()
  return (
<<<<<<< HEAD
    <div>
      <h1>{user?.username}님 회원가입을 완료했습니다!</h1>
      <form action={logOut}>
        <button>로그아웃</button>
      </form>
    </div>
  );
}}
=======
    <h2>회원가입을 축하합니다.</h2>
  )
}
>>>>>>> parent of 6a1fcce (로그아웃 완료)
