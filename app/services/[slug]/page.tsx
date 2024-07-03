import { SingleProject } from "@/components/project/singleproject/singleProject";
import { SingleService } from "@/components/service/singleService";
import { getServicesBySlug } from "@/utils/server-utils/getSingleService";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import Error from "./error";

type Props = {
  params: { slug: string };
};

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata | undefined> => {
//   const project = await getProjectById(params.id);

//   if (!project) {
//     return;
//   }

//   return {
//     title: `پروژه ${project.title}`,
//     description: project.overview,
//     openGraph: {
//       title: `پروژه ${project.title}`,
//       description: project.overview,
//       images: [
//         {
//           url: "https://image.tmdb.org/t/p/w500" + project.backdrop_path,
//         },
//       ],
//     },
//   };
// };

export default async function ServicePage({ params }: Props) {
  const serviceDetails = await getServicesBySlug(params.slug);

  if (!serviceDetails) {
    notFound();
  }
  return <SingleService service={serviceDetails} />;
}
