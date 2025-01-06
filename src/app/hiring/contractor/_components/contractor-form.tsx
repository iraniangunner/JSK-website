"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  companyName: string;
  phoneNumber: string;
  mobileNumber: string;
  address: string;
  contractType: string[];
  birthday: string;
  file: FileList;
  description: string;
};

export function ContractorForm() {
  const [fileUploaded, setFileUploaded] = useState<File | null>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your server
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileUploaded(file);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg border shadow-md overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-10" lang="fa" dir="rtl">
            <h1 className="text-2xl font-bold mb-2">
              فرم درخواست همکاری شرکت ها
            </h1>
            <p className="text-sm text-gray-600">
              لطفاً فرم زیر را با دقت پر کنید. ما در اسرع وقت با شما تماس خواهیم
              گرفت.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نام و نام خانوادگی *
                </label>
                <input
                  {...register("name", {
                    required: "نام و نام خانوادگی الزامی است",
                  })}
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نام شرکت *
                </label>
                <input
                  {...register("companyName", {
                    required: "نام شرکت الزامی است",
                  })}
                  id="companyName"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1" 
                >
                  تلفن ثابت *
                </label>
                <input
                  {...register("phoneNumber", {
                    required: "شماره تلفن الزامی است",
                  })}
                  id="phoneNumber"
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  تلفن همراه
                </label>
                <input
                  {...register("mobileNumber")}
                  id="mobileNumber"
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                آدرس *
              </label>
              <textarea
                {...register("address", {
                  required: "آدرس شرکت الزامی است",
                })}
                id="address"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.address && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                نوع همکاری *
              </label>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  "پیمانکاری",
                  "تامین کننده",
                  "خدمات طراحی مهندسی",
                  "سرمایه گذاری",
                  "مشاوره",
                  "سایر",
                ].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      {...register("contractType", {
                        required: "انتخاب نوع همکاری الزامی است",
                      })}
                      id={`contractType-${type}`}
                      type="checkbox"
                      value={type}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`contractType-${type}`}
                      className="mr-2 block text-sm text-gray-900"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
              {errors.contractType && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.contractType.message}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div className="text-right" lang="fa" dir="rtl">
                <h3 className="text-sm font-medium text-gray-700">
                  آپلود فایل
                </h3>
                <p className="text-xs text-gray-600">
                  لطفا فایل خود را آپلود کنید. (حجم حداکثر ۵ مگابایت و فرمت فایل
                  باید pdf باشد)
                </p>
              </div>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">
                        برای آپلود کلیک کنید
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">PDF(MAX. 5MB)</p>
                  </div>
                  <input
                    {...register("file")}
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept=".pdf"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {fileUploaded && (
                <p className="mt-2 text-sm text-gray-600">
                  فایل انتخاب شده: {fileUploaded.name}
                </p>
              )}
              {errors.file && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.file.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                توضیحات
              </label>
              <textarea
                {...register("description")}
                id="description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="در صورت تمایل توضیحات تکمیلی را در این بخش وارد کنید"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                ارسال فرم
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
