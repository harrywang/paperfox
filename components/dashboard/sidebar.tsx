'use client'

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  BarChart,
  FileText,
  Bell,
  X
} from "lucide-react"

export type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: () => void;
};

export function Sidebar({ className, onClose, ...props }: SidebarProps) {
  return (
    <div className={cn("h-full border-r bg-background", className)} {...props}>
      <ScrollArea className="h-full">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="mb-4 flex items-center justify-between px-4">
              <h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
              {onClose && (
                <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="space-y-1">
              <Button variant="secondary" className="w-full justify-start" asChild>
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/dashboard/customers">
                  <Users className="mr-2 h-4 w-4" />
                  Customers
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/dashboard/products">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Products
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/dashboard/analytics">
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/dashboard/reports">
                  <FileText className="mr-2 h-4 w-4" />
                  Reports
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/dashboard/notifications">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Settings</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
} 