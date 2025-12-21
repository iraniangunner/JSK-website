"use client";
import { Link } from "@/i18n/routing";
import { Tender } from "@/types/tender";
import { useLocale, useTranslations } from "next-intl";

export function TenderView({ tender }: { tender: Tender }) {
  const t = useTranslations("Tenders.tenderView");
  const locale = useLocale();

  const isInactive =
    tender.status === "غیرفعال" || tender.status_en === "Inactive";

  return (
    <div
      key={tender.id}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
        isInactive
          ? "bg-gray-100 opacity-70 grayscale"
          : "bg-white hover:shadow-xl hover:-translate-y-1"
      } shadow-md border border-gray-100`}
    >
      {/* Status Ribbon */}
      <div
        className={`absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
          isInactive ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isInactive ? "bg-red-500" : "bg-green-500 animate-pulse"
          }`}
        />
        {locale === "fa" ? tender.status : tender.status_en}
      </div>

      {/* Header with gradient accent */}
      <div className="h-2 bg-gradient-to-r from-[#EC9123] to-[#f5a623]" />

      <div className="p-6">
        {/* Title & Category */}
        <div className="mb-5">
          <span className="inline-block text-xs font-semibold text-[#EC9123] bg-orange-50 px-2.5 py-1 rounded-md mb-3">
            {locale === "fa"
              ? tender.tender_category.title
              : tender.tender_category.title_en}
          </span>
          <h3
            className={`text-lg font-bold leading-tight line-clamp-2 ${
              isInactive ? "text-gray-400" : "text-gray-900"
            }`}
          >
            {locale === "fa" ? tender.title : tender.title_en}
          </h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <InfoItem
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
            }
            label={t("labels.number")}
            value={tender.number}
            isInactive={isInactive}
          />
          <InfoItem
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            }
            label={t("labels.category")}
            value={
              locale === "fa"
                ? tender.tender_category.title
                : tender.tender_category.title_en
            }
            isInactive={isInactive}
          />
          <InfoItem
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            label={t("labels.startDate")}
            value={tender.start_date}
            isInactive={isInactive}
          />
          <InfoItem
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            label={t("labels.endDate")}
            value={tender.end_date}
            isInactive={isInactive}
          />
        </div>

        {/* Action Button */}
        <Link
          href={isInactive ? "#" : `/tenders/${tender.id}`}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isInactive
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#EC9123] to-[#f5a623] text-white hover:shadow-lg hover:shadow-orange-200"
          }`}
          onClick={(e) => isInactive && e.preventDefault()}
        >
          {t("viewDetails")}
          {!isInactive && (
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          )}
        </Link>
      </div>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  isInactive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isInactive: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className={`p-2 rounded-lg ${
          isInactive
            ? "bg-gray-200 text-gray-400"
            : "bg-orange-50 text-[#EC9123]"
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">{label}</span>
        <span
          className={`text-sm font-semibold ${
            isInactive ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}