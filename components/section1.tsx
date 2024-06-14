"use client";
import React, { useState } from "react";
import pic1 from "../public/images/pic1.jpg";
import pic2 from "../public/images/pic2.jpg";
import pic3 from "../public/images/pic3.jpg";
import { motion } from "framer-motion";
import { title } from "process";
import { AccordionItem } from "./accordion/accordionItem";

export default function Section1() {
  // const [open, setOpen] = useState(false);

  // const toggle = (index: any) => {
  //   if (open == index) {
  //     // return setOpen(null);
  //   }
  //   setOpen(index);
  // };

  // const accordionData = [
  //   {
  //     id: 0,
  //     title: "بازرگانی و تامین اقلام پروژه",
  //     desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  //   },
  //   {
  //     id: 1,
  //     title: "بهره برداری پروژه های صنعتی و معدنی",
  //     desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  //   },
  //   {
  //     id: 2,
  //     title: "مدیریت پروژه های صنعتی و معدنی",
  //     desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  //   },
  // ];
  return (
    <section className="w-full my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-10">
        <div className="order-2 lg:order-1">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </motion.p>

          {/* {accordionData.map((data: any, index: any) => (
            <AccordionItem
              key={index}
              open={index === open}
              desc={data.desc}
              title={data.title}
              toggle={() => toggle(index)}
            />
          ))} */}
        </div>

        <div className="relative pr-[80px] mx-auto order-1 lg:order-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="w-[75%]"
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
            className="relative z-[1] mt-[-15%] ml-[-20%] w-[90%]"
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
    </section>
  );
}
