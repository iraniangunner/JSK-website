import { TenderComponent } from "@/components/tender/tender";
import type { Metadata } from "next";
import { getTenderById } from "@/utils/server/tendersApi";
import NotFound from "@/app/[locale]/not-found";
import { CustomError } from "@/components/customError";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Tenders.tender",
  });

  try {
    const id = Number.parseInt(params.id, 10);
    const tender = await getTenderById(id);
    return {
      title: {
        absolute: t("title", {
          title:
            params.locale === "fa" ? tender.data?.title : tender.data?.title_en,
        }),
      },
      description:
        params.locale === "fa" ? tender.data?.text : tender.data?.text_en,
      alternates: {
        canonical: `/tenders/${params.id}`,
      },
      openGraph: {
        title: t("title", {
          title:
            params.locale === "fa" ? tender.data?.title : tender.data?.title_en,
        }),
        description:
          params.locale === "fa" ? tender.data?.text : tender.data?.text_en,
      },
    };
  } catch (error) {
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

// ✅ FIX: Correct `params` typing & improve error handling
export default async function TenderPage({ params }: Props) {
  try {
    const tender = await getTenderById(Number.parseInt(params.id, 10));
    return <TenderComponent tender={tender.data} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such tender") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
