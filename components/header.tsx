"use client";

import Link from "next/link"
import Image from "next/image"
import { GitHubIcon } from "./ui/github-icon"
import { AuthNav } from "@/components/auth-nav"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/paperfox-logo.svg"
                alt="Paperfox"
                width={28}
                height={28}
                className="dark:invert"
                priority
                unoptimized
              />
              <span className="font-semibold text-base">PaperFox</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/harrywang/paperfox"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <AuthNav />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50"
              >
                {session ? (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || ""} alt={session.user?.email || ""} />
                    <AvatarFallback>{session.user?.email?.[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+1px)] bg-white border-b shadow-lg md:hidden">
            <div className="container mx-auto px-4">
              <div className="py-4">
                <AuthNav />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 