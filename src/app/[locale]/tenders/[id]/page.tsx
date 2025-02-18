import { TenderComponent } from "@/components/tender/tender";
import { Metadata } from "next";
import { getTenderById } from "@/utils/server/tendersApi";
import NotFound from "@/app/[locale]/not-found";
import { CustomError } from "@/components/customError";

type Props = {
  params: { id: number };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  try {
    const tender = await getTenderById(params.id);
    return {
      title: {
        absolute: `فراخوان ها | فراخوان ${tender.title}`,
      },
      description: tender.text,
      alternates: {
        canonical: `/tenders/${params.id}`,
      },
      openGraph: {
        title: `فراخوان ها | فراخوان ${tender.title}`,
        description: tender.text,
      },
    };
  } catch (error) {
    return {
      title: {
        absolute: "ژیوار صنعت کیان",
      },
      description:
        "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
      openGraph: {
        title: "ژیوار صنعت کیان",
        description:
          "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
      },
    };
  }
};
export default async function TenderPage({ params }: Props) {
  try {
    const tender = await getTenderById(params.id);
    return <TenderComponent tender={tender} />;
  } catch (error) {
    if (error instanceof Error && error.message === "No such project") {
      return <NotFound />;
    }
    return <CustomError />;
  }
}
