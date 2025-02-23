import { TenderComponent } from "@/components/tender/tender";
import type { Metadata } from "next";
import { getTenderById } from "@/utils/server/tendersApi";
import NotFound from "@/app/[locale]/not-found";
import { CustomError } from "@/components/customError";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    id: number;
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
    const tender = await getTenderById(params.id);
    return {
      title: {
        absolute: t("title", { title: tender.data.title }),
      },
      description: tender.text,
      alternates: {
        canonical: `/tenders/${params.id}`,
      },
      openGraph: {
        title: t("title", { title: tender.data.title }),
        description: tender.data.text,
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

export default async function TenderPage({ params }: Props) {
  try {
    const tender = await getTenderById(params.id);
    return <TenderComponent tender={tender.data} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such project") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
