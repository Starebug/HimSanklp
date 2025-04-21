"use client"
import { useEffect } from "react";
import { supabase } from "../utils/supabase-client";
import { useRouter } from "next/router";
export default function DashboardPage() {
    const router = useRouter();
      useEffect(() => {
              const fetchUser = async () => {
                  const { data: { user } } = await supabase.auth.getUser();
                  if(!user) router.push('/login');
              };
              fetchUser();
          }, []);
    return(
        <>
        <h1>Hi</h1>
        </>
    )
}