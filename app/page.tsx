import MainCarousel from "@/components/carousel/MainCarousel";
import dataSlider from "../data.json";
import ServicesSection from "../components/servicesSection";
import { ProjectSection } from "@/components/projectSection";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";

export default async function Home() {
  return (
    <>
      <MainCarousel data={dataSlider} />
      <ServicesSection />
      <section
        className="relative min-h-[500px] bg-section-2-pattern bg-cover overflow-hidden 
        bg-no-repeat bg-center before:content-[''] before:absolute before:left-0 before:top-0
        before:w-full before:h-full before:opacity-[0.9] before:z-[0] before:bg-[#042038]"
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectSection />
        </Suspense>
      </section>
    </>
  );
}
