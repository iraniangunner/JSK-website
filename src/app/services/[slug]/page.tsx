import { SingleService } from "@/components/service/singleService";
import { Metadata } from "next";
import projectsData from "../../../../data.json";

// type Props = {
//   params: { slug: string };
// };

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata | undefined> => {
//   const service = await getServicesBySlug(params.slug);

//   if (!service) {
//     return;
//   }

//   return {
//     title: `${service.title} | خدمات`,
//     description: service.overview,
//     openGraph: {
//       title: `${service.title} | خدمات`,
//       description: service.overview,
//       images: [
//         {
//           url: "https://image.tmdb.org/t/p/w500" + service.backdrop_path,
//         },
//       ],
//     },
//   };
// };

// export default async function ServicePage({ params }: Props) {
//   const service = await getServicesBySlug(params.slug);

//   if (!service) {
//     notFound();
//   }
//   return <SingleService service={service} />;
// }

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const index =
    params.slug === "commerce" ? 0 : params.slug === "operation" ? 1 : 2;
  const service = projectsData.services[index];

  return {
    title: {
      absolute: `خدمات | ${service.title}`,
    },
    description: service.description,
    alternates: {
      canonical: `/services/${service.title}`,
    },
    // robots: {
    //   index: false,
    //   follow: true,
    //   nocache: true,
    // },
    openGraph: {
      title: `خدمات | ${service.title}`,
      description: service.description,
      // images: [
      //   {
      //     url: "https://image.tmdb.org/t/p/w500" + service.image,
      //   },
      // ],
    },
  };
};

export default function ProjectPage({ params }: Props) {
  const index =
    params.slug === "commerce" ? 0 : params.slug === "operation" ? 1 : 2;
  const service = projectsData.services[index];

  return <SingleService service={service} />;
}
