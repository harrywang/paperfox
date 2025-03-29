import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SetupForm from "./SetupForm";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function SetupPage() {
  // Check if admin user exists
  const adminUser = await prisma.user.findFirst({
    where: {
      role: "ADMIN"
    }
  });
  
  // If admin user exists, redirect to home
  if (adminUser) {
    redirect("/");
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 md:py-20">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Initial Setup
                </h1>
                <p className="text-sm text-muted-foreground">
                  Create your admin account to get started
                </p>
              </div>
              <SetupForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 