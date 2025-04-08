import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Search, Bell } from "lucide-react"
import { RainbowButton } from "@/components/magicui/rainbow-button"
export default function Navbar() {
    return(
            <>
                <header className="container mx-auto px-4 py-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-xl font-bold">⬦</span>
                    </div>
                    <span className="font-semibold text-lg">Prestige</span>
                  </div>
                  <nav className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Menu
                    </Link>
                    <div className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                      <Link href="#">Pages</Link>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Integrations
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </nav>
                <Link href="/onBoarding">
                  <RainbowButton
                    className="hover:bg-zinc-700  text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Login/Signup
                  </RainbowButton>
                  </Link>
                </header>
            </>
    );
}