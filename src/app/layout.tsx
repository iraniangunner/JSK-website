import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const yekanbakh = localFont({
  src: [
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekanbakh",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jsk-co.com"),
  title: {
    template: "ژیوار صنعت کیان | %s",
    default: "ژیوار صنعت کیان | صفحه اصلی",
  },
  description: "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
  openGraph: {
    title: "ژیوار صنعت کیان | صفحه اصلی",
    description: "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${yekanbakh.variable}`}>
      <body>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
