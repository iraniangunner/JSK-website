import MainCarousel from "@/components/carousel/MainCarousel";
import dataSlider from "../data.json";
import { getAllProjects } from "@/utils/server-utils/getAllProjects";
import ServicesSection from "../components/servicesSection";
import { ProjectsSectionUI } from "@/components/projectsSectionUI";
import { ProjectSection } from "@/components/projectSection";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <MainCarousel data={dataSlider} />
      <ServicesSection />

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectSection />
      </Suspense>
    </>
  );
}
