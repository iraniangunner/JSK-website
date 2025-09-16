"use client";
import { useLocale, useTranslations } from "next-intl";
import type { JobResponse } from "@/types/job";
import { DetailCover } from "@/components/detailCover"; // Declare the DetailCover variable

interface StructuredJobData {
  description?: string;
  requirements: string[];
  responsibilities: string[];
}

export function JobDetail({ job }: { job: JobResponse }) {
  const t = useTranslations("Hiring.job");
  const locale = useLocale();

  // Parse structured data from JSON strings
  const parseStructuredData = (textContent?: string): StructuredJobData => {
    if (!textContent) {
      return { requirements: [], responsibilities: [] };
    }

    try {
      const parsed = JSON.parse(textContent);
      return {
        description: parsed.description || "",
        requirements: Array.isArray(parsed.requirements)
          ? parsed.requirements
          : [],
        responsibilities: Array.isArray(parsed.responsibilities)
          ? parsed.responsibilities
          : [],
      };
    } catch {
      // If parsing fails, treat as plain text description
      return {
        description: textContent,
        requirements: [],
        responsibilities: [],
      };
    }
  };

  // Parse Persian and English data
  const persianData = parseStructuredData(job.text);
  const englishData = parseStructuredData(job.text_en);

  // Choose data based on locale
  const currentData = locale === "fa" ? persianData : englishData;
  const fallbackData = locale === "fa" ? englishData : persianData;

  // Get title based on locale
  const title = locale === "fa" ? job.title : job.title_en || job.title;

  // Get city name based on locale
  const cityName =
    locale === "fa" ? job.city?.title : job.city?.title_en || job.city?.title;

  return (
    <>
      <DetailCover
        title={title}
        link="/hiring/jobs"
        linkTitle={locale === "fa" ? "فرصت های شغلی" : "Job Opportunities"}
        location={cityName}
      />
      <main className="container mx-auto lg:px-24 px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="space-y-6">
            {/* Job Description Section */}
            {(currentData.description || fallbackData.description) && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("jobDescription")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {currentData.description || fallbackData.description}
                </p>
              </section>
            )}

            {/* Responsibilities Section */}
            {(currentData.responsibilities.length > 0 ||
              fallbackData.responsibilities.length > 0) && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("responsibilities")}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {(currentData.responsibilities.length > 0
                    ? currentData.responsibilities
                    : fallbackData.responsibilities
                  ).map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Requirements Section */}
            {(currentData.requirements.length > 0 ||
              fallbackData.requirements.length > 0) && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("requirements")}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {(currentData.requirements.length > 0
                    ? currentData.requirements
                    : fallbackData.requirements
                  ).map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Job Category and City Info */}
            <section className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                {job.job_category && (
                  <div>
                    <span className="font-semibold">
                      {locale === "fa" ? "دسته‌بندی:" : "Category:"}
                    </span>
                    <span className="ml-2">
                      {locale === "fa"
                        ? job.job_category.title
                        : job.job_category.title_en || job.job_category.title}
                    </span>
                  </div>
                )}
                {job.city && (
                  <div>
                    <span className="font-semibold">
                      {locale === "fa" ? "شهر:" : "City:"}
                    </span>
                    <span className="ml-2">{cityName}</span>
                  </div>
                )}
              </div>
            </section>

            {/* Apply Button */}
            <div className="flex justify-center items-center">
              <a
                href="http://79.127.63.91:85/sysworkflow/en/neoclassic/97738647466c1e56a916250067348930/535278320672b338c4b5ff7071028364.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center px-4 py-2 mt-8 text-center bg-[#EC9123] cursor-pointer border
                       border-solid border-[#EC9123] h-[52px] font-[600] text-[#fff] text-[18px]
                       hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s]"
              >
                {locale === "fa" ? "درخواست همکاری" : "Apply"}
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
