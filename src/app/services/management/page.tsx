import React from "react";
import { PageCover } from "@/components/pageCover";
import { Metadata } from "next";
import { AccordionItem } from "@/components/accordion/accordionItem";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "خدمات | مدیریت پروژه های صنعتی و معدنی",
  },
  description:
    "تخصص شرکت ژیوار صنعت کیان ، ارائه خدمات جامع مدیریت پروژه است که به کارفرما کمک می‌کند تا پروژه‌های خود را به‌موقع، طبق محدوده و بودجه‌ی تعریف‌شده، و با کیفیت مورد نظر به پایان برساند. تیم ما متعهد به ارائه خدمات با کیفیت بالا متناسب با نیازهای منحصر به فرد کارفرما به ویژه در پروژه‌های EPC (مهندسی، خرید و اجرا) است.",
  alternates: {
    canonical: "/services/management",
  },
  openGraph: {
    title: "خدمات | مدیریت پروژه های صنعتی و معدنی",
    description:
      "تخصص شرکت ژیوار صنعت کیان ، ارائه خدمات جامع مدیریت پروژه است که به کارفرما کمک می‌کند تا پروژه‌های خود را به‌موقع، طبق محدوده و بودجه‌ی تعریف‌شده، و با کیفیت مورد نظر به پایان برساند. تیم ما متعهد به ارائه خدمات با کیفیت بالا متناسب با نیازهای منحصر به فرد کارفرما به ویژه در پروژه‌های EPC (مهندسی، خرید و اجرا) است.",
  },
};

const sections = [
  {
    images: [
      { src: "management-1.jpg", alt: "management-1" },
      { src: "management-2.jpg", alt: "management-2" },
      { src: "management-3.jpg", alt: "management-3" },
      { src: "management-4.jpg", alt: "management-4" },
      { src: "management-5.jpg", alt: "management-5" },
    ],
    services: [
      {
        id: 0,
        title: "مهندسی",
        desc: "دپارتمان مهندسی شرکت ژیوار صنعت کیان با هدف ارائه خدمات مهندسی و تکنولوژی مورد نیاز کارفرمایان در کلیه زمینه های معدنی، صنعتی و ... از مرحله مقدماتی تا مراحل نهایی بهره برداری تشکیل شده است. تیم مهندسی شرکت دارای مهارت های متعددی بوده و در بسیاری از زمینه های مهندسی تخصص دارد. این تیم متشکل از مهندسین، متخصصین فنی، گروه تحقیقات و اعضای پشتیبانی اجرائی می باشد که امکان دستیابی مشتریان به افراد کلیدی که متعهد به انجام کار به گونه ای مناسب و موثر می باشند را فراهم می سازد. واحد طراحی و مهندسی این شرکت با تکیه بر دانش و تجربه تیم فنی خود و با استفاده از تکنولوژی‌های روز دنیا، همواره در تلاش است تا با ارائه راهکارهای نوآورانه و کارآمد، نیازهای مشتریان خود را در زمینه‌های مختلف صنعتی برآورده سازد و نقش موثری در توسعه و پیشرفت صنعت کشور ایفا نماید. این واحد با رویکردی خلاقانه و دانش‌محور، همواره به دنبال بهبود و ارتقاء خدمات خود بوده و از هیچ کوششی برای دستیابی به این اهداف فروگذار نخواهد کرد. این شرکت کلیه خدمات مربوط به ارزیابی اقتصادی، توسعه پروژه، مدیریت پروژه، مهندسی مقدماتی و تفصیلی، خدمات تدارک کالا، مدیریت قرارداد، نظارت بر ساخت، راه اندازی، همیاری در راهبری و آموزش را به مشتریان خود ارائه می دهد.",
      },
      {
        id: 1,
        title: "خرید",
        desc: "خدمات تامین تجهیزات شامل مدیریت خرید و تامین تجهیزات و مواد اولیه صنعتی، تامین از تامین‌کنندگان معتبر بین‌المللی و نظارت بر کیفیت تجهیزات می باشد. واحد تامين تجهيزات این شركت با تکیه و تسلط بر دانش تجهیز و مهندسی خرید و تسلط كامل به قوانین تجارت بین الملل و قوانین داخلی، عهده دار تأمین تجهیزات و ماشین‌آلات صنعتی با کیفیت مورد نیاز پروژه ها از تأمین‌کنندگان معتبر داخلی و خارجی می باشد. در این راستا تجهیزات بخش های داخلی پروژه ها از تامین كنندگان و سازندگان معتبر داخلی و تجهیزات خارجی پروژه ها در چهارچوب الزامات هر پروژه، از سازندگان معتبر و صاحب تكنولوژی دنیا تامین می گردد. لازم به ذكر است عملیات تامین تجهیزات از مرحله انعقاد قرارداد تا تحویل به سایت پروژه شامل شناسایی تامین كنندگان، رایزنی ها، بازرسی، حمل، بیمه و ترخیص توسط این واحد هدایت و راهبری می گردد.",
      },

      {
        id: 2,
        title: "اجرا",
        desc: "مدیریت ساخت و اجرا شامل مدیریت پروژه‌های اجرایی، نظارت بر اجرای پروژه‌های صنعتی، کنترل هزینه و زمان‌بندی، اجرای پروژه‌ها مطابق استانداردهای بین‌المللی می باشد. عملیات اجرایی پروژه ها از مرحله تحویل زمین تا بهره برداری توسط تیم های اجرایی مجرب متشكل از متخصصان و كارشناسان كارآمد شركت ژیوار صنعت کیان اجرا و یا مدیریت می گردد. این مراحل شامل تجهیز كارگاه، تدارک ماشین آلات و ابزار و تجهیزات، تسطیح، ایجاد راه های دسترسی و ساختمان های موقت، اجرای عملیات ساختمانی و احداث ساختمان های دائم، نصب تجهیزات مكانیكی، برقی، كنترلی و ابزار دقیق و اجرای راه اندازی سرد و گرم همراه با آموزش پرسنل كارفرما می باشد.",
      },
    ],
  },
];

export default function ManagementDepartment() {
  return (
    <div className="mx-auto text-right">
      <PageCover
        title="مدیریت پروژه های صنعتی و معدنی"
        bgImage="projects-pattern"
      />

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-16">
            <p className="text-lg xl:text-xl text-justify text-gray-600 lg:w-[60%]">
              تخصص شرکت{" "}
              <span className="font-bold italic">ژیوار صنعت کیان </span>، ارائه
              خدمات جامع مدیریت پروژه است که به کارفرما کمک می‌کند تا پروژه‌های
              خود را به‌موقع، طبق محدوده و بودجه‌ی تعریف‌شده، و با کیفیت مورد
              نظر به پایان برساند. تیم ما متعهد به ارائه خدمات با کیفیت بالا
              متناسب با نیازهای منحصر به فرد کارفرما به ویژه در پروژه‌های EPC
              (مهندسی، خرید و اجرا) است.
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
