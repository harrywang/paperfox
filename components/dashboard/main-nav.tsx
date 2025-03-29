import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center", className)} {...props}>
      <div className="flex space-x-4 lg:space-x-6">
        <Link
          href="/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap"
        >
          Overview
        </Link>
        <Link
          href="/dashboard/customers"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
        >
          Customers
        </Link>
        <Link
          href="/dashboard/products"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
        >
          Products
        </Link>
        <Link
          href="/dashboard/settings"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
        >
          Settings
        </Link>
      </div>
    </nav>
  )
} 