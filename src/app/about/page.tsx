import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";

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
        <main className="container mx-auto px-4 py-12 max-w-[850px]">
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">درباره شرکت</h2>
            <p className="text-lg leading-10 mb-6 text-justify">
              شرکت{" "}
              <span className="font-bold italic text-[#ffa500]">
                ژیوار صنعت کیان
              </span>{" "}
              متشکل از تیمی جوان، با تجربه و با دانش فنی در سال ۱۴۰۰ با هدف
              ایفای نقش مهمتری در توسعه کشور تاسیس گردیده است. این شرکت توانسته
              است در جهت حفظ دارایی های مشتریان، ایمنی و دوستی با محیط زیست،
              مسئولیت پذیری، اخلاق تجاری، نوآوری و تعالی، گام های خیره کننده ای
              بردارد و با اتکاء به تجارب ارزشمند خویش در اجرای پروژه های صنعتی و
              به منظور جذب و انجام پروژه های ملی اقدام به هم افزایی نموده و خود
              را برای اجرای پروژه های بزرگ صنعتی و معدنی، ایستگاه‌های پمپاژ و
              خطوط لوله انتقال آب،تاسیسات تصفیه خانه‌های آب، نفت و گاز تجهیز
              نموده و امیدوار است در آبادانی و توسعه میهن عزیز خویش نقش بیشتر و
              موثرتری داشته باشند.
            </p>
          </section>
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">پیام مدیر عامل</h2>
            <p className="text-lg leading-10 mb-6 text-justify">
              از بدو تاسیس شرکت{" "}
              <span className="font-bold italic text-[#ffa500]">
                ژیوار صنعت کیان
              </span>
              ، با جذب مدیران با تجربه و آشنا به مجموعه‌های تولیدی و بهره برداری
              در زمینه‌ی تخصص‌های مختلف گام‌های محکمی با پشتوانه‌ی فنی و تخصصی
              فوق العاده برای تصدی بهره‌برداری خطوط تولید برداشته است و با تکیه
              بر توان و تخصص نیروهای اجرائی، ستادی، بازرگانی و پشتیبانی و رفاهی
              توانسته است ضمن یکپارچه‌سازی انبارها و سفارشات، امور بازرگانی،
              منابع انسانی، تعمیرات و نگهداری، ساخت قطعه، دفاتر فنی و با تامین و
              خرید مناسب و به موقع قطعات و لوازم مورد نیاز خطوط تولید، نسبت به
              جمع آوری بانک اطلاعاتی کاملی از تامین کنندگان و سازندگان و
              فروشندگان قطعات مذکور اقدام نماید. شرکت ژیوار صنعت کیان بر پایه
              همپوشانی این استعدادها و امکانات موجود، قادر به ارائه کامل یا بخش
              وسیعی از خدمات مورد انتظار مشتریان بوده و پروژه های بزرگ را با
              کمترین هزینه و بالاترین کیفیت، از هر لحاظ تحت مدیریت خود قرار می
              دهد.
              <br />
              <br />
              <span className="italic">مسعود دلیری</span>
            </p>
          </section>
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">اهداف شرکت</h2>
            <p className="text-lg leading-10 mb-6 text-justify">
              شرکت{" "}
              <span className="font-bold italic text-[#ffa500]">
                ژیوار صنعت کیان
              </span>{" "}
              با هدف تامين خواسته هاي مشتريان و ساير ذينفعان و افزايش سطح
              رضايتمندي آنان در چارچوب سياست هاي تعيين شده خود فعاليت مي نمايد.
              این شرکت به عنوان هدف اصلی خود با تمرکز بر کیفیت، نوآوری ورضایت
              مشتریان تلاش می کند تا در صنعت پیمانکاری و بخصوص تامین تجهیزات
              جایگاه برتری داشته باشد. اهداف ما شامل ارائه خدمات برتر و متنوع،
              اجرای با دقت پروژه ها و استفاده از استانداردهای بین المللی و حفظ
              رضایت و اعتماد مشتریان است. از اهداف دیگر ما ایجاد یک فضای کاری
              متناسب با توانمندی ها و انگیزه کارکنان می باشد. ما به ارزش توسعه
              حرفه‌ای و ایجاد فرصت‌های رشد برای تیم شرکت توجه می‌کنیم. همچنین با
              بالا بردن سطح تخصص و دانش فنی آن ها، سعی می کنیم به جایگاه رهبری
              در این صنعت برسیم. اهمیت دیگری که به آن توجه می کنیم بهبود مداوم
              فرآیندهای عملیاتی و بهینه سازی استفاده از منابع به منظور افزایش
              کارآیی و اثربخشی است که با تمرکز بر این اهداف، ما به دنبال ایجاد
              یک شرکت پیشرو در صنعت پیمانکاری هستیم.
            </p>
          </section>
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">خط مشیء شرکت</h2>
            <p className="text-lg leading-10 mb-6 text-justify">
              شركت{" "}
              <span className="font-bold italic text-[#ffa500]">
                ژیوار صنعت کیان
              </span>{" "}
              با اعتقاد به حركت در مسير توسعه پايدار، تحول سازماني، حركت در جهت
              بهبود مستمر، ضمن توجه به الزامات سيستم هاي مديريت كيفيت، ايمني،
              بهداشت، محيط زيست، پذيرش مسئوليت هاي اقتصادي و اجتماعي، پايش ها و
              كنترل هاي برنامه ريزي شده را در فرآيند ها و فعاليت هاي خود به مورد
              اجرا گذاشته و با مديريت آنها مراتب تعهد خود را به بهبود مستمر در
              قبال الزامات نظام مديريت يكپارچه شامل ISO 9001:2015، ISO
              14001:2015، ISO 45001:2018 ابراز داشته و به منظور دستيابي به اهداف
              خود، جهت گيري هاي اصلي شركت را در محور هاي زير تنظيم نموده است:
              <ul className="list-disc pr-5 mt-5 ">
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    اجراء استانداردها و الزامات قانوني و تلاش در برآورده نمودن
                    خواسته هاي مشتريان
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    شناسايي، ارزيابي و كنترل مؤثر جنبه هاي محيط زيستي، مخاطرات
                    ايمني و بهداشت شغلي و رعايت الزامات قانوني مرتبط
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    آموزش، حفظ و توسعه سرمايه هاي انساني، جلب رضايت كاركنان و
                    ايجاد زمينه هاي مشاركت مؤثر آنان در فعاليت هاي بهبود
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    مديريت، توسعه و به روزآوري فرآيندها و فعاليت هاي سازماني
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    افزایش منابع تجهیزاتی و ماشین آلات، توسعه فضای کاری و برنامه
                    ريزي مطلوب و استفاده بهينه از منابع
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    تلاش براي تحقق كمي و كيفي برنامه هاي تكليفي توليد
                  </p>
                </li>
              </ul>
              <p className="text-lg leading-10 mb-6 text-justify mt-4">
                خط مشي اين شركت و اهداف تعيين شده آن به اطلاع كليه اعضاي شركت
                رسيده و در مقاطع زماني مشخص مورد بازنگري قرار مي گيرد. نماينده
                مديريت در سيستم هاي مديريتي چگونگي عملكرد و اثر بخشي نظام مديريت
                يكپارچه را به صورت منظم به مدير عامل گزارش مي نمايد. كليه
                مديران، مسئولين و كاركنان شركت، خود را متعهد به مشاركت فعال در
                انجام وظايف و عمل به الزامات اين سيستم مي دانند.
              </p>
            </p>
          </section>
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">خدمات شرکت</h2>
            <p className="text-lg leading-10 mb-6 text-justify">
              شركت{" "}
              <span className="font-bold italic text-[#ffa500]">
                ژیوار صنعت کیان
              </span>{" "}
              بنا به درخواست مشتریان خود، دامنه وسیعی از خدمات به شرح زیر
              راارائه می نماید:
              <ul className="list-disc pr-5 mt-5 ">
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    خدمات بهره برداری از خطوط تولید کارخانه های صنعتی و معدنی
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    ارائه کلیه خدمات بازرگانی خارجی و داخلی، لجستیک و تشریفات
                    گمرکی
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    خدمات تولید، تعمیرات و نگهداری، اصلاح و بهبود خطوط و ایمنی
                    کارخانه
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    تامین قطعات مواد مصرفی، انجام امور پشتیبانی تولید و اجرای
                    نظام 5S
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    خدمات تامین و مدیریت نیروی انسانی مورد نیاز و مرتبط جهت بهره
                    برداری
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    طراحی تفصیلی، مهندسی و مدیریت پروژه
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    خدمات مهندسی، تامین و راه‌اندازی پروژه‌‌های صنعتی و معدنی
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    خدمات احداث خطوط لوله انتقال نفت، گاز و فرآورده های پتروشیمی
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    پروژه های پالایشگاهی و تاسیسات پتروشیمی و پروژه‌های نیروگاهی
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    اجرای عملیات سیویل و ساختمانی
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    عملیات اجرایی خطوط لوله انتقال آب
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    خدمات احداث خطوط لوله انتقال آب و گاز و اجرای عملیات
                    مکانیکال خط لوله
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    ارائه خدمات بازرسی فنی و تسریع در ساخت
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-[#001c47] font-bold">
                    طراحی سیستم های اطلاعات مدیریت
                  </p>
                </li>
              </ul>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
