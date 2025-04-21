"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './supabase-client';

// export function useAccountVerificationRedirect({
//   redirectIfNotVerified = '/onBoarding',
//   redirectIfNoUser = '/login',
// }: {
//   redirectIfNotVerified?: string;
//   redirectIfNoUser?: string;
// } = {}) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [isVerified, setIsVerified] = useState<boolean | null>(null);

//   useEffect(() => {
//     const checkVerification = async () => {
//       setLoading(true);

//       const { data: { user }, error } = await supabase.auth.getUser();

//       if (error || !user) {
//         router.replace(redirectIfNoUser);
//         return;
//       }

//       const { data: account, error: accountError } = await supabase
//         .from('Account')
//         .select('accountVerified')
//         .eq('userId', user.id)
//         .maybeSingle();

//       if (accountError || !account) {
//         setIsVerified(false);
//         router.replace(redirectIfNotVerified);
//       } else if (!account.accountVerified) {
//         setIsVerified(false);
//         router.replace(redirectIfNotVerified);
//       } else {
//         setIsVerified(true);
//       }

//       setLoading(false);
//     };

//     checkVerification();
//   }, [router, redirectIfNotVerified, redirectIfNoUser]);

//   return { loading, isVerified };
// }
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { User } from "@supabase/supabase-js"

export function useSupabaseUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClientComponentClient()

    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error) {
        console.error("Failed to fetch user:", error)
      } else {
        setUser(data.user)
      }
      setLoading(false)
    }

    getUser()
  }, [])

  return { user, loading }
}