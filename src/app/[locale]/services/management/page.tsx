import React from "react";
import { PageCover } from "@/components/pageCover";
import dynamic from "next/dynamic";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { getManagementData } from "@/utils/client/services-data";

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
    // ssr: false, // Ensure it's only loaded on the client side
  }
);

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Management" });

  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    alternates: {
      canonical: "/services/management",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

const images = [
  { src: "management-1.jpg", alt: "management-1" },
  { src: "management-2.jpg", alt: "management-2" },
  { src: "management-3.jpg", alt: "management-3" },
  { src: "management-4.jpg", alt: "management-4" },
  { src: "management-5.jpg", alt: "management-5" },
];

export default async function ManagementDepartment() {
  const locale = await getLocale();
  const t = await getTranslations();
  const t1 = await getTranslations("Management");
  const services = getManagementData(t.raw);
  return (
    <div className="mx-auto">
      <PageCover
        title={`${
          locale === "fa"
            ? "مدیریت پروژه های صنعتی و معدنی"
            : "Industrial & Mining Management"
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
