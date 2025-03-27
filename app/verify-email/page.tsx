"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("Invalid verification link");
        return;
      }

      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}`);
        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage("Email verified successfully! You can now sign in.");
          setTimeout(() => {
            router.push("/signin");
          }, 3000);
        } else {
          setStatus("error");
          setMessage(data.error || "Failed to verify email");
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred while verifying your email");
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 md:py-20">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Email Verification
                </h1>
                <p className="text-sm text-muted-foreground">
                  {status === "loading" && "Verifying your email..."}
                  {status === "success" && message}
                  {status === "error" && message}
                </p>
              </div>
              {status === "loading" && (
                <div className="flex justify-center">
                  <Icons.spinner className="h-6 w-6 animate-spin" />
                </div>
              )}
              {status === "error" && (
                <div className="flex flex-col space-y-4">
                  <Button asChild>
                    <Link href="/signin">
                      Return to Sign In
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Need help?{" "}
                    <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
                      Try signing up again
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 