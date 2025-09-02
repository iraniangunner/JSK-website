import Link from "next/link";
import { Calendar } from "lucide-react";
import { News } from "@/types/news";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const formattedDate = new Date(news.created_at).toLocaleDateString("fa-IR");
  const previewContent =
    news.content.length > 150
      ? news.content.slice(0, 150) + "..."
      : news.content;

  return (
    <div className="rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col">
      {/* تصویر و عنوان */}
      {news.image_url && (
        <img
        src={`https://jsk-co.com/${news.image_url}`}
          alt={news.title}
          className="rounded-t-2xl w-full h-52 object-cover"
        />
      )}

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{news.title}</h2>

        {/* متن کوتاه */}
        <p className="text-sm text-gray-700 text-justify flex-1">
          {previewContent}
        </p>

        {/* footer */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 ml-1" />
            {formattedDate}
          </div>

          <Link
            href={`/news/${news.id}`}
            className="text-blue-600 hover:underline font-medium text-sm"
          >
           → مشاهده بیشتر 
          </Link>
        </div>
      </div>
    </div>
  );
}
