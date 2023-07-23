import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Http status code",
  description: "It's my project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* footer */}
        <footer
          className={clsx(
            "bg-green-100",
            "flex",
            "justify-center",
            "items-center",
            "p-10",
            "md:text-lg",
            "md:flex-row",
            "flex-col"
          )}
        >
          <b className={clsx("pr-2")}>Report a bug </b>
          <a
            href="mailto:yshin.dev@gmail.com"
            className={clsx("text-blue-300")}
          >
            yshin.dev@gmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}
