import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MessageCircle } from "lucide-react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Web365 Nigeria | Website Design & SEO Company in Nigeria",
  description:
    "Web365 Nigeria provides website design, ecommerce development, SEO, PPC management, web hosting and software development services.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}

        <a
          href="https://wa.me/2348142746695"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed left-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </body>
    </html>
  );
}