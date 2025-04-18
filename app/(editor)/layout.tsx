import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./../globals.css"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Editor",
  description: "Generated by MOHAMED ABDESSELAM",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
    </div>
  )
}
