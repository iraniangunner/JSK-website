import Link from "next/link";
import { Calendar } from "lucide-react";
import { News } from "@/types/news";
import { useLocale } from "next-intl";
import Image from "next/image";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const locale = useLocale();
  const formattedDate =
    locale == "fa"
      ? new Date(news.created_at).toLocaleDateString("fa-IR")
      : new Date(news.created_at).toLocaleDateString("en-EN");

  const previewContent = (content: string) => {
    return content.length > 150 ? content.slice(0, 150) + "..." : content;
  };

  return (
    <div className="rounded-2xl shadow-md hover:shadow-lg transition bg-white flex flex-col">
      {/* تصویر و عنوان */}
      {news.image_url && (
        <Image
          src={`https://jsk-co.com${news.image_url}`}
          alt={news.title}
          width={300}
          height={100}
          className="rounded-t-2xl w-full h-52 object-cover"
        />
      )}

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {locale == "fa" ? news.title : news.title_en}
        </h2>

        {/* متن کوتاه */}
        <p
          className="text-sm text-gray-700 text-justify flex-1"
          dangerouslySetInnerHTML={{
            __html:
              locale == "fa"
                ? previewContent(news.content)
                : previewContent(news.content_en),
          }}
        ></p>

        {/* footer */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 ml-1" />
            {formattedDate}
          </div>

          <Link
            href={
              locale == "fa" ? `/fa/news/${news.id}` : `/en/news/${news.id}`
            }
            className="text-[#EC9123] hover:underline font-medium text-sm"
          >
            {locale == "fa" ? " → مشاهده بیشتر" : "Show more ->"}
          </Link>
        </div>
      </div>
    </div>
  );
}
