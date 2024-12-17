"use client";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const tenderDetails = {
  title: "مناقصه ساخت پروژه ساختمانی",
  type: "مناقصه",
  T_number: 7253465234,
  start_date: "1402/06/31",
  end_date: "1402/08/31",
  rules: "uysdgvyusdgvsudgvyusdgvgsdvugyusgvgsdgvdsgvsdvgysduv",
  deliveryLocation: "تهران، خیابان ولیعصر، پلاک 1234",
  deliveryDeadline: "1402/06/31",
  isUpload: false,
  openingDate: "1402/07/05",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",

  document: { name: "فرم شرکت در مناقصه", url: "/documents/form.pdf" },
  status: "فعال",
  contactNumber: "0765342377",
  unitName: "بازرگانی",
  contactEmail: "info@example.com",
};

export default function Tender() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
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
                {tenderDetails.title}
              </td>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                تاریخ بازگشایی اسناد
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.openingDate}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                نوع فراخوان
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.type}
              </td>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                مهلت تحویل اسناد
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.deliveryDeadline}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                وضعیت
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.status}
              </td>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                محل تحویل اسناد
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.deliveryLocation}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                شماره فراخوان
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.T_number}
              </td>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                نام واحد
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.unitName}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                تاریخ شروع
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.start_date}
              </td>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                تلفن
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.contactNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                تاریخ پایان
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.end_date}
              </td>
              <td className="border border-gray-300 py-2 px-4 font-medium text-gray-900">
                ایمیل
              </td>
              <td className="border border-gray-300 py-2 px-4 text-gray-500">
                {tenderDetails.contactEmail}
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
                {tenderDetails.description}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center space-x-4 space-y-4 print:hidden mt-4">
        <a
          // href={doc.url}
          download
          className="bg-blue-500 hover:bg-blue-600 ml-4 cursor-pointer text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 print:hidden"
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
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-green-500 ml-4 to-blue-500 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 hover:from-green-600 hover:to-blue-600"
        >
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          سوال خود را از ما بپرسید
        </button>
        <button
          onClick={() => handlePrint()}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
        >
          <svg
            className="w-5 h-5 ml-2"
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 print:hidden">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              تماس با ما
            </h2>
            <p className="mb-4 text-gray-600">
              برای طرح سوالات خود، لطفاً با این آدرس ایمیل تماس بگیرید:
            </p>
            <p className="font-bold mb-6 text-blue-600">
              {tenderDetails.contactEmail}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
}
