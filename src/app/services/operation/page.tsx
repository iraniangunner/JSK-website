import React from "react";
import { PageCover } from "@/components/pageCover";
import { Metadata } from "next";
import { AccordionItem } from "@/components/accordion/accordionItem";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "خدمات | بازرگانی و تامین اقلام پروژه",
  },
  description:
    "شرکت ژیوار صنعت کیان به عنوان یک مجموعه بین‌المللی در زمینه تأمین و خدمات مرتبط با پروژه‌های صنعتی و معدنی، با هدف ارائه راهکارهای جامع و مؤثر به صنایع مختلف فعالیت می‌کند. ما با بهره‌گیری از دانش فنی، تیم متخصص و شبکه‌ای گسترده از تأمین‌کنندگان و شرکای تجاری در سراسر جهان، نیازهای مشتریان خود را با بالاترین کیفیت و در کوتاه‌ترین زمان ممکن برآورده می‌کنیم.",
  alternates: {
    canonical: "/services/commerce",
  },
  openGraph: {
    title: "خدمات | بازرگانی و تامین اقلام پروژه",
    description:
      "شرکت ژیوار صنعت کیان به عنوان یک مجموعه بین‌المللی در زمینه تأمین و خدمات مرتبط با پروژه‌های صنعتی و معدنی، با هدف ارائه راهکارهای جامع و مؤثر به صنایع مختلف فعالیت می‌کند. ما با بهره‌گیری از دانش فنی، تیم متخصص و شبکه‌ای گسترده از تأمین‌کنندگان و شرکای تجاری در سراسر جهان، نیازهای مشتریان خود را با بالاترین کیفیت و در کوتاه‌ترین زمان ممکن برآورده می‌کنیم.",
  },
};

const sections = [
  {
    title: "تأمین و خرید",
    images: [
      { src: "service-1.jpeg", alt: "service-1" },
      { src: "service-2.jpeg", alt: "service-2" },
      { src: "service-3.jpeg", alt: "service-3" },
      { src: "service-4.jpeg", alt: "service-4" },
      { src: "service-5.jpeg", alt: "service-5" },
    ],
    services: [
      {
        id: 0,
        title: "تأمین اقلام پروژه",
        desc: "ما در زمینه تأمین انواع تجهیزات و ملزومات پروژه‌های صنعتی و معدنی فعالیت می‌کنیم. خدمات ما شامل شناسایی نیازهای پروژه، انتخاب تأمین‌کنندگان معتبر و ارائه بهترین راهکارها برای کاهش هزینه‌ها و بهینه‌سازی زنجیره تأمین است.",
      },
      {
        id: 1,
        title: "تأمین اقلام یدکی و مصرفی کارخانجات",
        desc: "با توجه به اهمیت تأمین به‌موقع قطعات یدکی و مصرفی در کاهش توقفات خطوط تولید، شرکت ما این اقلام را با تضمین کیفیت و از بهترین تأمین‌کنندگان بین‌المللی فراهم می‌کند.",
      },

      {
        id: 2,
        title: "تأمین و سفارش‌گذاری اقلام اساسی کارخانه‌ها",
        desc: "ما در تأمین تجهیزات و اقلام حیاتی و استراتژیک کارخانه‌ها، از جمله ماشین‌آلات، تجهیزات تخصصی و مواد اولیه، خدمات کامل ارائه می‌دهیم. تیم ما با شناسایی نیازهای کارخانه‌ها، روند سفارش‌گذاری را تسهیل و مدیریت می‌کند.",
      },
      {
        id: 3,
        title: "مهندسی خرید و سفارش قطعات ساختنی",
        desc: "با بهره‌گیری از تجربه و دانش مهندسی، ما در سفارش و تولید قطعات ساختنی بر اساس مشخصات فنی مورد نیاز، خدمات تخصصی ارائه می‌دهیم. این خدمات شامل طراحی، انتخاب مواد اولیه، نظارت بر فرآیند تولید و تضمین کیفیت قطعات است.",
      },
      {
        id: 4,
        title: "خرید و فروش مواد اولیه صنایع معدنی و پتروشیمی",
        desc: "ما به عنوان یکی از تأمین‌کنندگان معتبر مواد اولیه صنایع معدنی و پتروشیمی، در زمینه خرید و فروش این محصولات فعالیت می‌کنیم. شبکه گسترده ما در بازارهای جهانی، امکان ارائه مواد با کیفیت و قیمت رقابتی را فراهم کرده است.",
      },
      {
        id: 5,
        title: "خدمات لجستیک و حمل بین‌المللی",
        desc: "ما خدمات لجستیکی و حمل‌ونقل بین‌المللی را به صورت جامع ارائه می‌دهیم. این خدمات شامل برنامه‌ریزی حمل، مدیریت اسناد، هماهنگی‌های گمرکی و ارائه راهکارهای بهینه برای کاهش هزینه‌های حمل است.",
      },
      {
        id: 6,
        title:
          "برنامه‌ریزی و آماده‌سازی جدول ساختار شکست سفارشات و زیرساخت‌های تأمین",
        desc: "ما با استفاده از تکنیک‌های مدرن مدیریتی، جدول ساختار شکست سفارشات و زیرساخت‌های تأمین را برای پروژه‌های مختلف تدوین و پیاده‌سازی می‌کنیم. این فرآیند به شفاف‌سازی مسیر تأمین و افزایش بهره‌وری کمک می‌کند.",
      },
      {
        id: 7,
        title: "فراهم‌کردن و پیاده‌سازی فرآیند تأمین ERP",
        desc: "در راستای مدرن‌سازی فرآیندهای تأمین، ما سیستم‌های ERP را برای مدیریت زنجیره تأمین طراحی و اجرا می‌کنیم. این خدمات شامل شناسایی نیازها، انتخاب نرم‌افزار مناسب و نظارت بر مراحل پیاده‌سازی است.",
      },
    ],
  },
];

export default function CommercialDepartment() {
  return (
    <div className="mx-auto text-right">
      <PageCover
        title="بازرگانی و تامین اقلام پروژه"
        bgImage="projects-pattern"
      />

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-16">
            <p className="text-lg xl:text-xl text-justify text-gray-600 lg:w-[60%]">
              شرکت <span className="font-bold italic"> ژیوار صنعت کیان</span> به
              عنوان یک مجموعه بین‌المللی در زمینه تأمین و خدمات مرتبط با
              پروژه‌های صنعتی و معدنی، با هدف ارائه راهکارهای جامع و مؤثر به
              صنایع مختلف فعالیت می‌کند. ما با بهره‌گیری از دانش فنی، تیم متخصص
              و شبکه‌ای گسترده از تأمین‌کنندگان و شرکای تجاری در سراسر جهان،
              نیازهای مشتریان خود را با بالاترین کیفیت و در کوتاه‌ترین زمان ممکن
              برآورده می‌کنیم.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="mb-16 lg:mb-24 xl:mb-32 last:mb-0">
              <div
                className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {section.images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                          index === 4 ? "col-span-2" : ""
                        }`}
                      >
                        <Image
                          src={"/images/" + image.src}
                          alt={image.alt}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <h2 className="text-white text-xl font-bold text-center">
                            {image.title}
                          </h2>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <AccordionItem data={section.services} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
