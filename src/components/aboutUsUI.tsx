"use client";
import { motion } from "framer-motion";

export function AboutUsDetailsUI() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="text-xl overflow-hidden max-w-lg"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
    >
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        درباره ژیوار صنعت کیان
      </h2>
      {/* <p className="mt-4 text-gray-600 text-lg">{detail}</p> */}
      <p className="mt-4 text-gray-600 text-lg text-justify">
        از بدو تاسیس شرکت ژیوار صنعت کیان، با جذب مدیران با تجربه و آشنا به
        مجموعه هاي تولیدي و بهره برداري در زمینه ي تخصص هاي مختلف گام هاي محکمی
        با پشتوانه ي فنی و تخصصی فوق العاده براي تصدي بهره برداري خطوط تولید
        برداشته است و با تکیه بر توان و تخصص نیروهاي اجرائی، ستادي، بازرگانی و
        پشتیبانی و رفاهی توانسته است ضمن یکپارچه سازي انبارها و سفارشات، امور
        بازرگانی، منابع انسانی، تعمیرات و نگهداري، ساخت قطعه، دفاتر فنی و با
        تامین و خرید مناسب و به موقع قطعات و لوازم مورد نیاز خطوط تولید، نسبت به
        جمع آوري بانک اطلاعاتی کاملی از تامین کنندگان و سازندگان و فروشندگان
        قطعات مذکور اقدام نماید. شرکت ژیوار صنعت کیان بر پایه همپوشانی این
        استعدادها و امکانات موجود، قادر به ارائه کامل یا بخش وسیعی از خدمات مورد
        انتظار مشتریان بوده و پروژه هاي بزرگ را با کمترین هزینه و بالاترین
        کیفیت، از هر لحاظ تحت مدیریت خود قرار می دهد.
      </p>
    </motion.div>
  );
}
