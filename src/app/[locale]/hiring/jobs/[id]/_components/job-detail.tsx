import { JobResponse } from "@/types/job";
import { getLocale, getTranslations } from "next-intl/server";
import { DetailCover } from "@/components/detailCover";
export async function JobDetail({ job }: { job: JobResponse }) {
  const t = await getTranslations("Hiring.job");
  const locale = await getLocale();
  return (
    <>
      <DetailCover
        title={locale === "fa" ? job.title : job.title_en}
        link="/hiring/jobs"
        linkTitle={locale === "fa" ? "فرصت های شغلی" : "Job Opportunities"}
        location={locale === "fa" ? job.city.title : job.city.title_en}
      />
      <main className="container mx-auto lg:px-24 px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {t("jobDescription")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {locale === "fa" ? job.text : job.text_en}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {t("responsibilities")}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>راهنمایی و مشاوره مالی و سرمایه گذاری مشتریان بالقوه</li>
                <li>برگزاری جلسات پیشبرد فروش با مشتریان بالقوه</li>
                <li>
                  حفظ ارتباط موثر با مشتریان به منظور حداکثرسازی منافع ایشان
                </li>
                <li>
                  ارائه اطلاعات معتبر به مشتریان در چارچوب قوانین و مقررات بازار
                  سرمایه
                </li>
                <li>
                  همکاری در شناسایی بازارهای هدف و طبقه بندی مشتریان بالقوه
                </li>
                <li>کار تیمی با دیگر همکاران به منظور پیشبرد اهداف فروش</li>
                <li>
                  پیگیری کلیه امور مربوط به فروش و پشتیبانی مشتریان در شعبه
                </li>
                <li>ایده پردازی و ارائه طرح های توسعه بازار و فروش</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {t("requirements")}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>مهارت ارتباطی بالا</li>
                <li>توانایی مذاکره و متقاعدسازی</li>
                <li>مسئولیت پذیری در پاسخگویی</li>
                <li>آشنایی با اصول مدیریت ارتباط با مشتریان</li>
                <li>آشنایی با مهارت‌های تخصصی فروش و تاثیرگذاری بر مشتری</li>
                <li>حداقل مدرک تحصیلی، لیسانس می باشد</li>
              </ul>
            </section>

            <div className="flex justify-center items-center">
              <a
                href="http://79.127.63.91:85/sysworkflow/en/neoclassic/97738647466c1e56a916250067348930/535278320672b338c4b5ff7071028364.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center px-4 py-2 mt-8 text-center bg-[#fea925] cursor-pointer border 
                      border-solid border-[#fea925] h-[52px] font-[600] text-[#fff] text-[18px]
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
