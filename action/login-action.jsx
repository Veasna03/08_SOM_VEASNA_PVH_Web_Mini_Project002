"use server"
import { signIn } from "../auth"
export const LoginAction= async (formData) =>{
     const email =formData.get("email");
     const password=formData.get("password");

     await signIn("credentials",{
        email,
        password,
       redirect: false
     })
}