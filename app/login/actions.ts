"use server"
// import { redirect } from 'next/navigation';

export async function handleForm(prevState: any, formData: FormData) {
    console.log(prevState);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // redirect("/");
    // console.log(formData.get("name"), formData.get("password"));
    return {
        errors: ["wrong password", "password too short"],
    }
}
