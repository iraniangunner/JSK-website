import { PageCover } from "@/components/pageCover";
import { getLocale, getTranslations } from "next-intl/server";
import QueryProvider from "@/providers/query-provider";
import NewsSection from "./_components/news-grid";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "News" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/news",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function JobsOpportunityPage() {
  const locale = await getLocale();

  return (
    <div>
      <PageCover
        title={`${locale === "fa" ? "اخبار و مقالات" : "News"}`}
      />
      <div className="container mx-auto px-4 py-12">
        <QueryProvider>
          <NewsSection />
        </QueryProvider>
      </div>
    </div>
  );
}
