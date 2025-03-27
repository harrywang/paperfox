import Link from "next/link"
import Image from "next/image"
import { GitHubIcon } from "./ui/github-icon"
import { AuthNav } from "@/components/auth-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/paperfox-logo.svg"
                alt="Paperfox"
                width={32}
                height={32}
                className="dark:invert"
                priority
                unoptimized
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Features
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </Link>
              <a
                href="https://github.com/harrywang/paperfox"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </nav>
            <AuthNav />
          </div>
        </div>
      </div>
    </header>
  )
} 