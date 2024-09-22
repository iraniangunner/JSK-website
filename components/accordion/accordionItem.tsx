"use client";
import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import Link from "next/link";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <div
      className={`border border-[#ffa500] p-3 rounded-full ${
        id === open ? "bg-white" : ""
      } bg-[#ffa500] text-white transition-all`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180 text-[#ffa500]" : ""
        } h-5 w-5 transition-all`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}

const accordionData = [
  {
    id: 0,
    title: "بازرگانی و تامین اقلام پروژه",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
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

export function AccordionItem() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      {accordionData.map((item: any, index: any) => (
        <motion.div
          initial="hidden"
          key={index}
          whileInView="visible"
          className="overflow-hidden"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: (index + 1) * 0.2,
            ease: "easeIn",
          }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          <Accordion
            className="mb-1 px-4"
            key={index + 1}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
          >
            <AccordionHeader
              className="font-iransans"
              onClick={() => handleOpen(index + 1)}
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className="text-base font-normal font-iransans ">
              <p>{item.desc}</p>
              <Link
                href={item.link}
                className="inline-block px-4 py-2 text-white bg-[#ffa500] 
                mt-4 border border-[#ffa500] hover:bg-white hover:text-[#ffa500] 
                transition-all"
              >
                مشاهده بیش تر
              </Link>
            </AccordionBody>
          </Accordion>
        </motion.div>
      ))}
    </>
  );
}
