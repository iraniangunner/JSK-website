import MainCarousel from "@/components/carousel/MainCarousel";
import dataSlider from "../data.json";
import ServicesSection from "../components/servicesSection";
import ProjectsSection from "@/components/projectsSection";


export default function Home() {
  return (
    <>
      <MainCarousel data={dataSlider}/>
      <ServicesSection />
      <ProjectsSection/>
    </>
  );
}
