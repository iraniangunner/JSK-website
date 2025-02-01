import { Tender, TenderFilters, PaginatedResponse } from "../types/tender";
import { useQuery } from "@tanstack/react-query";

export const fetchTenders = async (
  page: number,
  itemsPerPage: number,
  filters: TenderFilters
): Promise<PaginatedResponse<Tender>> => {
  const searchParams = new URLSearchParams({
    page: page.toString(),
    per_page: itemsPerPage.toString(),
    ...(filters.title && { title: filters.title }),
    ...(filters.tender_category_id !== "all" && {
      tender_category_id: filters.tender_category_id,
    }),
    ...(filters.status !== "all" && { status: filters.status }),
  });

  const response = await fetch(
    `https://jsk-co.com/api/tenders?${searchParams.toString()}`,
    {
      next: { revalidate: 3600 },
      headers: {
        Authorization:
          "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tenders");
  }

  return response.json();
};

export const useTenders = (
  page: number,
  itemsPerPage: number,
  filters: TenderFilters
) => {
  return useQuery({
    queryKey: ["tenders", page, itemsPerPage, filters],
    queryFn: () => fetchTenders(page, itemsPerPage, filters),
    // placeholderData: keepPreviousData,
  });
};
