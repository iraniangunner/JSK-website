"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";

type FormInputs = {
  name: string;
  email: string;
  marital: string;
  military: string;
  degree: string;
  university: string;
  major: string;
  gender: string;
  experience: string;
  resume_file: File;
  text: string;
  birthday: string;
};

const persianToEnglish = (str: string): string => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return str.replace(
    /[۰-۹]/g,
    (char) => englishNumbers[persianNumbers.indexOf(char)]
  );
};

const formatDateToString = (date: any) => {
  if (!date) return "";
  const persianDate = new DateObject(date).format("YYYY-MM-DD");
  return persianToEnglish(persianDate);
};

export default function ResumeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<FormInputs>();
  const [resume_file, setResumeFile] = useState<File | null>(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (selectedGender === "زن") {
      setValue("military", "");
    }
  }, [selectedGender]);

  const onSubmit: SubmitHandler<FormInputs> = async (data,e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Create FormData instance
      const formData = new FormData();

      // Append all form fields
      Object.keys(data).forEach((key) => {
        if (key !== "resume_file") {
          formData.append(key, data[key as keyof FormInputs]);
        }
      });

      // Append the file if it exists
      if (resume_file) {
        formData.append("resume_file", resume_file);
      }

      const response = await fetch("https://jsk-co.com/api/resumes", {
        method: "POST",
        headers: {
          // Remove Content-Type header to let the browser set it with the boundary
          Accept: "application/json",
        },
        mode: "cors",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setSubmitSuccess(true);
      // Optional: Reset form here if needed
    } catch (error) {
      setSubmitError("مشکلی پیش آمده دوباره تلاش کنید");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResumeFile(e.target.files[0]);
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
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نام و نام خانوادگی *
                </label>
                <input
                  {...register("name", {
                    required: "نام و نام خانوادگی الزامیست",
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
                  htmlFor="birthday"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  تاریخ تولد *
                </label>
                <Controller
                  control={control}
                  {...register("birthday", {
                    required: "تاریخ تولد الزامیست",
                  })}
                  name="birthday"
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      value={value}
                      onChange={(date) => {
                        const formattedDate = formatDateToString(date);
                        onChange(formattedDate);
                      }}
                      calendar={persian}
                      // placeholder="تاریخ تولد را وارد کنید"
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      containerClassName="w-full"
                    />
                  )}
                />
                {errors.birthday && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.birthday.message}
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
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
                {errors.gender && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="marital"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  وضعیت تاهل *
                </label>
                <select
                  {...register("marital", {
                    required: "وضعیت تاهل الزامیست",
                  })}
                  id="marital"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="single">مجرد</option>
                  <option value="married">متاهل</option>
                </select>
                {errors.marital && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.marital.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="military"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  وضعیت نظام وظیفه *
                </label>
                <select
                  {...register("military", {
                    required:
                      selectedGender !== "زن"
                        ? "وضعیت نظام وظیفه الزامیست"
                        : false,
                  })}
                  disabled={selectedGender === "زن"}
                  id="military"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="done">پایان خدمت</option>
                  <option value="exempt">معاف از خدمت</option>
                  <option value="eligible">مشمول خدمت</option>
                </select>
                {errors.military && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.military.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="degree"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  آخرین مدرک تحصیلی *
                </label>
                <select
                  {...register("degree", {
                    required: "آخرین مدرک تحصیلی الزامیست",
                  })}
                  id="degree"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="below_diploma">سیکل</option>
                  <option value="diploma">دیپلم</option>
                  <option value="associate">فوق دیپلم</option>
                  <option value="bachelor">لیسانس</option>
                  <option value="master">فوق لیسانس</option>
                  <option value="doctorate">دکترا</option>
                </select>
                {errors.degree && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.degree.message}
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
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  میزان سابقه *
                </label>
                <select
                  {...register("experience", {
                    required: "میزان سابقه الزامیست",
                  })}
                  id="experience"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="less_than_3">کمتر از 3 سال</option>
                  <option value="between_3_and_5">بین 3 تا 5 سال</option>
                  <option value="greater_than_5">بیش از 5 سال</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.experience.message}
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
                    required: "ایمیل الزامیست",
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
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                توضیحات
              </label>
              <textarea
                {...register("text")}
                id="text"
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
              {resume_file && (
                <p className="text-sm text-gray-600">
                  فایل انتخاب شده: {resume_file.name}
                </p>
              )}
            </div>

            {submitError && (
              <p className="text-red-600 text-sm">{submitError}</p>
            )}

            {submitSuccess && (
              <p className="text-green-600 text-sm">فرم با موفقیت ارسال شد</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isSubmitting ? "در حال ارسال ..." : "ارسال"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
