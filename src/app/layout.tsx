import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "~/components/layout/Navbar";
import { Footer } from "~/components/layout/Footer";
import { StructuredData } from "~/components/seo/StructuredData";
import { geistMono, geistSans } from "~/constants/metadata.data";
import { TawkTo } from "~/components/third-party/TawkTo";
import { ThemeProvider } from "~/components/theme/ThemeProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
        </ThemeProvider>
      </body>
      <TawkTo />
    </html>
  );
}
