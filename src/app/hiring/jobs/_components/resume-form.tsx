"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import DateObject from "react-date-object";

type FormInputs = {
  fullName: string;
  email: string;
  phone: string;
  maritalStatus: string;
  militaryService: string;
  latestEducationalQualification: string;
  university: string;
  major: string;
  gender: string;
  career: string;
  coverLetter: string;
  birthDate: Date | null;
};

function convertToPersianDigits(str: string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/\d/g, (x) => persianDigits[parseInt(x)]);
}

export default function ResumeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputs>();
  const [file, setFile] = useState<File | null>(null);
  const [selectedGender, setSelectedGender] = useState("");

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // if (data.birthDate) {
    //   const formattedDate = new DateObject(data.birthDate).format("YYYY/MM/DD");
    //   console.log(convertToPersianDigits(formattedDate));
    // }
    console.log(data);
    console.log(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-10" lang="fa" dir="rtl">
            <h1 className="text-2xl font-bold mb-2">
              فرصت شغلی مورد نظر خود را پیدا نکردید؟
            </h1>
            <p className="text-sm text-gray-600">
              رزومه خود را ارسال کنید. زمانی که فرصت شغلی مورد نظر فعال شد، آن
              را بررسی می‌کنیم.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نام و نام خانوادگی *
                </label>
                <input
                  {...register("fullName", {
                    required: "نام و نام خانوادگی الزامیست",
                  })}
                  id="fullName"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  تاریخ تولد *
                </label>
                <Controller
                  control={control}
                  {...register("birthDate", {
                    required: "تاریخ تولد الزامیست",
                  })}
                  name="birthDate"
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      value={value}
                      onChange={onChange}
                      calendar={persian}
                      // placeholder="تاریخ تولد را وارد کنید"
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      containerClassName="w-full"
                    />
                  )}
                />
                {errors.birthDate && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.birthDate.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  جنسیت *
                </label>
                <select
                  {...register("gender", {
                    required: "جنسیت الزامیست",
                  })}
                  id="gender"
                  defaultValue=""
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
                {errors.gender && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="maritalStatus"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  وضعیت تاهل *
                </label>
                <select
                  {...register("maritalStatus", {
                    required: "وضعیت تاهل الزامیست",
                  })}
                  id="maritalStatus"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="مجرد">مجرد</option>
                  <option value="متاهل">متاهل</option>
                </select>
                {errors.maritalStatus && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.maritalStatus.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="militaryService"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  وضعیت نظام وظیفه *
                </label>
                <select
                  {...register("militaryService", {
                    required:
                      selectedGender !== "زن"
                        ? "وضعیت نظام وظیفه الزامیست"
                        : false,
                  })}
                  disabled={selectedGender === "زن"}
                  id="militaryService"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="کارت پایان خدمت">کارت پایان خدمت</option>
                  <option value="معاف">معاف</option>
                  <option value="مشمول">مشمول</option>
                </select>
                {errors.militaryService && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.militaryService.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="latestEducationalQualification"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  آخرین مدرک تحصیلی *
                </label>
                <select
                  {...register("latestEducationalQualification", {
                    required: "آخرین مدرک تحصیلی الزامیست",
                  })}
                  id="latestEducationalQualification"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="سیکل">سیکل</option>
                  <option value="دیپلم">دیپلم</option>
                  <option value="فوق دیپلم">فوق دیپلم</option>
                  <option value="لیسانس">لیسانس</option>
                  <option value="فوق لیسانس">فوق لیسانس</option>
                  <option value="دکترا">دکترا</option>
                </select>
                {errors.latestEducationalQualification && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.latestEducationalQualification.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="university"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  دانشگاه محل تحصیل *
                </label>
                <input
                  {...register("university", {
                    required: "دانشگاه محل تحصیل الزامیست",
                  })}
                  id="university"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.university && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.university.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="major"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  رشته تحصیلی *
                </label>
                <input
                  {...register("major", {
                    required: "رشته تحصیلی الزامیست",
                  })}
                  id="major"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.major && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.major.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="career"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  میزان سابقه *
                </label>
                <select
                  {...register("career", {
                    required: "میزان سابقه الزامیست",
                  })}
                  id="career"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="کمتر از 3 سال">کمتر از 3 سال</option>
                  <option value="بین 3 تا 5 سال">بین 3 تا 5 سال</option>
                  <option value="بیش از 5 سال">بیش از 5 سال</option>
                </select>
                {errors.career && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.career.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ایمیل *
                </label>
                <input
                  {...register("email", {
                    required: "ایمیل ضروریست",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "آدرس ایمیل معتبر نیست",
                    },
                  })}
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                توضیحات
              </label>
              <textarea
                {...register("coverLetter")}
                id="coverLetter"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="در صورت تمایل توضیحات تکمیلی را در این بخش وارد کنید"
              ></textarea>
            </div>

            <div className="space-y-4">
              <div className="text-right" lang="fa" dir="rtl">
                <h3 className="font-semibold text-lg mb-2">آپلود رزومه</h3>
                <p className="text-sm text-gray-600">
                  لطفا فایل رزومه خود را آپلود کنید. (حجم حداکثر ۱۰ مگابایت)
                </p>
              </div>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="resume-upload"
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX (MAX. 10MB)
                    </p>
                  </div>
                  <input
                    id="resume-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {file && (
                <p className="text-sm text-gray-600">
                  Selected file: {file.name}
                </p>
              )}
              <div
                className="text-right text-sm text-blue-600"
                lang="fa"
                dir="rtl"
              >
                پر کردن فیلدهای ستاره‌دار ضروری است.
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
