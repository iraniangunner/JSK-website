"use client";
import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

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

export function AccordionItem({ data }: { data: AccordionType[] }) {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div>
      {data.map((item, index) => (
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
            className="mb-1"
            key={index + 1}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
          >
            <AccordionHeader
              className="text-right"
              style={{ fontFamily: "var(--font-yekanbakh)" }}
              onClick={() => handleOpen(index + 1)}
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody
              className="font-normal text-[16px]"
              style={{ fontFamily: "var(--font-yekanbakh)" }}
            >
              {Array.isArray(item.desc) ? (
                <ol className="list-disc pr-5">
                  {item.desc.map((item, index) => (
                    <li key={index} className="mt-2 text-justify leading-8">
                      {item}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-justify leading-10">{item.desc}</p>
              )}

              {item.link ? (
                <Link
                  href={item.link}
                  className="inline-block px-4 py-2 text-white bg-[#ffa500] 
                mt-4 border border-[#ffa500] hover:bg-white hover:text-[#ffa500] 
                transition-all"
                >
                  مشاهده بیش تر
                </Link>
              ) : (
                ""
              )}
            </AccordionBody>
          </Accordion>
        </motion.div>
      ))}
    </div>
  );
}
