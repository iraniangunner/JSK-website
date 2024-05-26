import MainCarousel from "@/components/carousel/MainCarousel";
import Hero from "../components/hero";
import dataSlider from "../data.json";


export default function Home() {
  return (
    <>
      <MainCarousel data={dataSlider}/>
      <Hero />
    </>
  );
}
