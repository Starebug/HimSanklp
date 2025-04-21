"use server"
import { parseWithZod } from "@conform-to/zod";
import { userSchema } from "./utils/zodSchema";
import { prisma } from "./utils/db";
import { supabase } from "./utils/supabase-client";
import { cookies } from 'next/headers';
import jwt from "jsonwebtoken"
import { redirect } from "next/navigation";
export async function loginAction(formData:FormData) {
    const email = formData.get('email')?.toString()!;
    if (!email) throw new Error('Email is required');
      const { data, error } = await supabase.auth.signInWithOtp({
          email: email,
          options: {
            emailRedirectTo: 'http://localhost:3000/auth/callback',
          },
        })
}
export async function onBoardUser(_: any, formData: FormData) {
  // const fullName = formData.get("fullName") as string
  // const age = formData.get("age") as string
  // const city = formData.get("city") as string
  // const state = formData.get("state") as string
  // const email = formData.get("email") as string
  // console.log(email);
  // try {
  //   await prisma.user.create({
  //     data: {
  //       fullname: fullName,
  //       city:city,
  //       state:state,
  //       email: email, // Replace with dynamic user email if needed
  //       image: null,
  //     },
  //   })
  //   redirect("/dashboard")
  // } catch (error) {
  //   // return { status: "error", message: "Could not create user" }
  //   redirect('/login')
  // }
  redirect('/report')
}
// export async function getCurrentUser() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get('sb-token')?.value;
//   if (!token) return redirect('/login');
//   try {
//     const user = jwt.verify(token, process.env.SUPABASE_JWT_SECRET!);
//     return user;
//   } catch {
//     return redirect('/login');
//   }
// }