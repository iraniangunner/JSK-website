import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const iranSans = localFont({
  src: "../../public/fonts/IRANSansX-Regular.woff",
});

export const metadata: Metadata = {
  title: "ژیوار صنعت کیان | صفحه اصلی",
  description: "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
  openGraph: {
    title: "ژیوار صنعت کیان | صفحه اصلی",
    description: "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
    type: "website",
    images: [
      {
        url: "/images/" + "jsk.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSans.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
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
