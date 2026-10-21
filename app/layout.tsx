import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahona Rahman",
  description:
    "Explore the research, publications, technical projects, and professional work of Ahona Rahman, a Computer Science graduate and MSc student interested in Quantum Machine Learning, Artificial Intelligence, and Software Engineering.",
  keywords: [
    "Ahona Rahman",
    "Quantum Machine Learning",
    "Quantum Computing",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineer",
    "University of Dhaka",
  ],
  generator: "v0.app",
  openGraph: {
    title:
      "Ahona Rahman | Quantum Machine Learning Researcher & Software Engineer",
    description:
      "Research, publications, and software projects at the intersection of quantum computing, AI, and engineering.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0e0f14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
