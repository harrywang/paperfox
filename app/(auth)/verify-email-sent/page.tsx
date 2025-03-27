"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function VerifyEmailSentPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">

        <h1 className="text-2xl font-semibold tracking-tight">
          Check your email
        </h1>
        <p className="text-sm text-muted-foreground">
          We've sent you a verification link. Please check your email to verify your account.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <Button asChild>
          <Link href="/signin">
            Return to Sign In
          </Link>
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Didn't receive an email?{" "}
          <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
            Try again
          </Link>
        </p>
      </div>
    </div>
  );
} 