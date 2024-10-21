import MainCarousel from "./carousel/MainCarousel";
import { CgDanger } from "react-icons/cg";

export async function MainCarouselSection() {
  try {
    const response = await fetch(`https://jsk-co.com/api/sliders`);

    const data = await response.json();

    return <MainCarousel data={data} />;
  } catch (error) {
    return (
      <div className="mx-auto max-w-screen-sm text-center z-[1] relative">
        <div className="mb-4 text-7xl flex justify-center items-center font-extrabold tracking-tight lg:text-9xl">
          <CgDanger color="red" />
        </div>
        <p className="mb-4 text-lg font-light">
          مشکلی پیش آمده دوباره تلاش کنید
        </p>
      </div>
    );
  }
}
