import Tender from "@/components/tender/tender";
import TenderListWrapper from "@/components/tender/tender-wrapper";
import TendersTable from "@/components/tender/tenderTable";
import Link from "next/link";
export default async function TenderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const id = (await params).id
  const tenderDetails = {
    title: "مناقصه ساخت پروژه ساختمانی",
    type: "مناقصه",
    T_number: 7253465234,
    start_date: "1402/06/31",
    end_date: "1402/08/31",
    rules:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    deliveryLocation: "تهران، خیابان ولیعصر، پلاک 1234",

    deliveryDeadline: "1402/06/31",
    openingDate: "1402/07/05",
    description:
      "این مناقصه برای ساخت یک مجتمع مسکونی 10 طبقه در منطقه 5 تهران می‌باشد.",
    documents: [
      { name: "فرم شرکت در مناقصه", url: "/documents/form.pdf" },
      // { name: "مشخصات فنی پروژه", url: "/documents/specs.pdf" },
      // { name: "قرارداد نمونه", url: "/documents/contract.pdf" },
    ],
    status: "فعال",
    contactNumber: "0765342377",
    unitName: "بازرگانی",
    contactEmail: "info@example.com",
  };

  // const contentRef = useRef(null);
  // const handlePrint = useReactToPrint({ contentRef });
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
                فراخوان ها
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
        <div className="bg-white overflow-hidden mb-8 print:shadow-none">
         <Tender/>
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
