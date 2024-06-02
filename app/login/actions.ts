"use server"
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constans";
import {z} from "zod";
// import { redirect } from 'next/navigation';

const formSchema = z.object({
    username: z
        .string()
        .min(3)
        .max(20)
        .regex(/^[a-zA-Z0-9]+$/, "유효한 사용자 이름을 입력하세요")
        .toLowerCase(),
    password: z
        .string({
            required_error: "비밀번호를 입력하세요"
        })
        .min(PASSWORD_MIN_LENGTH)
        .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
})

export async function loginForm(prevState: any, formData: FormData) {
    const data = {
        username:formData.get("username"),
        password: formData.get("password")
    }
    // redirect("/");
    // console.log(formData.get("name"), formData.get("password"));
    const result = formSchema.safeParse(data);
    if(!result.success){
        console.log(result.error.flatten);
        return result.error.flatten();
    } else {
        console.log(result.data)
    }
}
