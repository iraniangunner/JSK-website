import MainCarousel from "@/components/carousel/MainCarousel";
import dataSlider from "../data.json";
import { getAllProjects } from "@/utils/projects/getAllProjects";
import ServicesSection from "../components/servicesSection";
import { ProjectsSection } from "@/components/projectsSection";

export default async function Home() {
  const projects = await getAllProjects();
  const sliderProjects = projects.results.slice(0, 6);
  return (
    <>
      <MainCarousel data={dataSlider} />
      <ServicesSection />
      <ProjectsSection projects={sliderProjects} />
    </>
  );
}
