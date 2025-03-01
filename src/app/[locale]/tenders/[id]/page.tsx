import { TenderComponent } from "@/components/tender/tender";
import type { Metadata } from "next";
import { getTenderById, getTenders } from "@/utils/server/tendersApi";
import NotFound from "@/app/[locale]/not-found";
import { CustomError } from "@/components/customError";
import { getTranslations } from "next-intl/server";
import { Tender } from "@/types/tender";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export async function generateStaticParams() {
  const tenders = await getTenders();

  return tenders.data.map((p: Tender) => ({
    id: p.id.toString(),
  }));
}

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
    const tender = await getTenderById(Number.parseInt(params.id, 10));
    return <TenderComponent tender={tender.data} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such tender") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
