"use server"
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constans";
import {z} from "zod";
// import { redirect } from 'next/navigation';
import db from "@/lib/db";
import bcrypt from "bcrypt"
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const checkUsername = async (username:string) => {
    const user = await db.user.findUnique({
        where: {
            username: username,
        },
        select: {
            id: true,
        },
    });
    return Boolean(user);
}

const formSchema = z.object({
    username: z
        .string()
        .min(3)
        .max(20)
        .regex(/^[a-zA-Z0-9]+$/, "유효한 사용자 이름을 입력하세요")
        .toLowerCase()
        .refine(checkUsername,"사용자가 존재하지 않습니다"),
    password: z
        .string({
            required_error: "비밀번호를 입력하세요"
        })
        // .min(PASSWORD_MIN_LENGTH)
        // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
})

export async function loginForm(prevState: any, formData: FormData) {
    const data = {
        username:formData.get("username"),
        password: formData.get("password")
    }
    // redirect("/");
    // console.log(formData.get("name"), formData.get("password"));
    const result = await formSchema.spa(data);
    if(!result.success){
        return result.error.flatten();
    } else {
        const user = await db.user.findUnique({
            where: {
                username: result.data.username,
            },
            select: {
                password: true
            }
        });
        const ok = await bcrypt.compare(
            result.data.password, 
            user!.password ?? "aaaa"
        );
        if(ok){
            const session = await getSession();
            session.id = user!.id;
            redirect("/");
        } else {
            return {
                fieldErrors: {
                    password: ["잘못된 비밀번호입니다."],
                    username: [],
                },
            }
        }
    }
}
