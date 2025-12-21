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

  // Icons for each accordion item
  const icons = [
    <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    <path key="4" strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
    <path key="5" strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
  ];

  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        const itemIndex = index + 1;
        const isOpen = open === itemIndex;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <div
              className={`
                relative overflow-hidden transition-all duration-500 ease-out
                ${isOpen 
                  ? "bg-gradient-to-br from-[#2c4050] to-[#1a2a38] rounded-3xl shadow-2xl shadow-[#2c4050]/20" 
                  : "bg-white hover:bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#EC9123]/30 hover:shadow-lg"
                }
              `}
            >
              {/* Background Pattern for Open State */}
              {isOpen && (
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
              )}

              {/* Accordion Header */}
              <button
                onClick={() => handleOpen(itemIndex)}
                className={`
                  relative z-10 w-full flex items-center gap-4 p-5 md:p-6
                  ${isRTL ? "text-right flex-row-reverse" : "text-left"}
                `}
                style={{
                  fontFamily: isRTL ? "var(--font-yekanbakh)" : "var(--font-inter)",
                }}
              >
                {/* Icon Container */}
                <div
                  className={`
                    flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl
                    transition-all duration-500
                    ${isOpen 
                      ? "bg-[#EC9123] shadow-lg shadow-[#EC9123]/30 rotate-0" 
                      : "bg-gray-100 group-hover:bg-[#EC9123]/10"
                    }
                  `}
                >
                  <svg
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-[#2c4050]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {icons[index % icons.length]}
                  </svg>
                </div>

                {/* Title & Number */}
                <div className="flex-1 min-w-0">
                  <div className={`flex items-center gap-3 mb-1 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span
                      className={`text-xs font-bold tracking-wider ${
                        isOpen ? "text-[#EC9123]" : "text-gray-400"
                      }`}
                    >
                      {String(itemIndex).padStart(2, "0")}
                    </span>
                    <div className={`h-px flex-1 max-w-[30px] ${isOpen ? "bg-[#EC9123]/50" : "bg-gray-200"}`} />
                  </div>
                  <h3
                    className={`
                      text-lg md:text-xl font-bold transition-colors duration-300 truncate
                      ${isOpen ? "text-white" : "text-[#2c4050]"}
                    `}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Expand Icon */}
                <div
                  className={`
                    flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full
                    transition-all duration-500
                    ${isOpen 
                      ? "bg-white/10 rotate-180" 
                      : "bg-[#EC9123] shadow-md shadow-[#EC9123]/25"
                    }
                  `}
                >
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-white"
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
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`relative z-10 px-5 md:px-6 pb-6 ${isRTL ? "text-right" : "text-left"}`}
                      style={{
                        fontFamily: isRTL ? "var(--font-yekanbakh)" : "var(--font-inter)",
                      }}
                    >
                      {/* Decorative Line */}
                      <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                        <div className="w-14 h-px bg-gradient-to-r from-[#EC9123] to-transparent" />
                        <span className="text-[#EC9123] text-xs font-semibold tracking-widest uppercase">
                          {isRTL ? "جزئیات" : "Details"}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="text-white/80 leading-relaxed">
                        {Array.isArray(item.desc) ? (
                          <ul className="space-y-4">
                            {item.desc.map((desc, descIndex) => (
                              <motion.li
                                key={descIndex}
                                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + descIndex * 0.08 }}
                                className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                              >
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#EC9123]/20 rounded-xl mt-0.5">
                                  <svg
                                    className="w-4 h-4 text-[#EC9123]"
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
                                <span className="text-base leading-7 text-white/90">
                                  {desc}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-base leading-8 text-white/90">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      {/* Link Button */}
                      {item.link && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-8"
                        >
                          <Link
                            href={item.link}
                            className={`
                              group inline-flex items-center gap-3 px-6 py-3.5 
                              bg-[#EC9123] text-white font-semibold rounded-xl
                              hover:bg-white hover:text-[#2c4050]
                              shadow-lg shadow-[#EC9123]/30 hover:shadow-white/20
                              transition-all duration-300
                              ${isRTL ? "flex-row-reverse" : ""}
                            `}
                          >
                            <span>{isRTL ? "مشاهده بیشتر" : "View More"}</span>
                            <div className="w-6 h-6 flex items-center justify-center bg-white/20 group-hover:bg-[#2c4050]/10 rounded-full transition-colors duration-300">
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                  isRTL
                                    ? "rotate-180 group-hover:-translate-x-0.5"
                                    : "group-hover:translate-x-0.5"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Side Accent - Only for closed items */}
              {!isOpen && (
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 w-1 h-8 bg-[#EC9123]/0 hover:bg-[#EC9123] rounded-full transition-all duration-300 ${
                    isRTL ? "right-0" : "left-0"
                  }`} 
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}