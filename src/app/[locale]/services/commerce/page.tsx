import React from "react";
import { PageCover } from "@/components/pageCover";
// import { AccordionItem } from "@/components/accordion/accordionItem";
import dynamic from "next/dynamic";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { getCommerceData } from "@/utils/client/services-data";

type Props = {
  params: { locale: string };
};

const AccordionItem = dynamic(
  () =>
    import("@/components/accordion/accordionItem").then(
      (mod) => mod.AccordionItem
    ),
  {
    //loading: () => <p>Loading...</p>,
    //ssr: false, // Ensure it's only loaded on the client side
  }
);

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Commerce" });

  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    alternates: {
      canonical: "/services/commerce",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

const images = [
  { src: "service-1.jpeg", alt: "service-1" },
  { src: "service-2.jpeg", alt: "service-2" },
  { src: "service-3.jpeg", alt: "service-3" },
  { src: "service-4.jpeg", alt: "service-4" },
  { src: "service-5.jpeg", alt: "service-5" },
];

export default async function CommercialDepartment() {
  const locale = await getLocale();
  const t = await getTranslations();
  const t1 = await getTranslations("Commerce");
  const services = getCommerceData(t);

  return (
    <div className="mx-auto">
      <PageCover
        title={`${
          locale === "fa"
            ? "بازرگانی و تامین اقلام پروژه"
            : "Commerce & Project Supply"
        }`}
      />

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-16">
            <p className="text-lg xl:text-xl text-justify text-gray-600 lg:w-[70%]">
              {t1("text")}
            </p>
          </div>

          <div className="mb-16 lg:mb-24 xl:mb-32 last:mb-0">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <AccordionItem data={services} />
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                        index === 4 ? "col-span-2" : ""
                      }`}
                    >
                      <Image
                        src={"/images/" + image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
