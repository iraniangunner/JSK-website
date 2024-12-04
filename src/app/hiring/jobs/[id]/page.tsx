import Link from "next/link";

const JobDetail: React.FC = () => {
  // type Props = {
  //   params: { id: number };
  // };

  // export const generateMetadata = async ({
  //   params,
  // }: Props): Promise<Metadata | undefined> => {
  //   try {
  //     const project = await getProjectById(params.id);
  //     return {
  //       title: {
  //         absolute: `پروژه ها | پروژه ${project.title}`,
  //       },
  //       description: project.text,
  //       alternates: {
  //         canonical: `/projects/${params.id}`,
  //       },
  //       openGraph: {
  //         title: `پروژه ها | پروژه ${project.title}`,
  //         description: project.text,
  //         images: [
  //           {
  //             url: project.images[0].full_path,
  //           },
  //         ],
  //       },
  //     };
  //   } catch (error) {
  //     return {
  //       title: {
  //         absolute: "ژیوار صنعت کیان",
  //       },
  //       description:
  //         "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
  //       openGraph: {
  //         title: "ژیوار صنعت کیان",
  //         description:
  //           "ژیوار صنعت کیان - اجرا و بهره برداری پروژه های صنعتی و معدنی",
  //       },
  //     };
  //   }
  // };
  return (
    <>
      <div
        className="relative bg-projects-pattern pt-[80px] lg:pt-[260px] 
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-0 before:z-[-1]"
      >
        <nav
          aria-label="breadcrumb"
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative hidden md:block"
        >
          <ol className="flex flex-wrap items-center absolute bottom-[20px] rounded-md bg-opacity-60 px-[1rem]">
            <li className="flex items-center text-lg antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
              <Link href="/hiring/jobs" className="opacity-60">
                فرصت‌های همکاری
              </Link>
              <span className="mx-2 text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li className="flex items-center text-lg antialiased font-normal leading-normal text-blue-gray-900">
              <span> مشاور سرمایه گذاری(ماهشهر)</span>
            </li>
          </ol>
        </nav>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="lg:text-2xl font-bold text-center text-gray-900 mb-2">
            مشاور سرمایه گذاری(ماهشهر)
          </h1>
          <div className="flex items-center justify-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
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
            <span className="mr-2">ماهشهر</span>
          </div>
        </div>
      </div>
      <main className="container mx-auto lg:px-24 px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                شرح موقعیت شغلی:
              </h2>
              <p className="text-gray-600 leading-relaxed">
                کارگزاری مفید جهت تکمیل کادر تیم فروش شعبه ماهشهر خود در استان
                خوزستان از افرادی که علاقه به مسائل اقتصادی و بازار سرمایه دارند
                و در مهارت‌های فروش و مذاکره موثر توانمند هستند با شرایط زیر
                دعوت به همکاری می‌نماید.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                شرح وظایف و مسئولیت‌ها:
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
                شرایط احراز:
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
                درخواست همکاری
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default JobDetail;
