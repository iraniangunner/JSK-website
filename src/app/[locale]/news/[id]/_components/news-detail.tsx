import React from "react";
import { Calendar } from "lucide-react";
import { News } from "@/types/news";
import { useLocale } from "next-intl";

export const NewsDetail = ({ news }: { news: News }) => {
  // Mock article data (would come from API/props in real Next.js app)
  const locale = useLocale();
  const formattedDate =
    locale == "fa"
      ? new Date(news.created_at).toLocaleDateString("fa-IR")
      : new Date(news.created_at).toLocaleDateString("en-EN");

  const formattedContent = (content: string) => {
    return content
      .split("\n")
      .filter(Boolean)
      .map((para, i) => (
        <p key={i} className="mb-3 leading-relaxed text-justify">
          {para}
        </p>
      )); // حذف خطوط خالی
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Article Header */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              {locale == "fa" ? news.title : news.title_en}
            </h1>

            {/* Date */}
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar size={18} />
              <span className="ml-2 text-sm">{formattedDate}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="px-8">
            <img
              src={`https://jsk-co.com${news.image_url}`}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {locale == "fa"
                ? formattedContent(news.content)
                : formattedContent(news.content_en)}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};
