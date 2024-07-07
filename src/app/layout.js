import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description:
    "Created IMDb Webapp clone using Next.js framework as full-stack Project",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[1440px] m-auto">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
