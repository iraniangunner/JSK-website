import React from "react";
import {
  ArrowRight,
  Truck,
  Cog,
  Package,
  Briefcase,
  Database,
  Globe,
  BarChartIcon as ChartBar,
  Layers,
} from "lucide-react";
import { PageCover } from "@/components/pageCover";

const services = [
  {
    title: "تأمین اقلام پروژه",
    icon: Package,
    description:
      "ما در زمینه تأمین انواع تجهیزات و ملزومات پروژه‌های صنعتی و معدنی فعالیت می‌کنیم. خدمات ما شامل شناسایی نیازهای پروژه، انتخاب تأمین‌کنندگان معتبر و ارائه بهترین راهکارها برای کاهش هزینه‌ها و بهینه‌سازی زنجیره تأمین است.",
  },
  {
    title: "تأمین اقلام یدکی و مصرفی کارخانجات",
    icon: Cog,
    description:
      "با توجه به اهمیت تأمین به‌موقع قطعات یدکی و مصرفی در کاهش توقفات خطوط تولید، شرکت ما این اقلام را با تضمین کیفیت و از بهترین تأمین‌کنندگان بین‌المللی فراهم می‌کند.",
  },
  {
    title: "تأمین و سفارش‌گذاری اقلام اساسی کارخانه‌ها",
    icon: Briefcase,
    description:
      "ما در تأمین تجهیزات و اقلام حیاتی و استراتژیک کارخانه‌ها، از جمله ماشین‌آلات، تجهیزات تخصصی و مواد اولیه، خدمات کامل ارائه می‌دهیم. تیم ما با شناسایی نیازهای کارخانه‌ها، روند سفارش‌گذاری را تسهیل و مدیریت می‌کند.",
  },
  {
    title: "مهندسی خرید و سفارش قطعات ساختنی",
    icon: Layers,
    description:
      "با بهره‌گیری از تجربه و دانش مهندسی، ما در سفارش و تولید قطعات ساختنی بر اساس مشخصات فنی مورد نیاز، خدمات تخصصی ارائه می‌دهیم. این خدمات شامل طراحی، انتخاب مواد اولیه، نظارت بر فرآیند تولید و تضمین کیفیت قطعات است.",
  },
  {
    title: "خرید و فروش مواد اولیه صنایع معدنی و پتروشیمی",
    icon: Database,
    description:
      "ما به عنوان یکی از تأمین‌کنندگان معتبر مواد اولیه صنایع معدنی و پتروشیمی، در زمینه خرید و فروش این محصولات فعالیت می‌کنیم. شبکه گسترده ما در بازارهای جهانی، امکان ارائه مواد با کیفیت و قیمت رقابتی را فراهم کرده است.",
  },
  {
    title: "خدمات لجستیک و حمل بین‌المللی",
    icon: Truck,
    description:
      "ما خدمات لجستیکی و حمل‌ونقل بین‌المللی را به صورت جامع ارائه می‌دهیم. این خدمات شامل برنامه‌ریزی حمل، مدیریت اسناد، هماهنگی‌های گمرکی و ارائه راهکارهای بهینه برای کاهش هزینه‌های حمل است.",
  },
  {
    title:
      "برنامه‌ریزی و آماده‌سازی جدول ساختار شکست سفارشات و زیرساخت‌های تأمین",
    icon: ChartBar,
    description:
      "ما با استفاده از تکنیک‌های مدرن مدیریتی، جدول ساختار شکست سفارشات و زیرساخت‌های تأمین را برای پروژه‌های مختلف تدوین و پیاده‌سازی می‌کنیم. این فرآیند به شفاف‌سازی مسیر تأمین و افزایش بهره‌وری کمک می‌کند.",
  },
  {
    title: "فراهم‌کردن و پیاده‌سازی فرآیند تأمین ERP",
    icon: Globe,
    description:
      "در راستای مدرن‌سازی فرآیندهای تأمین، ما سیستم‌های ERP را برای مدیریت زنجیره تأمین طراحی و اجرا می‌کنیم. این خدمات شامل شناسایی نیازها، انتخاب نرم‌افزار مناسب و نظارت بر مراحل پیاده‌سازی است.",
  },
];

export default function CommercialDepartment() {
  return (
    <div className="mx-auto text-right">
      {/* Hero Section */}

      <PageCover
        title="بازرگانی و تامین اقلام پروژه"
        bgImage="projects-pattern"
      />

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">معاونت بازرگانی</h1>
          <p className="text-lg mb-16 text-justify text-gray-600">
            شرکت ژیوار صنعت کیان به عنوان یک مجموعه بین‌المللی در زمینه تأمین و
            خدمات مرتبط با پروژه‌های صنعتی و معدنی، با هدف ارائه راهکارهای جامع
            و مؤثر به صنایع مختلف فعالیت می‌کند. ما با بهره‌گیری از دانش فنی،
            تیم متخصص و شبکه‌ای گسترده از تأمین‌کنندگان و شرکای تجاری در سراسر
            جهان، نیازهای مشتریان خود را با بالاترین کیفیت و در کوتاه‌ترین زمان
            ممکن برآورده می‌کنیم.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-12 h-12 text-[#ffa500] ml-4" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-justify">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      {/* <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">چشم‌انداز ما</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            چشم‌انداز ما این است که با ارائه خدماتی جامع و قابل‌اعتماد، به یکی از پیشروترین شرکت‌های بازرگانی بین‌المللی
            تبدیل شویم و ارزش افزوده‌ای پایدار برای مشتریان خود ایجاد کنیم.
          </p>
        </div>
      </section> */}

      {/* Image Gallery */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">گالری تصاویر</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={`/placeholder.svg?height=300&width=400&text=تصویر ${index}`}
                  alt={`تصویر ${index}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
