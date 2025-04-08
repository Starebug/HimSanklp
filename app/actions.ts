import { parseWithZod } from "@conform-to/zod";
import { userSchema } from "./utils/zodSchema";
import { prisma } from "./utils/db";
import { supabase } from "./utils/supabase-client";
export async function loginAction(formData:FormData) {
    const email = formData.get('email')?.toString()!;
    if (!email) throw new Error('Email is required');
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: 'http://localhost:3000/dashboard',
        },
      })
}
export async function onBoardUser(prevState:any,formData:FormData){
    const submission = parseWithZod(formData,{
        schema: userSchema
    });
    if(submission.status!=='success') return submission.reply();
    const data = await prisma.user.create({
        
    })
}