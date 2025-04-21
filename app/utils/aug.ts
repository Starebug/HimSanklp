// // lib/auth.ts
// import { cookies } from "next/headers";
// import {supabase} from "./supabase-server"
// import { redirect } from "next/navigation";

// export async function getCurrentUser() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("sb-token")?.value;
//   if (!token) return redirect("/login");

//   const { data, error } = await supabase.auth.getUser();
//   if (error || !data.user) return redirect("/login");

//   return data.user;
// }
