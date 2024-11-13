import { ProjectsSectionUI } from "./projectsSectionUI";
import { CgDanger } from "react-icons/cg";

async function getProjects() {
  const res = await fetch("https://jsk-co.com/api/projects", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export async function ProjectSection() {
  try {
    const projectsData = await getProjects();
    return <ProjectsSectionUI projects={projectsData} />;
  } catch (error) {
    return (
      <div className="mx-auto max-w-screen-sm text-center z-[1] relative">
        <div className="mb-4 text-7xl flex justify-center items-center font-extrabold tracking-tight  lg:text-9xl">
          <CgDanger />
        </div>
        <p className="mb-4 text-lg font-light">
          مشکلی پیش آمده دوباره تلاش کنید
        </p>
      </div>
    );
  }
}
