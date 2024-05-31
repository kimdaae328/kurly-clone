"use server";
import { z } from "zod";

// const usernameSchema = z.string().min(5).max(10);
const formSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(10),
  passwordConfirm: z.string().min(10),
});

export async function joinForm(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };
  // console.log(data);
  // formSchema.parse(data);
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}