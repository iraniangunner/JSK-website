import { Link } from "@/i18n/routing";
import { JobResponse } from "@/types/job";
import { useLocale } from "next-intl";
import { MapPin, Briefcase, Clock, ArrowLeft, ArrowRight } from "lucide-react";

interface JobCardProps {
  job: JobResponse;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const locale = useLocale();
  const isRTL = locale === "fa";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  // Don't render if job is inactive (optional - if you want to hide on frontend)
  if (!job.is_active) {
    return null;
  }

  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EC9123] to-[#f5a940]" />
      
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
            <Briefcase className="h-3 w-3" />
            {isRTL ? job.job_category?.title : job.job_category?.title_en}
          </span>
          
          {/* Active indicator */}
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs text-green-600 font-medium">
              {isRTL ? "فعال" : "Active"}
            </span>
          </span>
        </div>

        {/* Job Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#EC9123] transition-colors">
          {isRTL ? job.title : job.title_en}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-sm">
            {isRTL ? job.city?.title : job.city?.title_en}
          </span>
        </div>

        {/* Posted time (if available) */}
        {/* {job.created_at && (
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <Clock className="h-4 w-4" />
            <span className="text-xs">
              {isRTL ? "اخیراً منتشر شده" : "Recently posted"}
            </span>
          </div>
        )} */}

        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />

        {/* Action Button */}
        <Link
          href={`/hiring/jobs/${job.id}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#EC9123] to-[#f5a940] text-white font-semibold hover:from-[#2c4050] hover:to-[#3d5565] transition-all duration-300 group/btn"
        >
          <span>{isRTL ? "مشاهده جزئیات" : "View Details"}</span>
          <Arrow className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
};