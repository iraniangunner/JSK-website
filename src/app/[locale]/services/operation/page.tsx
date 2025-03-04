import React from "react";
import { PageCover } from "@/components/pageCover";
import { AccordionItem } from "@/components/accordion/accordionItem";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { getOperationData } from "@/utils/client/services-data";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Operation" });

  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    alternates: {
      canonical: "/services/operation",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

const images = [
  { src: "operation-1.jpg", alt: "operation-1" },
  { src: "operation-2.jpg", alt: "operation-2" },
  { src: "operation-3.jpg", alt: "operation-3" },
  { src: "operation-5.jpg", alt: "operation-5" },
  { src: "operation-4.jpg", alt: "operation-4" },
];

export default async function OperationDepartment() {
  const locale = await getLocale();
  const t = await getTranslations();
  const t1 = await getTranslations("Operation");
  const services = getOperationData(t.raw);
  return (
    <div className="mx-auto">
      <PageCover
        title={`${
          locale === "fa"
            ? "بهره برداری پروژه های صنعتی و معدنی"
            : "Industrial & Mining Operations"
        }`}
      />

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex justify-center items-center">
            <div className="lg:w-[70%]">
              <p className="text-lg xl:text-xl text-justify text-gray-600">
                {t1("text")}
              </p>
            </div>
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
