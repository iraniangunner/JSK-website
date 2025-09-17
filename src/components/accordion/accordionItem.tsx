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
import { useLocale } from "next-intl";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <div
      className={`border border-[#EC9123] p-3 rounded-full ${
        id === open ? "bg-white" : ""
      } bg-[#EC9123] text-white transition-all`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180 text-[#EC9123]" : ""
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
  const locale = useLocale();

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
              className={`${locale === "fa" ? "text-right" : "text-left"}`}
              style={{
                fontFamily: `${
                  locale === "fa"
                    ? "var(--font-yekanbakh)"
                    : "var(--font-inter)"
                }`,
              }}
              onClick={() => handleOpen(index + 1)}
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody
              className={`font-normal text-[16px] ${
                locale === "fa" ? "text-right" : "text-left"
              }`}
              style={{
                fontFamily: `${
                  locale === "fa"
                    ? "var(--font-yekanbakh)"
                    : "var(--font-inter)"
                }`,
              }}
            >
              {Array.isArray(item.desc) ? (
                <ol
                  className={`list-disc ${locale === "fa" ? "pr-5" : "pl-5"}`}
                >
                  {item.desc.map((item, index) => (
                    <li
                      key={index}
                      className="mt-2 sm:text-justify sm:leading-8"
                    >
                      {item}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="sm:text-justify sm:leading-10">{item.desc}</p>
              )}

              {item.link ? (
                <Link
                  href={item.link}
                  className="inline-block px-4 py-2 text-white bg-[#EC9123] 
                mt-4 border border-[#EC9123] hover:bg-white hover:text-[#EC9123] 
                transition-all"
                >
                  {locale === "fa" ? "مشاهده بیش تر" : "View More"}
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
