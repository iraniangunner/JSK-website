import type { MetadataRoute } from "next";
import { locales } from "@/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://jsk-co.com";

  // Static routes that need to be localized
  const staticRoutes = [
    "",
    "/certifications",
    "/projects",
    "/about",
    "/contact",
    "/services/commerce",
    "/services/management",
    "/services/operation",
    "/tenders",
  ];

  let projectEntries: MetadataRoute.Sitemap = [];
  let tenderEntries: MetadataRoute.Sitemap = [];

  // Fetch projects
  try {
    const projectResponse = await fetch("https://jsk-co.com/api/projects", {
      cache: "no-store",
    });
    if (projectResponse.ok) {
      const { data } = await projectResponse.json();
      // Create entries for each locale
      projectEntries = data.flatMap(
        ({ id, updated_at }: { id: number; updated_at: string }) =>
          locales.map((locale) => ({
            url: `${baseUrl}/${locale}/projects/${id}`,
            lastModified: new Date(updated_at),
          }))
      );
    } else {
      console.error("Failed to fetch projects:", projectResponse.statusText);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  // Fetch tenders
  try {
    const tenderResponse = await fetch("https://jsk-co.com/api/tenders", {
      cache: "no-store",
    });
    if (tenderResponse.ok) {
      const { data } = await tenderResponse.json();
      // Create entries for each locale
      tenderEntries = data.flatMap(
        ({ id, updated_at }: { id: number; updated_at: string }) =>
          locales.map((locale) => ({
            url: `${baseUrl}/${locale}/tenders/${id}`,
            lastModified: new Date(updated_at),
          }))
      );
    } else {
      console.error("Failed to fetch tenders:", tenderResponse.statusText);
    }
  } catch (error) {
    console.error("Error fetching tenders:", error);
  }

  // Generate localized entries for static routes
  const localizedStaticEntries = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );

  return [...localizedStaticEntries, ...projectEntries, ...tenderEntries];
}
