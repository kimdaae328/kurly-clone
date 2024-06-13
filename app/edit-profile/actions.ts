"use server";
import { NextResponse } from "next/server";
import { z } from "zod";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

// 스키마 정의
const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "사용자 이름은 문자열이어야 합니다!",
      required_error: "사용자 이름을 입력해주세요!",
    })
    .min(3, "사용자 이름은 최소 3자 이상이어야 합니다.")
    .max(10, "사용자 이름은 최대 10자 이하이어야 합니다.")
    .trim()
    .toLowerCase(),
  email: z
    .string()
    .email("유효한 이메일 주소를 입력해주세요")
    .toLowerCase()
});

// 프로필 정보 가져오기
export async function getProfile() {
  const session = await getSession();
  if (!session.id) {
    return NextResponse.json({ error: "로그인이 필요합니다" }, { status: 401 });
  }

  const user = await db.user.findUnique({
    where: { id: session.id },
    select: {
      username: true,
      email: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "사용자를 찾을 수 없습니다" }, { status: 404 });
  }

  return NextResponse.json(user);
}

// 프로필 정보 업데이트
export async function updateProfile(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    try {
      const session = await getSession();
      if (!session.id) {
        throw new Error("로그인이 필요합니다");
      }

      await db.user.update({
        where: {
          id: session.id,
        },
        data: {
          username: result.data.username,
          email: result.data.email,
        },
      });

      redirect("/mypage");
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw new Error("정보 수정 중 오류가 발생했습니다");
    }
  }
}
