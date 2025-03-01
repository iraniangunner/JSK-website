import React from "react";
import { PageCover } from "@/components/pageCover";
import { AccordionItem } from "@/components/accordion/accordionItem";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Operation" });

  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    alternates: {
      canonical: "/services/operation",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

const sections = [
  {
    images: [
      { src: "operation-1.jpg", alt: "operation-1" },
      { src: "operation-2.jpg", alt: "operation-2" },
      { src: "operation-3.jpg", alt: "operation-3" },
      { src: "operation-5.jpg", alt: "operation-5" },
      { src: "operation-4.jpg", alt: "operation-4" },
    ],
    services: [
      {
        id: 0,
        title: "تأمین نیروی انسانی",
        desc: [
          "تأمين نيروي انساني با تجربه و آموزش دیده و مرتبط با نوع فعالیت و به تعداد کافی، در تمام رده‌های شغلی مورد نياز برای اجرا و تکمیل به موقع کارها",
          "تعهد به اعمال مدیریت، کنترل و نظارت بر انجام صحیح کارها، به وسیله افراد واجد صلاحیت است",
          "به کار گرفتن روش‌های اجرایی مناسب و رعایت توالی کارها",
          "پاسخگویی به شکایات و اجرای آراء مربوط به هیات‌های حل اختلاف کارگری و سایر تعهدات قانون کار",
        ],
      },
      {
        id: 1,
        title: "برنامه ریزی و هماهنگی",
        desc: [
          "تهیه و تنظیم و ارائه سازمان، روش اجرا، برنامه تولید و نگهداری و تعمیرات",
          "تهیه و ارائه برنامه، نمودارها و جدول‌هاي پيشرفت كار تولید",
          "انجام هماهنگی لازم با دیگر پیمانکاران یا گروههای اجرایی مرتبط با موضوع بهره‌برداری",
          "تکمیل و ارائه مستمر مستندات کنترل تولید و فرآیند (لاگ شیت‌ها و کارت‌های شناسایی-ردیابی تولید و ...) ",
        ],
      },

      {
        id: 2,
        title:
          "تدارک مواد، ابزار، امکانات، تجهیزات و ماشین آلات خارج از خطوط تولید",
        desc: [
          "تهیه و تدارک مواد، مصالح، ابزار، ماشین آلات، تجهیزات، لوازم کار، وسایل حمل و نقل، سوخت (بنزین، گازوئیل، گاز و ...) و به طور کلی تمام آنچه برای اجرای موضوع بهره‌برداری لازم می‌باشد",
          "تأمین امکانات رفت و آمد، ایجاد امکانات لازم به منظور تأمین مسکن و خوراک مناسب کارکنان، تأمین امکانات اولیه پزشکی، تأمین لوازم و تجهیزات ایمنی و حفاظت فردی مناسب با نوع کار",
          "تامین ماشین‌آلات دارای تأییدات مرتبط و کنترل و نظارت مطابق چک لیست‌های نظارت و ارزیابی",
          "سرویس دوره‌ای، نگهداری و تعمیرات ماشین‌آلات",
        ],
      },
      {
        id: 3,
        title: "نگهداری و تعمیرات خطوط تولید",
        desc: [
          "انجام عملیات نگهداری و تعمیرات از کلیه واحدها و سیستم‌های تولیدی",
          "انجام تعمیرات دوره‌ای و اساسی بر اساس برنامه مصوب و دستورالعمل‌های ابلاغی",
          "انجام تعمیرات اضطراری بر اساس دستورالعمل‌های ابلاغی",
          "تهیه قطعات یدکی و مواد مصرفی مورد نیاز بهره‌برداری",
        ],
      },
      {
        id: 4,
        title: "بازرسی و کنترل کیفی کار",
        desc: [
          "تهیه، تدوین و تکمیل فرم‌های بازرسی تجهیزات",
          "تهیه، تدوین و تکمیل شناسنامه‌های تجهیزات",
          "تهیه، تدوین و تکمیل استانداردهای نگهداری و تعمیرات تجهیزات",
        ],
      },
      {
        id: 5,
        title: "حفاظت و مراقبت از کار",
        desc: [
          "حفظ و نگهداري مصالح، تجهيزات، ماشين‌آلات خط تولید، زمين‌ها، راه‌ها و تأسيسات",
        ],
      },
      {
        id: 6,
        title: "بیمه کار و مسئولیت‌ها",
        desc: [
          "تهیه بیمه نامه های لازم برای پوشش تعهدات قراردادی",
          "پوشش کامل بیمه مسئولیت مدنی به انضمام کلوزهای مربوطه برای پوشش هر نوع خسارت اعم از حوادث منجر به آسیب‌دیدگی کارکنان و سایر افرادی که به نحوی در ارتباط با کارها، دچار حادثه و یا سانحه شوند و همچنین بیمه اشخاص ثالث، برای پوشش ناشی از صدمات جانی یا فوت یا زیان و خسارت وارده به اموال و ... در اثر اجرای قرارداد.",
          "بیمه ماشین‌آلات، تجهیزات، وسایل نقلیه و سایر تأسیسات مورد نیاز برای انجام کارها",
        ],
      },
    ],
  },
];

export default async function OperationDepartment() {
  const locale = await getLocale();
  return (
    <div className="mx-auto text-right">
      <PageCover
        title={`${
          locale === "fa"
            ? "بهره برداری پروژه های صنعتی و معدنی"
            : "Industrial & Mining Operations"
        }`}
      />

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex justify-center items-center">
            <div className="lg:w-[70%]">
              <p className="text-lg xl:text-xl text-justify text-gray-600">
                خدمات شرکت{" "}
                <span className="font-bold italic">ژیوار صنعت کیان</span> در
                حوزه بهره برداری پروژه های صنعتی شامل دو مرحله بهره برداری
                آزمایشی و تجاری بوده و دربرگیرنده حوزه های ذیل خواهد بود:
              </p>
            </div>
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
