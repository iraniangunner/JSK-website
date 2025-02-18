import ServicesSection from "../../components/servicesSection";
import { ProjectSection } from "@/components/projectSection";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import { MainCarouselSection } from "@/components/MainCarouselSection";

export default async function Home() {
  // const t = await getTranslations('HomePage');
  return (
    <>
      {/* <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div> */}
      <Suspense fallback={<LoadingSpinner />}>
        <MainCarouselSection />
      </Suspense>

      <ServicesSection />
      <section className="relative min-h-[500px] overflow-hidden flex justify-center items-center">
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectSection />
        </Suspense>
      </section>
    </>
  );
}
