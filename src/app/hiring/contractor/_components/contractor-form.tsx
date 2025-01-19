"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  full_name: string;
  company_name: string;
  phone: string;
  mobile: string;
  address: string;
  type_cooperation: string[];
  cooperation_file: File;
  text: string;
};

export function ContractorForm() {
  const [fileUploaded, setFileUploaded] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const formData = new FormData();

      if (!data.text) {
        data.text = "null";
      }

      if (!data.mobile) {
        data.mobile = "null";
      }

      Object.keys(data).forEach((key) => {
        if (key === "type_cooperation") {
          (data[key] as string[]).forEach((value, index) => {
            formData.append(`type_cooperation[${index}]`, value);
          });
        } else if (key !== "cooperation_file") {
          formData.append(key, data[key as keyof FormInputs] as string);
        }
      });

      if (fileUploaded) {
        formData.append("cooperation_file", fileUploaded);
      }

      const response = await fetch(
        "https://jsk-co.com/api/companies-cooperation",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          mode: "cors",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setSubmitSuccess(true);
      reset();
      setFileUploaded(null);
    } catch (error) {
      setSubmitError("مشکلی پیش آمده دوباره تلاش کنید");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      clearErrors("cooperation_file");
      setFileUploaded(e.target.files[0]);
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
                  htmlFor="full_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نام و نام خانوادگی *
                </label>
                <input
                  {...register("full_name", {
                    required: "نام و نام خانوادگی الزامی است",
                  })}
                  id="full_name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.full_name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.full_name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نام شرکت *
                </label>
                <input
                  {...register("company_name", {
                    required: "نام شرکت الزامی است",
                  })}
                  id="company_name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.company_name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.company_name.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  تلفن ثابت *
                </label>
                <input
                  {...register("phone", {
                    required: "شماره تلفن الزامی است",
                  })}
                  id="phone"
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  تلفن همراه
                </label>
                <div className=" relative">
                  <div className="absolute top-0 left-1 h-full border-r-2 border-r-gray-300 flex justify-center items-center pr-1">
                    98+
                  </div>
                  <input
                    {...register("mobile", {
                      pattern: {
                        value: /^9[0-9]{9}$/,
                        message: "باید با 9 شروع شده و شامل 10 رقم باشد",
                      },
                    })}
                    id="mobile"
                    type="tel"
                    className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {errors.mobile && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
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
                  { title: "پیمانکاری", value: "contracting" },
                  { title: "تامین کننده", value: "supplier" },
                  {
                    title: "خدمات طراحی مهندسی",
                    value: "engineering_design_services",
                  },
                  { title: "سرمایه گذاری", value: "investment" },
                  { title: "مشاوره", value: "consulting" },
                  { title: "سایر", value: "other" },
                ].map((type) => (
                  <div key={type.title} className="flex items-center">
                    <input
                      {...register("type_cooperation", {
                        required: "انتخاب نوع همکاری الزامی است",
                      })}
                      id={`contractType-${type.value}`}
                      type="checkbox"
                      value={type.value}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`contractType-${type.value}`}
                      className="mr-2 block text-sm text-gray-900"
                    >
                      {type.title}
                    </label>
                  </div>
                ))}
              </div>
              {errors.type_cooperation && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.type_cooperation.message}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div className="text-right" lang="fa" dir="rtl">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
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
                    {...register("cooperation_file")}
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
              {errors.cooperation_file && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.cooperation_file.message}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                توضیحات
              </label>
              <textarea
                {...register("text")}
                id="text"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="در صورت تمایل توضیحات تکمیلی را در این بخش وارد کنید"
              ></textarea>
            </div>

            {submitError && (
              <p className="text-red-600 text-sm">{submitError}</p>
            )}

            {submitSuccess && (
              <p className="text-green-600 text-sm">فرم با موفقیت ارسال شد</p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    در حال ارسال...
                  </>
                ) : (
                  "ارسال فرم"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
