import { Tender, TenderFilters, PaginatedResponse } from "../types/tender";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const fetchTenders = async (
  page: number,
  itemsPerPage: number,
  filters: TenderFilters
): Promise<PaginatedResponse<Tender>> => {
  const searchParams = new URLSearchParams({
    page: page.toString(),
    per_page: itemsPerPage.toString(),
    ...(filters.title && { title: filters.title }),
    ...(filters.tender_category_id !== "" && {
      tender_category_id: filters.tender_category_id,
    }),
    ...(filters.status !== "" && { status: filters.status }),
  });

  const response = await fetch(
    `https://jsk-co.com/api/tenders?${searchParams.toString()}`
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
    // const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["tenders", page, itemsPerPage, filters],
    queryFn: () => fetchTenders(page, itemsPerPage, filters),
    placeholderData: keepPreviousData,
  });
};
