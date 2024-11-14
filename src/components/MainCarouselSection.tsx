import { getCarouselData } from "@/utils/server/mainCarouselApi";
import MainCarousel from "./carousel/mainCarousel";
import { CustomError } from "./customError";

export async function MainCarouselSection() {
  try {
    const data = await getCarouselData();
    return <MainCarousel data={data} />;
  } catch (error) {
    return <CustomError />;
  }
}
