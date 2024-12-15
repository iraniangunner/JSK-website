import Link from "next/link";
export default async function TenderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const id = (await params).id
  const tenderDetails = {
    title: "مناقصه ساخت پروژه ساختمانی",
    rules:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    deliveryLocation: "تهران، خیابان ولیعصر، پلاک 1234",
    deliveryDeadline: "1402/06/31",
    openingDate: "1402/07/05",
    description:
      "این مناقصه برای ساخت یک مجتمع مسکونی 10 طبقه در منطقه 5 تهران می‌باشد.",
    documents: [
      { name: "فرم شرکت در مناقصه", url: "/documents/form.pdf" },
      { name: "مشخصات فنی پروژه", url: "/documents/specs.pdf" },
      { name: "قرارداد نمونه", url: "/documents/contract.pdf" },
    ],
    contactEmail: "info@example.com",
  };
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
              <Link href="/tenders" className="opacity-60">
                مناقصات
              </Link>
              <span className="mx-2 text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li className="flex items-center text-lg antialiased font-normal leading-normal text-blue-gray-900">
              <span>{tenderDetails.title}</span>
            </li>
          </ol>
        </nav>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="lg:text-2xl font-bold text-center text-gray-900 mb-2">
            {tenderDetails.title}
          </h1>
        </div>
      </div>
      <div className="xl:w-[60%] mx-auto px-12 mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 print:shadow-none">
          <table className="w-full">
            {/* <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white print:bg-gray-200 print:text-black">
                <th className="px-6 py-3 text-right text-sm font-semibold uppercase tracking-wider">عنوان</th>
                <th className="px-6 py-3 text-right text-sm font-semibold uppercase tracking-wider">جزئیات</th>
              </tr>
            </thead> */}
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    قوانین و مقررات
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {tenderDetails.rules}
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    محل تحویل اسناد
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {tenderDetails.deliveryLocation}
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    مهلت تحویل اسناد
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {tenderDetails.deliveryDeadline}
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    تاریخ بازگشایی اسناد
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {tenderDetails.openingDate}
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    توضیحات
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    {tenderDetails.description}
                  </div>
                </td>
              </tr>
              {tenderDetails.documents.map((doc, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      سند {index + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 flex justify-between items-center">
                      <span>{doc.name}</span>
                      <a
                        href={doc.url}
                        download
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 print:hidden"
                      >
                        <svg
                          className="w-4 h-4 ml-2"
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
                        دانلود
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// import { redirect } from 'next/navigation'

// async function fetchTeam(id: string) {
//   const res = await fetch('https://...')
//   if (!res.ok) return undefined
//   return res.json()
// }

// export default async function Profile({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const id = (await params).id
//   if (!id) {
//     redirect('/login')
//   }

//   const team = await fetchTeam(id)
//   if (!team) {
//     redirect('/join')
//   }

//   // ...
// }
