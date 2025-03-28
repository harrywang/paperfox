import { postmarkClient } from "@/lib/postmark";

export async function sendPasswordResetEmail(email: string, token: string) {
  try {
    if (!process.env.NEXT_PUBLIC_APP_URL) {
      throw new Error("NEXT_PUBLIC_APP_URL is not set");
    }

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
    console.log("Sending password reset email to:", email);
    console.log("Reset URL:", resetUrl);

    const result = await postmarkClient.sendEmail({
      From: "noreply@paperfox.app",
      To: email,
      Subject: "Reset Your Password",
      TextBody: `Click the link below to reset your password:\n\n${resetUrl}\n\nThis link will expire in 1 hour.`,
      HtmlBody: `
        <h1>Reset Your Password</h1>
        <p>Click the button below to reset your password:</p>
        <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #0070f3; color: white; text-decoration: none; border-radius: 4px;">
          Reset Password
        </a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
      `,
    });

    console.log("Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw error;
  }
} 