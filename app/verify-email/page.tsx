"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("No verification token provided");
        return;
      }

      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}`, {
          method: "GET",
        });

        const data = await response.json();

        if (!response.ok) {
          setStatus("error");
          setMessage(data.error || "Failed to verify email");
        } else {
          setStatus("success");
          setMessage("Email verified successfully");
          setTimeout(() => {
            router.push("/signin");
          }, 3000);
        }
      } catch {
        setStatus("error");
        setMessage("Failed to verify email. Please try again.");
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.mail className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Email Verification
        </h1>
      </div>

      <div className="grid gap-6">
        {status === "loading" && (
          <div className="flex items-center justify-center">
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            Verifying your email...
          </div>
        )}

        {status === "success" && (
          <div className="space-y-4 flex flex-col items-center">
            <div className="message-success text-center">
              {message}
            </div>
            <Button asChild>
              <Link href="/signin">
                Continue to Sign In
              </Link>
            </Button>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-4 flex flex-col items-center">
            <div className="message-error text-center">
              {message}
            </div>
            <Button asChild variant="outline">
              <Link href="/signup">
                Back to Sign Up
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 md:py-20">
            <Suspense fallback={
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                  <Icons.spinner className="mx-auto h-6 w-6 animate-spin" />
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Loading...
                  </h1>
                </div>
              </div>
            }>
              <VerifyEmailContent />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 