import { ServerClient } from "postmark";

if (!process.env.POSTMARK_API_KEY) {
  throw new Error("POSTMARK_API_KEY is not set");
}

export const postmarkClient = new ServerClient(process.env.POSTMARK_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;
  
  await postmarkClient.sendEmail({
    From: "noreply@paperfox.ai",
    To: email,
    Subject: "Verify your email address",
    HtmlBody: `
      <h1>Welcome to PaperFox!</h1>
      <p>Please verify your email address by clicking the link below:</p>
      <p><a href="${verificationUrl}">${verificationUrl}</a></p>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't create an account, you can safely ignore this email.</p>
    `,
    TextBody: `
      Welcome to PaperFox!
      
      Please verify your email address by clicking the link below:
      
      ${verificationUrl}
      
      This link will expire in 24 hours.
      
      If you didn't create an account, you can safely ignore this email.
    `,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
  
  await postmarkClient.sendEmail({
    From: "noreply@paperfox.ai",
    To: email,
    Subject: "Reset your password",
    HtmlBody: `
      <h1>Password Reset Request</h1>
      <p>You requested to reset your password. Click the link below to set a new password:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request a password reset, you can safely ignore this email.</p>
    `,
    TextBody: `
      Password Reset Request
      
      You requested to reset your password. Click the link below to set a new password:
      
      ${resetUrl}
      
      This link will expire in 1 hour.
      
      If you didn't request a password reset, you can safely ignore this email.
    `,
  });
} 