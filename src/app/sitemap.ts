import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://jsk-co.com";

  let projectEntries: MetadataRoute.Sitemap = [];
  let tenderEntries: MetadataRoute.Sitemap = [];

  try {
    const projectResponse = await fetch("https://jsk-co.com/api/projects", {
      cache: "no-store",
    });
    if (projectResponse.ok) {
      const { data } = await projectResponse.json();
      projectEntries = data.map(
        ({ id, updated_at }: { id: number; updated_at: string }) => ({
          url: `${baseUrl}/projects/${id}`,
          lastModified: new Date(updated_at),
        })
      );
    } else {
      console.error("Failed to fetch projects:", projectResponse.statusText);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  try {
    const tenderResponse = await fetch("https://jsk-co.com/api/tenders", {
      cache: "no-store",
    });
    if (tenderResponse.ok) {
      const { tenderData } = await tenderResponse.json();
      tenderEntries = tenderData.map(
        ({ id, updated_at }: { id: number; updated_at: string }) => ({
          url: `${baseUrl}/tenders/${id}`,
          lastModified: new Date(updated_at),
        })
      );
    } else {
      console.error("Failed to fetch tenders:", tenderResponse.statusText);
    }
  } catch (error) {
    console.error("Error fetching tenders:", error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tenders`,
      lastModified: new Date(),
    },
    ...projectEntries,
    ...tenderEntries,
  ];
}
