"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocale, useTranslations } from "next-intl";
import type { Tender } from "@/types/tender";
import { DetailCover } from "../detailCover";

export function TenderComponent({ tender }: { tender: Tender }) {
  const t = useTranslations("Tenders.tender");
  const locale = useLocale();
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  const isInactive =
    tender.status === "غیر فعال" || tender.status_en === "Inactive";

  return (
    <>
      <DetailCover
        title={locale === "fa" ? tender.title : tender.title_en}
        link="/tenders"
        linkTitle={locale === "fa" ? "مناقصات" : "Tenders"}
        location={
          locale === "fa"
            ? tender.doc_submission_location
            : tender.doc_submission_location_en
        }
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          ref={contentRef}
          className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
            isInactive ? "opacity-60 grayscale" : ""
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#EC9123] to-[#d97f1a] px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-orange-100 text-sm mb-1">
                  {t("table.tenderNumber")}: {tender.number}
                </p>
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  {locale === "fa" ? tender.title : tender.title_en}
                </h1>
              </div>
              <span
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-sm ${
                  isInactive
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full mr-2 rtl:mr-0 rtl:ml-2 ${
                    isInactive ? "bg-red-500" : "bg-green-500 animate-pulse"
                  }`}
                />
                {locale === "fa" ? tender.status : tender.status_en}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dates Section */}
              <div className="bg-gray-50 rounded-xl p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#EC9123]"
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
                  {locale === "fa" ? "تاریخ‌ها" : "Dates"}
                </h3>
                <div className="space-y-3">
                  <InfoRow
                    label={t("table.startDate")}
                    value={tender.start_date}
                  />
                  <InfoRow label={t("table.endDate")} value={tender.end_date} />
                  <InfoRow
                    label={t("table.openingDate")}
                    value={tender.start_date}
                  />
                  <InfoRow
                    label={t("table.submissionDeadline")}
                    value={tender.doc_submission_deadline}
                  />
                </div>
              </div>

              {/* Details Section */}
              <div className="bg-gray-50 rounded-xl p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#EC9123]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {locale === "fa" ? "جزئیات" : "Details"}
                </h3>
                <div className="space-y-3">
                  <InfoRow
                    label={t("table.tenderType")}
                    value={
                      locale === "fa"
                        ? tender.tender_category.title
                        : tender.tender_category.title_en
                    }
                  />
                  <InfoRow
                    label={t("table.department")}
                    value={
                      locale === "fa" ? tender.department : tender.department_en
                    }
                  />
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gray-50 rounded-xl p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#EC9123]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {locale === "fa" ? "اطلاعات تماس" : "Contact Info"}
                </h3>
                <div className="space-y-3">
                  <InfoRow label={t("table.phone")} value={tender.phone} />
                  <InfoRow label={t("table.email")} value={tender.email} />
                </div>
              </div>

              {/* Location Section */}
              <div className="bg-gray-50 rounded-xl p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#EC9123]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  {locale === "fa" ? "محل ارسال" : "Submission Location"}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {locale === "fa"
                    ? tender.doc_submission_location
                    : tender.doc_submission_location_en}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-[#EC9123]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h12"
                  />
                </svg>
                {t("table.description")}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {locale === "fa" ? tender.text : tender.text_en}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
            <a
              href={tender.full_path}
              target="_blank"
              download
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EC9123] hover:bg-[#d97f1a] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t("buttons.download")}
            </a>

            <button
              onClick={() => handlePrint()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              {t("buttons.print")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Helper component for info rows
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-900 font-medium text-sm">{value}</span>
    </div>
  );
}