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
      <div className="xl:w-[60%] mx-auto px-12 mt-8">
        <div className="bg-white overflow-hidden mb-8 print:shadow-none">
          <h2 className="text-xl font-semibold mb-6">{t("pageTitle")}</h2>
          <div className="overflow-auto">
            <table
              ref={contentRef}
              className="w-full text-sm border-collapse lg:table-fixed"
            >
              <tbody>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 text-sm font-medium text-gray-900">
                    {t("table.tenderTitle")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {locale === "fa" ? tender.title : tender.title_en}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.openingDate")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.start_date}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.tenderType")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {locale === "fa"
                      ? tender.tender_category.title
                      : tender.tender_category.title_en}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.submissionDeadline")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.doc_submission_deadline}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.status")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {locale === "fa" ? tender.status : tender.status_en}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.submissionLocation")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {locale === "fa"
                      ? tender.doc_submission_location
                      : tender.doc_submission_location_en}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.tenderNumber")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.number}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.department")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {locale === "fa" ? tender.department : tender.department_en}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.startDate")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.start_date}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.phone")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.phone}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.endDate")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.end_date}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.email")}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.email}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    {t("table.description")}
                  </td>
                  <td
                    colSpan={3}
                    className="border border-gray-300 py-2 px-4 text-justify text-gray-500"
                  >
                    {locale === "fa" ? tender.text : tender.text_en}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center space-x-4 rtl:space-x-reverse space-y-4 print:hidden mt-4">
            <a
              href={tender.full_path}
              target="_blank"
              download
              className="bg-[#EC9123] ml-4 rtl:ml-0 rtl:mr-4 cursor-pointer text-white py-2 px-4 rounded inline-flex items-center transition duration-300 print:hidden"
              rel="noreferrer"
            >
              <svg
                className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
              className="bg-[#EC9123] ml-4 rtl:ml-0 rtl:mr-4 cursor-pointer text-white py-2 px-4 rounded inline-flex items-center transition duration-300"
            >
              <svg
                className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
