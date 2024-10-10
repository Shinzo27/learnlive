"use client"
import { ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GraduationCap, BookOpen, Settings, Bookmark } from "lucide-react"
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100"
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 p-4">
        <div className="flex items-center space-x-2 mb-6">
          <GraduationCap className="h-8 w-8 text-blue-500" />
          <span className="text-2xl font-bold">LearnLive</span>
        </div>
        <nav className="space-y-2">
          <Link href="/home" passHref>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                pathname === '/dashboard/home' ? 'bg-blue-600 text-white' : 'text-white '
              }`}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              My Courses
            </Button>
          </Link>
          <Link href="/bookmarks" passHref>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                pathname === '/dashboard/bookmarks' ? 'bg-blue-600 text-white' : 'text-white '
              }`}
            >
              <Bookmark className="mr-2 h-4 w-4" />
              Bookmarks
            </Button>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}