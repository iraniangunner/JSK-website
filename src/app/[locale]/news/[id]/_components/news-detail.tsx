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
              <Calendar size={20} className="text-[#EC9123]" />
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

          <div
            className="prose prose-rtl max-w-full p-8 text-justify
             [&_ul]:list-disc [&_ul]:pl-5
             [&_ol]:list-decimal [&_ol]:pl-5"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>
      </main>
    </div>
  );
};
