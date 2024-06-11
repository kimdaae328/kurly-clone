import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect, useRouter } from "next/navigation";

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
  const router = useRouter();

  const deleteUser = async () => {
    const response = await fetch('/api/deleteUser', {
      method: 'POST',
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to delete user');
    }
  };

  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/");
  };
  return (
    <div>
      <h1>{user?.username}님 회원가입을 완료했습니다!</h1>
      <form action={logOut}>
        <button>로그아웃</button>
      </form>
      <button onClick={deleteUser}>회원 탈퇴</button>
    </div>
  );
}