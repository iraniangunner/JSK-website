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
    "/news",
  ];

  let projectEntries: MetadataRoute.Sitemap = [];
  let tenderEntries: MetadataRoute.Sitemap = [];
  let newsEntries: MetadataRoute.Sitemap = [];

  // Helper function to fetch all paginated data
  const fetchAllPages = async (url: string) => {
    let results: any[] = [];
    let page = 1;
    let lastPage = 1;

    do {
      const response = await fetch(`${url}?page=${page}&per_page=100`, {
        cache: "force-cache",
        next: { revalidate: 86400 }, // 24 hours
      });

      if (!response.ok) {
        console.error(`Failed to fetch ${url} (page ${page}):`, response.statusText);
        break;
      }

      const json = await response.json();
      results = [...results, ...json.data];
      lastPage = json.last_page ?? 1;
      page++;
    } while (page <= lastPage);

    return results;
  };

  // Fetch projects
  try {
    const projects = await fetchAllPages("https://jsk-co.com/api/projects");
    projectEntries = projects.flatMap(
      ({ id, updated_at }: { id: number; updated_at: string }) =>
        locales.map((locale) => ({
          url: `${baseUrl}/${locale}/projects/${id}`,
          lastModified: new Date(updated_at),
        }))
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  // Fetch tenders
  try {
    const tenders = await fetchAllPages("https://jsk-co.com/api/tenders");
    tenderEntries = tenders.flatMap(
      ({ id, updated_at }: { id: number; updated_at: string }) =>
        locales.map((locale) => ({
          url: `${baseUrl}/${locale}/tenders/${id}`,
          lastModified: new Date(updated_at),
        }))
    );
  } catch (error) {
    console.error("Error fetching tenders:", error);
  }

  // Fetch news
  try {
    const news = await fetchAllPages("https://jsk-co.com/api/news");
    newsEntries = news.flatMap(
      ({ id, updated_at }: { id: number; updated_at: string }) =>
        locales.map((locale) => ({
          url: `${baseUrl}/${locale}/news/${id}`,
          lastModified: new Date(updated_at),
        }))
    );
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  // Generate localized entries for static routes
  const localizedStaticEntries = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: undefined,
    }))
  );

  return [
    ...localizedStaticEntries,
    ...projectEntries,
    ...tenderEntries,
    ...newsEntries,
  ];
}
