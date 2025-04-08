import Link from "next/link"
export default function Footer() {
    return(
        <div className="fixed bottom-4 right-4 scale-75 md:scale-100 flex flex-col gap-2">
          <Link href="#" className="bg-white w-full text-black px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Get template
          </Link>
          <Link
            href="#"
            className="bg-zinc-800 text-white px-4 w-full py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            Made in Framer
          </Link>
        </div>
    )
}