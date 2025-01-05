import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";
import { FaBriefcase, FaUsers, FaCog, FaChartBar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره شرکت ژیوار صنعت کیان",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "ژیوار صنعت کیان | درباره ما",
    description: "درباره شرکت ژیوار صنعت کیان",
  },
};

export default function About() {
  return (
    <>
      <PageCover title="درباره ما" bgImage="projects-pattern" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="container mx-auto px-4 py-12">
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">
            پیشگام در صنعت با تخصص، نوآوری و تعهد به کیفیت
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              از بدو تاسیس شرکت ژیوار صنعت کیان، با جذب مدیران با تجربه و آشنا
              به مجموعه هاي تولیدي و بهره برداري در زمینه ي تخصص هاي مختلف گام
              هاي محکمی با پشتوانه ي فنی و تخصصی فوق العاده براي تصدي بهره
              برداري خطوط تولید برداشته است و با تکیه بر توان و تخصص نیروهاي
              اجرائی، ستادي، بازرگانی و پشتیبانی و رفاهی توانسته است ضمن یکپارچه
              سازي انبارها و سفارشات، امور بازرگانی، منابع انسانی، تعمیرات و
              نگهداري، ساخت قطعه، دفاتر فنی و با تامین و خرید مناسب و به موقع
              قطعات و لوازم مورد نیاز خطوط تولید، نسبت به جمع آوري بانک اطلاعاتی
              کاملی از تامین کنندگان و سازندگان و فروشندگان قطعات مذکور اقدام
              نماید. شرکت ژیوار صنعت کیان بر پایه همپوشانی این استعدادها و
              امکانات موجود، قادر به ارائه کامل یا بخش وسیعی از خدمات مورد
              انتظار مشتریان بوده و پروژه هاي بزرگ را با کمترین هزینه و بالاترین
              کیفیت، از هر لحاظ تحت مدیریت خود قرار می دهد.
            </p>
          </section>

          <section className="my-16">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              ارزش‌های اصلی ما
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: FaBriefcase,
                  title: "تخصص",
                  description: "بهره‌گیری از متخصصان با تجربه",
                },
                {
                  icon: FaUsers,
                  title: "همکاری",
                  description: "کار تیمی و هم‌افزایی",
                },
                {
                  icon: FaCog,
                  title: "نوآوری",
                  description: "به‌روزرسانی مداوم فناوری‌ها",
                },
                {
                  icon: FaChartBar,
                  title: "کیفیت",
                  description: "تعهد به بالاترین استانداردها",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="text-center bg-primary py-12 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">
              آماده همکاری با شما هستیم
            </h2>
            <p className="mb-6">
              برای اطلاعات بیشتر و مشاوره با ما تماس بگیرید
            </p>
            <button className="bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              تماس با ما
            </button>
          </section> */}
        </main>
      </div>
    </>
  );
}
