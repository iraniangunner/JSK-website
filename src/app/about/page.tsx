
import { Suspense } from "react";
import { AboutUsDetails } from "@/components/aboutUs";
import LoadingSpinner from "@/components/loadingSpinner";
import { AboutUsImage } from "@/components/aboutUsImage";
import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره شرکت ژیوار صنعت کیان",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "ژیوار صنعت کیان | درباره ما",
    description: "درباره شرکت ژیوار صنعت کیان",
  },
};

export default function About() {
  return (
    <>
    <PageCover title="درباره ما" bgImage="projects-pattern"/>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-10 py-20">
          <Suspense fallback={<LoadingSpinner />}>
            <AboutUsDetails />
          </Suspense>

          {/* <div className="mt-12 md:mt-0">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
          </div> */}
          <AboutUsImage />
        </div>
      </div>
    </>
  );
}
