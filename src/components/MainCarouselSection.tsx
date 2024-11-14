import MainCarousel from "./carousel/MainCarousel";
import { CustomError } from "./error";

export async function MainCarouselSection() {
  try {
    const response = await fetch(`https://jsk-co.com/api/sliders`);

    const data = await response.json();

    return <MainCarousel data={data} />;
  } catch (error) {
    return <CustomError />;
  }
}
