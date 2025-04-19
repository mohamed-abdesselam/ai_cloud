// import { Footer, Navbar } from "@/components";
import { ThemeProvider } from "@/components/theme";
import { Toaster } from "@/components/ui/sonner";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "./globals.css";
// import { ClerkProvider } from '@clerk/nextjs';
// import { dark } from '@clerk/themes';
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
          font.className
        )}
      >
        <Toaster richColors={true} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          {/* <ClerkProvider appearance={{ baseTheme: dark }}> */}
          {children}
          {/* </ClerkProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
};
