import type { Metadata } from "next";
import { CustomError } from "@/components/customError";
import { getTranslations } from "next-intl/server";
import { NewsDetail } from "./_components/news-detail";
import NotFound from "@/app/[locale]/not-found";
import { getNewsById } from "@/utils/server/newsApi";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

// ✅ FIX: Prevent metadata errors & ensure fallback values
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "News.news",
  });

  try {
    const id = Number.parseInt(params.id, 10);
    const news = await getNewsById(id);

    return {
      title: {
        absolute: t("title", {
          title: params.locale === "fa" ? news.title : news.title_en,
        }),
      },
      description: params.locale === "fa" ? news.content : news.content_en,
      alternates: {
        canonical: `/news/${params.id}`,
      },
      openGraph: {
        title: params.locale === "fa" ? news.title : news.title_en,
        description: params.locale === "fa" ? news.content : news.content_en,
      },
    };
  } catch (error) {
    console.error("Metadata Error:", error);
    return {
      title: {
        absolute: t("fallbackTitle"),
      },
      description: t("fallbackDescription"),
      openGraph: {
        title: t("fallbackTitle"),
        description: t("fallbackDescription"),
      },
    };
  }
};

// ✅ FIX: Improved error handling & API validation
export default async function NewsPage({ params }: Props) {
  try {
    const news = await getNewsById(Number.parseInt(params.id, 10));
    return <NewsDetail news={news} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such news") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
