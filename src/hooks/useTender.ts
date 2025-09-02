import { Tender, PaginatedResponse, TenderSearchParams } from "../types/tender";
import { useQuery } from "@tanstack/react-query";

export const fetchTenders = async (
  params: TenderSearchParams
): Promise<PaginatedResponse<Tender>> => {
  const queryParams = new URLSearchParams();
  if (params.page) {
    queryParams.set("page", params.page.toString());
  }
  if (params.per_page) {
    queryParams.set("per_page", params.per_page.toString());
  }

  if (params.title && params.title.length >= 2) {
    queryParams.set("title", params.title);
  }

  if (params.title_en && params.title_en.length >= 2) {
    queryParams.set("title_en", params.title_en);
  }

  if (params.tender_category_id) {
    queryParams.set("tender_category_id", params.tender_category_id.toString());
  }

  if (params.status) {
    queryParams.set("status", params.status.toString());
  }

  const response = await fetch(
    `https://jsk-co.com/api/tenders?${queryParams.toString()}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tenders");
  }

  return response.json();
};

export const useTenders = (params: TenderSearchParams) => {
  return useQuery({
    queryKey: ["tenders", params],
    queryFn: () => fetchTenders(params),
    enabled:
      !params?.title ||
      (params.title?.length ?? 0) >= 2 ||
      !params?.title_en ||
      (params.title_en?.length ?? 0) >= 2,
  });
};
