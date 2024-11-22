import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://jsk-co.com/api/projects");
  const { data } = await response.json();

  const projectEntries: MetadataRoute.Sitemap = data.map(
    ({ id, updated_at }: { id: number; updated_at: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
      lastModified: new Date(updated_at),
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/certifications`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
    },

    ...projectEntries,
  ];
}
