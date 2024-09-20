"use client";
import pic1 from "../public/images/pic1.jpg";
import pic2 from "../public/images/pic2.jpg";
import pic3 from "../public/images/pic3.jpg";
import { motion } from "framer-motion";
import { AccordionItem } from "./accordion/accordionItem";

export default function ServicesSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] xl:w-[70%] mx-auto gap-10 py-20 overflow-hidden lg:overflow-visible">
        <div className="order-2 lg:order-1 max-w-full">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            className="text-xl overflow-hidden"
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
            className="mt-6 mb-8 text-justify overflow-hidden leading-8"
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
          <AccordionItem />
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
              <motion.img
                src={pic1.src}
                alt="pic1"
                className="border-[5px] border-solid border-[#fff] max-w-full"
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
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
              <motion.img
                src={pic2.src}
                alt="pic2"
                className="border-[5px] border-solid border-[#fff] max-w-full"
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
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
              <motion.img
                src={pic3.src}
                alt="pic3"
                className="border-[5px] border-solid border-[#fff] max-w-full"
                animate={{
                  translateX: [0, 10, 5, 10, 0],
                  translateY: [0, 10, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
