import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Search, Bell } from "lucide-react"
export default function Hero() {
    return(
        <section className="container z-50 mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-500/40 text-teal-300 px-4 py-1.5 rounded-full mb-8">
          <span className="text-xs font-medium">New</span>
          <span className="text-xs">Introducing Community Relevance</span>
          <ArrowRight className="w-3 h-3" />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight mb-6">
          The best way to increase public Accountability.
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Our app eliminates the need for complex spreadsheets, endless email threads, empowering businesses to
          achieve greater efficiency.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-900 transition-colors"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Reviews */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=32&width=32&text=${i}`}
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="bg-gray-300"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">1,200+ reviews (4.9 of 5)</p>
        </div>
      </section>

    );
}