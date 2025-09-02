import { News, PaginatedResponse } from "../types/news";
import { useInfiniteQuery } from "@tanstack/react-query";

export const fetchNews = async ({
  pageParam = 1,
}): Promise<PaginatedResponse<News>> => {
  const response = await fetch(
    `https://jsk-co.com/api/news?page=${pageParam}&per_page=6`
  );
  if (!response.ok) throw new Error("Failed to fetch news");
  return response.json();
};

export const useNewsInfinite = () => {
  return useInfiniteQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.next_page_url) {
        return lastPage.current_page + 1;
      }
      return undefined;
    },
  });
};
