import React from "react";
import { Calendar } from "lucide-react";
import { News } from "@/types/news";
import { useLocale } from "next-intl";

export const NewsDetail = ({ news }: { news: News }) => {
  const locale = useLocale();
  const isFa = locale === "fa";

  const formattedDate = new Date(news.created_at).toLocaleDateString(
    isFa ? "fa-IR" : "en-EN",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  const formattedContent = (content: string) =>
    content
      .split("\n")
      .filter(Boolean)
      .map((para, i) => (
        <p key={i} className="mb-4 leading-relaxed text-gray-700 text-justify">
          {para}
        </p>
      ));

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <main className="max-w-4xl mx-auto px-4">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div
            className={`p-8 ${isFa ? "text-right" : "text-left"}`}
            dir={isFa ? "rtl" : "ltr"}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {isFa ? news.title : news.title_en}
            </h1>

            <div className="flex items-center text-gray-500 mb-6">
              <Calendar size={20} className="text-orange-400" />
              <span className="ml-2 text-sm">{formattedDate}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="px-8">
            <img
              src={`https://jsk-co.com${news.image_url}`}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className={`p-8 ${isFa ? "text-right" : "text-left"}`} dir={isFa ? "rtl" : "ltr"}>
            <div className="prose prose-lg max-w-none text-gray-800">
              {isFa ? formattedContent(news.content) : formattedContent(news.content_en)}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};
