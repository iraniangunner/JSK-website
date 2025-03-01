import { TendersTable } from "@/components/tender/tenderTable";
import { PageCover } from "@/components/pageCover";
import QueryProvider from "@/providers/query-provider";
import { getLocale, getTranslations } from "next-intl/server";

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

export default async function Tender() {
  const locale = await getLocale();
  return (
    <>
      <PageCover
        title={`${locale === "fa" ? "مناقصات" : "Tenders"}`}
      />
      <div className="my-12 mx-8">
        <QueryProvider>
          <TendersTable />
        </QueryProvider>
      </div>
    </>
  );
}
