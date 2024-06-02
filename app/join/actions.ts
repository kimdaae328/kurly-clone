"use server";
import bcrypt from "bcrypt"
import { z } from "zod";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constans";
import db from "@/lib/db";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// const checkPasswords = ({
//   password,
//   passwordConfirm,
// }: {
//   password: string;
//   passwordConfirm: string;
// }) => password === passwordConfirm;

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      name : username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
}

const checkUniqueEmail = async (email:string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user) === false;
}

const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "사용자 이름은 문자열이어야 합니다!",
      required_error: "사용자 이름을 입력해주세요!",
    })
    .min(3, "사용자 이름은 최소 3자 이상이어야 합니다.")
    .max(10, "사용자 이름은 최대 10자 이하이어야 합니다.")
    .trim()
    .toLowerCase()
    // .transform((username) => `🔥 ${username}`)
    .refine(
      (username) => !/\d/.test(username),
      "사용자 이름에 숫자를 포함할 수 없습니다!"
    )
    .refine(checkUniqueUsername, "This username is already taken"),
  email: z
    .string()
    .email("유효한 이메일 주소를 입력해주세요")
    .toLowerCase()
    .refine(checkUniqueEmail,"There is an account already registered with that email"),
  password: z
    .string({
      required_error: "비밀번호를 입력하세요"
    })
    .min(PASSWORD_MIN_LENGTH, "비밀번호 확인은 최소 4자 이상이어야 합니다")
    .regex(
      PASSWORD_REGEX, PASSWORD_REGEX_ERROR
    ),
  passwordConfirm: z
    .string({
      required_error: "비밀번호 확인을 입력하세요"
    })
    .min(PASSWORD_MIN_LENGTH, "비밀번호 확인은 최소 4자 이상이어야 합니다")})
    .superRefine(({ password, passwordConfirm }, ctx) => {
      if (password !== passwordConfirm) {
        ctx.addIssue({
          code: "custom",
          message: "비밀번호가 일치하지 않습니다",
          path: ["passwordConfirm"],
        });
    }
});

export async function joinForm(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);

    const user = await db.user.create({
      data: {
        name: result.data.username,
        email: result.data.email,
        password: hashedPassword
      },
      select: {
        id: true,
      },
    });

    // console.log(user)
    const cookie = await getIronSession(cookies(), {
      cookieName: "kurly",
      password: process.env.COOKIE_PASSWORD!,
    });
    //@ts-ignore
    cookie.id = user.id;
    await cookie.save();
    redirect("/mypage");
  }
}