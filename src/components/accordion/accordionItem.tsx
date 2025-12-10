// "use client";
// import React from "react";
// import { useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
// import { motion } from "framer-motion";
// import { Link } from "@/i18n/routing";
// import { useLocale } from "next-intl";

// function Icon({ id, open }: { id: number; open: number }) {
//   return (
//     <div
//       className={`border border-[#EC9123] p-3 rounded-full ${
//         id === open ? "bg-white" : ""
//       } bg-[#EC9123] text-white transition-all`}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className={`${
//           id === open ? "rotate-180 text-[#EC9123]" : ""
//         } h-5 w-5 transition-all`}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//         />
//       </svg>
//     </div>
//   );
// }

// export function AccordionItem({ data }: { data: AccordionType[] }) {
//   const [open, setOpen] = useState(0);
//   const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
//   const locale = useLocale();

//   return (
//     <div>
//       {data.map((item, index) => (
//         <motion.div
//           initial="hidden"
//           key={index}
//           whileInView="visible"
//           className="overflow-hidden"
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             delay: (index + 1) * 0.2,
//             ease: "easeIn",
//           }}
//           variants={{
//             visible: { opacity: 1, x: 0 },
//             hidden: { opacity: 0, x: 100 },
//           }}
//         >
//           <Accordion
//             className="mb-1"
//             key={index + 1}
//             open={open === index + 1}
//             icon={<Icon id={index + 1} open={open} />}
//           >
//             <AccordionHeader
//               className={`${locale === "fa" ? "text-right" : "text-left"}`}
//               style={{
//                 fontFamily: `${
//                   locale === "fa"
//                     ? "var(--font-yekanbakh)"
//                     : "var(--font-inter)"
//                 }`,
//               }}
//               onClick={() => handleOpen(index + 1)}
//             >
//               {item.title}
//             </AccordionHeader>
//             <AccordionBody
//               className={`font-normal text-[16px] ${
//                 locale === "fa" ? "text-right" : "text-left"
//               }`}
//               style={{
//                 fontFamily: `${
//                   locale === "fa"
//                     ? "var(--font-yekanbakh)"
//                     : "var(--font-inter)"
//                 }`,
//               }}
//             >
//               {Array.isArray(item.desc) ? (
//                 <ol
//                   className={`list-disc ${locale === "fa" ? "pr-5" : "pl-5"}`}
//                 >
//                   {item.desc.map((item, index) => (
//                     <li
//                       key={index}
//                       className="mt-2 sm:text-justify sm:leading-8"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ol>
//               ) : (
//                 <p className="sm:text-justify sm:leading-10">{item.desc}</p>
//               )}

//               {item.link ? (
//                 <Link
//                   href={item.link}
//                   className="inline-block px-4 py-2 text-white bg-[#EC9123] 
//                 mt-4 border border-[#EC9123] hover:bg-white hover:text-[#EC9123] 
//                 transition-all"
//                 >
//                   {locale === "fa" ? "مشاهده بیش تر" : "View More"}
//                 </Link>
//               ) : (
//                 ""
//               )}
//             </AccordionBody>
//           </Accordion>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function AccordionItem({ data }: { data: AccordionType[] }) {
  const [open, setOpen] = useState<number>(1);
  const locale = useLocale();
  const isRTL = locale === "fa";

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const itemIndex = index + 1;
        const isOpen = open === itemIndex;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <div
              className={`
                relative bg-white rounded-2xl border-2 transition-all duration-300
                ${isOpen 
                  ? "border-[#EC9123] shadow-xl shadow-[#EC9123]/10" 
                  : "border-gray-100 hover:border-gray-200 hover:shadow-lg"
                }
              `}
            >
              {/* Accordion Header */}
              <button
                onClick={() => handleOpen(itemIndex)}
                className={`
                  w-full flex items-center justify-between gap-4 p-5 md:p-6
                  ${isRTL ? "text-right" : "text-left"}
                `}
                style={{
                  fontFamily: isRTL ? "var(--font-yekanbakh)" : "var(--font-inter)",
                }}
              >
                {/* Number badge */}
                <div
                  className={`
                    flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl
                    font-bold text-sm transition-all duration-300
                    ${isOpen 
                      ? "bg-[#EC9123] text-white" 
                      : "bg-gray-100 text-gray-500"
                    }
                  `}
                >
                  {String(itemIndex).padStart(2, "0")}
                </div>

                {/* Title */}
                <span
                  className={`
                    flex-1 text-lg md:text-xl font-semibold transition-colors duration-300
                    ${isOpen ? "text-[#EC9123]" : "text-[#2c4050]"}
                  `}
                >
                  {item.title}
                </span>

                {/* Icon */}
                <div
                  className={`
                    flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full
                    border-2 transition-all duration-300
                    ${isOpen 
                      ? "bg-white border-[#EC9123] rotate-180" 
                      : "bg-[#EC9123] border-[#EC9123]"
                    }
                  `}
                >
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isOpen ? "text-[#EC9123]" : "text-white"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`px-5 md:px-6 pb-6 ${isRTL ? "text-right" : "text-left"}`}
                      style={{
                        fontFamily: isRTL ? "var(--font-yekanbakh)" : "var(--font-inter)",
                      }}
                    >
                      {/* Divider */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />

                      {/* Content */}
                      <div className="text-gray-600 leading-relaxed">
                        {Array.isArray(item.desc) ? (
                          <ul className={`space-y-3 ${isRTL ? "pr-0" : "pl-0"}`}>
                            {item.desc.map((desc, descIndex) => (
                              <motion.li
                                key={descIndex}
                                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: descIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#EC9123]/10 rounded-lg mt-0.5">
                                  <svg
                                    className="w-3.5 h-3.5 text-[#EC9123]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.5 12.75l6 6 9-13.5"
                                    />
                                  </svg>
                                </span>
                                <span className="text-base leading-7 lg:text-justify">
                                  {desc}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-base leading-8 lg:text-justify">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      {/* Link Button */}
                      {item.link && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-6"
                        >
                          <Link
                            href={item.link}
                            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#EC9123] text-white font-semibold rounded-xl
                              hover:bg-[#2c4050] shadow-lg shadow-[#EC9123]/25 hover:shadow-[#2c4050]/25
                              transition-all duration-300"
                          >
                            <span>{isRTL ? "مشاهده بیشتر" : "View More"}</span>
                            <svg
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isRTL
                                  ? "rotate-180 group-hover:-translate-x-1"
                                  : "group-hover:translate-x-1"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active indicator line */}
              {isOpen && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute top-0 bottom-0 w-1 bg-[#EC9123] rounded-full ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}