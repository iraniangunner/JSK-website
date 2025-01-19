import "server-only";

export async function getProjects() {
  const res = await fetch("https://jsk-co.com/api/projects", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export async function getProjectById(id: number) {
  const res = await fetch(`https://jsk-co.com/api/projects/${id}`, {
    // next: { revalidate: 3600 },
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("No such project");
    }
    throw new Error("Failed to fetch the project data");
  }

  return res.json();
}

export async function getCategories() {
  const res = await fetch("https://jsk-co.com/api/categories", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
