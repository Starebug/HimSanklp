import LoginForm from "@/app/components/loginForm"
import { createClient } from "@/app/utils/supabase-server";
import { redirect } from "next/navigation";
export default async function LoginPage() {
  return (
    <>
      <LoginForm/>
    </>
  )
}
