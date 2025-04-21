'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const setUpSessionAndAccount = async () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      const access_token = hashParams.get("access_token")
      const refresh_token = hashParams.get("refresh_token")

      if (access_token && refresh_token) {
        const { data, error } = await supabase.auth.setSession({ access_token, refresh_token })

        if (error) {
          console.error("Error setting session:", error)
        } else {
          const user = data.session?.user!
            const response = await fetch('/api/auth/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId: user.id,
              email: user.email,
              access_token,
              refresh_token,
            }),
          });

          const result = await response.json();
          if (result.message === 'User processed successfully') {
            fetch('/api/auth/cookie', {
              method: 'POST',
              body: JSON.stringify({ access_token }),
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            router.replace("/dashboard");
          } else {
            console.log('Error processing user:', result.error);
          }
        }
      } else {
        console.log('Tokens not found');
      }
    }

    setUpSessionAndAccount();
  }, [supabase, router])

  return <p>Setting up your session...</p>
}
