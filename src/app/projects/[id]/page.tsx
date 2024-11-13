import { SingleProject } from "@/components/project/singleproject/singleProject";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: number };
};

async function getProjectById(id:number) {
  const res = await fetch(`https://jsk-co.com/api/projects/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}




export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata | undefined> => {
  const project = await getProjectById(params.id);

  if (!project) {
    return;
  }

  return {
    title: `پروژه ${project.title}`,
    description: project.text,
    openGraph: {
      title: `پروژه ${project.title}`,
      description: project.text,
      images: [
        {
          url: project.images[0].full_path,
        },
      ],
    },
  };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectById(params.id);

  if (!project) {
    notFound();
  }
  return <SingleProject project={project} />;
}

