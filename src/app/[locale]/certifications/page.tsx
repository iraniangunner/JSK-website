import { PageCover } from "@/components/pageCover";
import { CertificationsCarousel } from "@/components/carousel/CertificationCarousel";
import { getLocale, getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Certifications" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/certifications",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function Certifications() {
  const locale = await getLocale();
  return (
    <>
     <PageCover
             title={`${
               locale === "fa"
                 ? "گواهینامه ها و جوایز"
                 : "Certifications"
             }`}
             bgImage="projects-pattern"
           />
      <div className="flex justify-center my-16">
        <div className="w-[80%] pt-[30px]">
          <CertificationsCarousel />
        </div>
      </div>
    </>
  );
}
