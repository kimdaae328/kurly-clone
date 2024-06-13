import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

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
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/");
  };
  
  const deleteAccount = async () => {
    "use server";
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
  };

  return (
    <div>
      <h1>Welcome! {user?.username}!</h1>
      <form action={logOut}>
        <button>로그아웃</button>
      </form>
      <form action={deleteAccount}>
        <button>회원탈퇴</button>
      </form>
    </div>
  );
}