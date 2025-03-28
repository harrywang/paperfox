"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { PasswordRequirements } from "@/components/password-requirements";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRequirements, setShowRequirements] = useState(false);

  // Check if password meets all requirements
  const requirements = [
    (p: string) => p.length >= 8,
    (p: string) => /[A-Z]/.test(p),
    (p: string) => /[a-z]/.test(p),
    (p: string) => /[0-9]/.test(p),
    (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p),
  ];

  const passwordMeetsRequirements = requirements.every(req => req(password));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!passwordMeetsRequirements) {
      setError("Password does not meet all requirements");
      setShowRequirements(true);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "An account with this email already exists") {
          throw new Error("This email is already registered. Please sign in instead.");
        } else if (data.message?.includes("verification email resent")) {
          // This is actually a success case for unverified users
          router.push("/verify-email-sent");
          return;
        }
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/verify-email-sent");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign Up
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              disabled={isLoading}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setShowRequirements(true)}
            />
            <PasswordRequirements 
              password={password} 
              visible={showRequirements} 
            />
          </div>
          {error && (
            <div className="flex flex-col gap-2 text-sm">
              <div className="message-error">
                {error}
              </div>
              {error.includes("already registered") && (
                <div className="text-muted-foreground">
                  <Link href="/signin" className="underline underline-offset-4 hover:text-primary">
                    Sign in
                  </Link>
                  {" "}or{" "}
                  <Link href="/forgot-password" className="underline underline-offset-4 hover:text-primary">
                    reset your password
                  </Link>
                </div>
              )}
            </div>
          )}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create Account
          </Button>
        </div>
      </form>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/signin" className="underline underline-offset-4 hover:text-primary">
          Sign in
        </Link>
      </p>
    </div>
  );
} 