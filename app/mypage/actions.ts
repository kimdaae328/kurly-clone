"use server";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

export async function logOut() {
  const session = await getSession();
  await session.destroy();
  redirect("/");
}

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
