import { SingleService } from "@/components/service/singleService";
import { getServicesBySlug } from "@/utils/server-utils/getSingleService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const service = await getServicesBySlug(params.slug);

  if (!service) {
    return;
  }

  return {
    title: `خدمات / ${service.title}`,
    description: service.overview,
    openGraph: {
      title: `خدمات / ${service.title}`,
      description: service.overview,
      images: [
        {
          url: "https://image.tmdb.org/t/p/w500" + service.backdrop_path,
        },
      ],
    },
  };
};

export default async function ServicePage({ params }: Props) {
  const service = await getServicesBySlug(params.slug);

  if (!service) {
    notFound();
  }
  return <SingleService service={service} />;
}
