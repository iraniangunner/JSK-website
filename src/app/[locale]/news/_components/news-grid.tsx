"use client";

import { useNewsInfinite } from "@/hooks/useNews";
import NewsCard from "./news-card";

export default function NewsPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useNewsInfinite();

  if (isLoading) return <p className="text-center">در حال بارگذاری...</p>;
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
        <div className="flex justify-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-2 border rounded-lg bg-gray-50 hover:bg-gray-100 transition disabled:opacity-50"
          >
            {isFetchingNextPage ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
          </button>
        </div>
      )}
    </div>
  );
}
