import MainCarousel from "@/components/carousel/MainCarousel";
import sliderData from "../data.json";
import ServicesSection from "../components/servicesSection";
import { ProjectSection } from "@/components/projectSection";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";

export default async function Home() {
  return (
    <>
      <MainCarousel data={sliderData.slides} />
      <ServicesSection />
      <section className="relative min-h-[500px] overflow-hidden flex justify-center items-center">
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectSection />
        </Suspense>
      </section>
    </>
  );
}
