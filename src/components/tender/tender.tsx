"use client";
import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { Tender } from "@/types/tender";

export function TenderComponent({ tender }: { tender: Tender }) {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <div
        className="relative bg-projects-pattern pt-[80px] lg:pt-[260px] 
      lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
      before:absolute before:content-[''] before:left-0 before:top-0
      before:w-full before:h-full before:opacity-0 before:z-[-1]"
      >
        <nav
          aria-label="breadcrumb"
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative hidden md:block"
        >
          <ol className="flex flex-wrap items-center absolute bottom-[20px] rounded-md bg-opacity-60 px-[1rem]">
            <li className="flex items-center text-lg antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
              <Link href="/tenders" className="opacity-60">
                فراخوان ها
              </Link>
              <span className="mx-2 text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li className="flex items-center text-lg antialiased font-normal leading-normal text-blue-gray-900">
              <span>{tender.data.title}</span>
            </li>
          </ol>
        </nav>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="lg:text-2xl font-bold text-center text-gray-900 mb-2">
            {tender.data.title}
          </h1>
        </div>
      </div>
      <div className="xl:w-[60%] mx-auto px-12 mt-8">
        <div className="bg-white overflow-hidden mb-8 print:shadow-none">
          <h2 className="text-xl font-semibold mb-6">جزئیات فراخوان</h2>
          <div className="overflow-auto">
            <table
              ref={contentRef}
              className="w-full text-sm border-collapse lg:table-fixed"
            >
              <tbody>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 text-sm font-medium text-gray-900">
                    عنوان فراخوان
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.title}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    تاریخ بازگشایی اسناد
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.start_date}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    نوع فراخوان
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.tender_category.title}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    مهلت تحویل اسناد
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.doc_submission_deadline}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    وضعیت
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.status}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    محل تحویل اسناد
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.doc_submission_location}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    شماره فراخوان
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.number}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    نام واحد
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.department}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    تاریخ شروع
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.start_date}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    تلفن
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.phone}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    تاریخ پایان
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.end_date}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    ایمیل
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-gray-500">
                    {tender.data.email}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                    توضیحات
                  </td>
                  <td
                    colSpan={3}
                    className="border border-gray-300 py-2 px-4 text-justify text-gray-500"
                  >
                    {tender.data.text}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center space-x-4 space-y-4 print:hidden mt-4">
            <a
              href={tender.data.full_path}
              target="_blank"
              download
              className="bg-blue-500 hover:bg-blue-600 ml-4 cursor-pointer text-white py-2 px-4 rounded inline-flex items-center transition duration-300 print:hidden"
            >
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              دانلود اسناد فراخوان
            </a>

            <button
              onClick={() => handlePrint()}
              className="bg-blue-500 hover:bg-blue-600 ml-4 cursor-pointer text-white py-2 px-4 rounded inline-flex items-center transition duration-300"
            >
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              چاپ فراخوان
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
