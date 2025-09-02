"use client";

import { useNewsInfinite } from "@/hooks/useNews";
import NewsCard from "./news-card";
import { useLocale } from "next-intl";
import NewsCardSkeleton from "@/components/newsCardSkeleton";

export function NewsGrid() {
  const locale = useLocale();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useNewsInfinite();

  if (isLoading)
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <NewsCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      </div>
    );
  if (isError)
    return <p className="text-center text-red-500">خطا در دریافت اخبار</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.pages.map((page) =>
          page.data.map((news) => <NewsCard key={news.id} news={news} />)
        )}
      </div>

      {hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-2 border rounded-lg bg-gray-50 hover:bg-gray-100 transition disabled:opacity-50"
          >
            {isFetchingNextPage && locale == "fa" && "در حال بارگذاری..."}
            {!isFetchingNextPage && locale == "fa" && "بارگذاری بیشتر"}
            {isFetchingNextPage && locale == "en" && "Loading..."}
            {!isFetchingNextPage && locale == "en" && "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
