"use server";
import bcrypt from "bcrypt"
import { z } from "zod";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constans";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import getSession from "@/lib/session"

const checkPasswords = ({
  password,
  passwordConfirm,
}: {
  password: string;
  passwordConfirm: string;
}) => password === passwordConfirm;

const formSchema = z
  .object({
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
      ),
    email: z
      .string()
      .email()
      // .email("유효한 이메일 주소를 입력해주세요")
      .toLowerCase(),
    password: z
      .string({
        required_error: "비밀번호를 입력하세요"
      })
      .min(PASSWORD_MIN_LENGTH),
      // .min(PASSWORD_MIN_LENGTH, "비밀번호 확인은 최소 4자 이상이어야 합니다")
      // .regex(
      //   PASSWORD_REGEX, PASSWORD_REGEX_ERROR
      // ),
    passwordConfirm: z
      .string({
        required_error: "비밀번호 확인을 입력하세요"
      })
      .min(PASSWORD_MIN_LENGTH)
      // .min(PASSWORD_MIN_LENGTH, "비밀번호 확인은 최소 4자 이상이어야 합니다")
  })
  //     .superRefine(({ password, passwordConfirm }, ctx) => {
  //       if (password !== passwordConfirm) {
  //         ctx.addIssue({
  //           code: "custom",
  //           message: "비밀번호가 일치하지 않습니다",
  //           path: ["passwordConfirm"],
  //         });
  //     }
  // })
  .superRefine(async({username}, ctx)=>{
    const user = await db.user.findUnique({
      where: {
        username
      },
      select: {
        id: true,
      },
    })
    if(user){
      ctx.addIssue({
        code:"custom",
        message:"이 사용자 이름은 이미 사용 중입니다",
        path: ["username"],
        fatal: true,
      })
      return z.NEVER;
    }
  })
  .superRefine(async({email}, ctx)=>{
    const user = await db.user.findUnique({
      where: {
        email
      },
      select: {
        id: true,
      },
    })
    if(user){
      ctx.addIssue({
        code:"custom",
        message:"이 이메일은 이미 사용 중입니다",
        path: ["email"],
        fatal: true,
      })
      return z.NEVER;
    }
  })
  .refine(checkPasswords, {//refine은 superRefine 뒤에 있기 때문에 superRefine의 오류가 해결되지 않는한 오류가 안뜬다.
    message: "Both passwords should be the same!",
    path: ["passwordConfirm"],
  })

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
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword
      },
      select: {
        id: true,
      },
    });

    const session = await getSession();
    session.id = user.id;
    await session.save();
    redirect("/mypage");
  }
}