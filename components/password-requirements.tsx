import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
}

const requirements: PasswordRequirement[] = [
  {
    label: "At least 8 characters",
    test: (password) => password.length >= 8,
  },
  {
    label: "Contains at least one uppercase letter",
    test: (password) => /[A-Z]/.test(password),
  },
  {
    label: "Contains at least one lowercase letter",
    test: (password) => /[a-z]/.test(password),
  },
  {
    label: "Contains at least one number",
    test: (password) => /[0-9]/.test(password),
  },
  {
    label: "Contains at least one special character",
    test: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
];

interface PasswordRequirementsProps {
  password: string;
  visible: boolean;
  className?: string;
}

export function PasswordRequirements({ password, visible, className }: PasswordRequirementsProps) {
  if (!visible) return null;

  return (
    <div className={cn("space-y-1.5 text-sm", className)}>
      {requirements.map((requirement) => {
        const isValid = requirement.test(password);
        return (
          <div
            key={requirement.label}
            className={cn(
              "flex items-center gap-2",
              isValid ? "message-success" : "text-gray-500"
            )}
          >
            {isValid ? (
              <Check className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
            <span>{requirement.label}</span>
          </div>
        );
      })}
    </div>
  );
} 