"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { loginAction } from "@/app/actions"

export default function LoginForm() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        <div className="absolute max-w-full max-h-full inset-0 overflow-hidden">
          <Image
            src="/logback.avif"
            alt="Colorful gradient background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Be a Part of <br />
            <span className="text-6xl">Something Beautiful</span>
          </h1>
          <p className="text-lg opacity-80 mb-12">Join our community and discover amazing experiences</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black text-white p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-black text-xl font-bold">P</span>
              </div>
              <span className="font-semibold text-xl">Prestige</span>
            </div>

            <h2 className="text-4xl font-bold mb-2">Login</h2>
            <p className="text-gray-400">Enter your email to continue</p>
          </div>

          <form action={loginAction} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="w-full bg-zinc-900 border-zinc-800 text-white"
              />
            </div>

            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-6">Send Magic Link</Button>
            <p className="text-center text-gray-400">
              Not a member?{" "}
              <Link href="/signup" className="text-amber-500 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
