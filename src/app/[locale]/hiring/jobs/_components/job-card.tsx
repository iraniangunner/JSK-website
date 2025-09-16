import { Link } from "@/i18n/routing";
import { JobResponse } from "@/types/job";
import { useLocale } from "next-intl";

interface JobCardProps {
  job: JobResponse;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const locale = useLocale();
  return (
    <div className="bg-white rounded-lg border shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-700">
            {locale === "fa" ? job.title : job.title_en}
          </h3>
        </div>
        <div className="mt-2 flex items-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${locale === "fa" ? "ml-1" : "mr-1"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">
            {locale === "fa" ? job.city.title : job.city.title_en}
          </span>
        </div>
        <Link
          href={`/hiring/jobs/${job.id}`}
          className="flex justify-center items-center w-[80%] xl:w-[40%] px-2 py-2 mt-8 text-center bg-[#EC9123] cursor-pointer border 
              border-solid border-[#e6e5e5] font-[600] text-[#fff]
               hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s]"
        >
          {locale === "fa" ? "مشاهده جزئیات" : "View Details"}
        </Link>
      </div>
    </div>
  );
};
