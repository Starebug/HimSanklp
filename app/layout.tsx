import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CivicPlus",
  description:
    "Our app enhances transpareny between civilians and the government",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Layout>{children}</Layout>
    </body>
    </html>
  )
}



import './globals.css'
import Layout from "./components/layout"
