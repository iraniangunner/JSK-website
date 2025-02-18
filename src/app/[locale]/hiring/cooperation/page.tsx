import { PageCover } from "@/components/pageCover";
import { ContractorForm } from "./_components/cooperation-form";
import { getTranslations } from "next-intl/server";

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

export default function ContractorPage() {
  return (
    <div>
      <PageCover title="همکاری شرکت ها" bgImage="projects-pattern" />
      <ContractorForm />
    </div>
  );
}
