import { PageCover } from "@/components/pageCover";
import { ContractorForm } from "./_components/cooperation-form";
import { getLocale, getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "CompanyCooperation" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/hiring/cooperation",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function ContractorPage() {
  const locale = await getLocale();
  return (
    <div>
      <PageCover
        title={`${
          locale === "fa"
            ? "همکاری شرکت ها"
            : "Company Cooperation"
        }`}
        bgImage="projects-pattern"
      />
      <ContractorForm />
    </div>
  );
}
