import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const font = Poppins({  weight: ["100", "200" ,"300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Todo App",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:title" content="Your Site Title" />
          <meta property="og:description" content="Your site description." />
          <meta property="og:image" content="https://example.com/path/to/image.jpg" />
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
