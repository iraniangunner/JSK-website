import { TendersTable } from "@/components/tender/tenderTable";
import { PageCover } from "@/components/pageCover";
import TenderListWrapper from "@/components/tender/tender-wrapper";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Tenders" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/tenders",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default function Tender() {
  return (
    <>
      <PageCover title="فراخوان ها" bgImage="projects-pattern" />
      <div className="my-12 mx-8">
        <TenderListWrapper>
          <TendersTable />
        </TenderListWrapper>
      </div>
    </>
  );
}
