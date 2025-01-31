"use client";
import pic1 from "../../public/images/pic1.jpg";
import pic2 from "../../public/images/pic2.jpg";
import pic3 from "../../public/images/pic3.jpg";
import { motion } from "framer-motion";
import { AccordionItem } from "./accordion/accordionItem";
import Image from "next/image";

const data = [
  {
    id: 0,
    title: "بازرگانی و تامین اقلام پروژه",
    desc: "در دنیای پیچیده تجارت، تامین کالا یکی از تخصصی‌ترین حوزه‌های تجارت بین‌المللی محسوب می‌شود. ژيوار صنعت کیان با­تجربه و سوابق درخشان در امور بازرگانی نزد تمامی فعالان اقتصادی به عنوان چهره‌ای مطرح در زمینه تامین کالا و خدمات، واردات و صادرات شناخته­ شده است. مهم‌ترین اصول و نیازها در واردات و صادرات، تامین خدمات ارزی بازرگانی و نیما، فرآیند خرید و تامین داخلی و خارجی، آشنایی با اصول و فنون بازاریابی داخلی و بین‌المللی و حمل ­و نقل  است که تمامی موارد مربوطه به این فرآیندها توسط شرکت ژیوار صنعت کیان انجام می‌شود.",
    link: "/services/commerce",
  },
  {
    id: 1,
    title: "بهره برداری پروژه های صنعتی و معدنی",
    desc: "مدیریت و اجرای خدمات راه‌اندازی، تعمیر و نگهداری، تأسیسات و تجهیزات و دوره‌های آموزشی در صنایع صنعتی و معدنی و سایر فرآیندهای مرتبط با بهره‌برداری پروژه‌ها توسط شرکت ژیوار صنعت کیان انجام می‌شود.",
    link: "/services/operation",
  },
  {
    id: 2,
    title: "مدیریت پروژه های صنعتی و معدنی",
    desc: "ماهیت متغیر صنایع و همچنین افزونی پیچیدگی‌های پروژه‌های جدید، شرکت‌های ایرانی را بر آن داشته‌است تا توانمندی‌های خود را بهبود بخشیده و رویکردهای جدید و منظمی را به منظور اطمینان از اجرای موفق پروژه‌ها بکار گیرند و از سویی بکارگیری رویکردهای نوین در مدیریت، ساخت، پیش راه‌اندازی و راه‌اندازی در پروژه‌های صنعتی را الزام‌آور می‌سازد.",
    link: "/services/management",
  },
];

export default function ServicesSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] xl:w-[80%] mx-auto gap-10 pb-10 pt-20 overflow-hidden lg:overflow-visible">
        <div className="order-2 lg:order-1 max-w-full flex flex-col  justify-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            className="text-xl overflow-hidden text-black"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            خدمات ژیوار صنعت کیان
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            className="mt-6 mb-8 text-justify overflow-hidden leading-8 text-black"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            شرکت ژیوار صنعت کیان متشکل از تیمی جوان، با تجربه و با دانش فنی در
            سال 1400 با هدف ایفاي نقش مهمتري در توسعه کشور تاسیس گردیده است. این
            شرکت توانسته است در جهت حفظ دارایی هاي مشتریان، ایمنی و دوستی با
            محیط زیست، مسئولیت پذیري، اخلاق تجاري، نوآوري و تعالی، گام هاي خیره
            کننده اي بردارد و با اتکاء به تجارب ارزشمند خویش در اجراي پروژه هاي
            صنعتی و به منظور جذب و انجام پروژه هاي ملی اقدام به هم افزایی نموده
            و خود را براي اجراي پروژه هاي بزرگ صنعتی و معدنی، ایستگاه هاي پمپاژ
            و خطوط لوله انتقال آب،تاسیسات تصفیه خانه هاي آب، نفت و گاز تجهیز
            نموده و امیدوار است در آبادانی و توسعه میهن عزیز خویش نقش بیشتر و
            موثرتري داشته باشند.
          </motion.p>
          <AccordionItem data={data} />
        </div>

        <div className="flex items-start order-1 lg:order-2">
          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className="w-[75%] mr-[80px]"
            >
              <motion.div
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={pic1}
                  alt=""
                  width={370}
                  height={500}
                  className="block h-full border-[5px] border-solid border-[#fff] max-w-full"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className="w-[75%] absolute right-0 top-[25%]"
            >
              <motion.div
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={pic2}
                  alt=""
                  className="block h-full border-[5px] border-solid border-[#fff] max-w-full"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className="relative z-[1] mt-[-15%] ml-[-20%] pr-[80px]"
            >
              <motion.div
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={pic3}
                  alt=""
                  className="block h-full border-[5px] border-solid border-[#fff] max-w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
