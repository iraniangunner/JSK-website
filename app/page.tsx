import MainCarousel from "@/components/carousel/MainCarousel";
import dataSlider from "../data.json";
import Section1 from "../components/section1";


export default function Home() {
  return (
    <>
      <MainCarousel data={dataSlider}/>
      <Section1 />
    </>
  );
}
