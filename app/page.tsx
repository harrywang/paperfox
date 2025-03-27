import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 md:py-20">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Welcome to PaperFox
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your personal paper management system
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
