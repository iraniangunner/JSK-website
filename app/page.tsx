import MainCarousel from "@/components/carousel/MainCarousel";
import dataSlider from "../data.json";
import ServicesSection from "../components/servicesSection";


export default function Home() {
  return (
    <>
      <MainCarousel data={dataSlider}/>
      <ServicesSection />
    </>
  );
}
