"use client";
import { Link } from "@/i18n/routing";
import { Tender } from "@/types/tender";
import { useLocale, useTranslations } from "next-intl";

export function TenderView({ tender }: { tender: Tender }) {
  const t = useTranslations("Tenders.tenderView");
  const locale = useLocale();

  return (
    <div
      key={tender.id}
      className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <h3 className="text-lg font-semibold">
              {locale === "fa" ? tender.title : tender.title_en}
            </h3>
            <Link
              href={`/tenders/${tender.id}`}
              className="bg-blue-600 hover:bg-blue-600 cursor-pointer text-white py-2 px-4 rounded inline-flex items-center transition duration-300 justify-center"
            >
              {t("viewDetails")}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">{t("labels.category")}:</span>
              <div className="flex items-center gap-2">
                <span>
                  {locale === "fa"
                    ? tender.tender_category.title
                    : tender.tender_category.title_en}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">{t("labels.number")}:</span>
              <span>{tender.number}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">{t("labels.startDate")}:</span>
              <span>{tender.start_date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">{t("labels.endDate")}:</span>
              <span className="font-medium">{tender.end_date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">{t("labels.status")}:</span>
              <span className="font-medium">
                {locale === "fa" ? tender.status : tender.status_en}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
