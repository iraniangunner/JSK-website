"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { useLocale, useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const t = useTranslations("ResumeForm");
  const t1 = useTranslations("Email");
  const locale = useLocale();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    clearErrors,
    reset,
    setValue,
    setError,
  } = useForm<FormInputs>();
  const [resumeFile, setResumeFile] = useState<File | null>();
  const [selectedGender, setSelectedGender] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedGender === "female") {
      clearErrors("military");
      setValue("military", "");
    }
  }, [selectedGender]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Handle text field as empty string if it's undefined or empty
      if (!data.text) {
        data.text = "null";
      }

      Object.keys(data).forEach((key) => {
        if (key !== "resume_file") {
          formData.append(key, data[key as keyof FormInputs]);
        }
      });

      if (resumeFile) {
        formData.append("resume_file", resumeFile);
      }

      const response = await fetch("https://jsk-co.com/api/resumes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
        },
        mode: "cors",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      // Send email notification
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: data.email,
          subject: t1("subject"),
          html: `${
            locale === "fa"
              ? `<p><strong>${data.name} </strong> ${t1("greeting")}`
              : `<p>${t1("greeting")} <strong>${data.name}</strong>`
          },
          
          ${t1("body")}
    
          <br />
          ${t1("signature")}
          </p>`,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email notification");
      }

      toast.success(
        t("submit.success") || "Your resume has been submitted successfully."
      );

      reset();
      setResumeFile(null);
    } catch (error) {
      toast.error(
        t("submit.error") ||
          "There was an error submitting your resume. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 8 * 1024 * 1024) {
        setError("resume_file", {
          type: "manual",
          message: t("fields.resume.size_error"),
        });
        setResumeFile(null);
      } else {
        clearErrors("resume_file");
        setResumeFile(file);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-2xl lg:mt-36 mx-auto bg-white rounded-lg border shadow-md overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
            <p className="text-sm text-gray-600">{t("subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("fields.name.label")} *
                </label>
                <input
                  {...register("name", {
                    required: t("fields.name.required"),
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
                  {t("fields.birthday.label")} *
                </label>
                <Controller
                  control={control}
                  {...register("birthday", {
                    required: t("fields.birthday.required"),
                  })}
                  name="birthday"
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      value={value}
                      onChange={(date) => {
                        const formattedDate =
                          locale === "fa" ? formatDateToString(date) : date;
                        onChange(formattedDate);
                      }}
                      calendar={locale === "fa" ? persian : undefined}
                      locale={locale === "fa" ? persian_fa : undefined}
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
                  {t("fields.gender.label")} *
                </label>
                <select
                  {...register("gender", {
                    required: t("fields.gender.required"),
                  })}
                  id="gender"
                  defaultValue=""
                  onChange={(e) => {
                    clearErrors("gender");
                    setSelectedGender(e.target.value);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="male">
                    {t("fields.gender.options.male")}
                  </option>
                  <option value="female">
                    {t("fields.gender.options.female")}
                  </option>
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
                  {t("fields.marital.label")} *
                </label>
                <select
                  {...register("marital", {
                    required: t("fields.marital.required"),
                  })}
                  id="marital"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="single">
                    {t("fields.marital.options.single")}
                  </option>
                  <option value="married">
                    {t("fields.marital.options.married")}
                  </option>
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
                  {t("fields.military.label")} *
                </label>
                <select
                  {...register("military", {
                    required:
                      selectedGender !== "female"
                        ? t("fields.military.required")
                        : false,
                  })}
                  disabled={selectedGender === "female"}
                  id="military"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="done">
                    {t("fields.military.options.done")}
                  </option>
                  <option value="exempt">
                    {t("fields.military.options.exempt")}
                  </option>
                  <option value="eligible">
                    {t("fields.military.options.eligible")}
                  </option>
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
                  {t("fields.degree.label")} *
                </label>
                <select
                  {...register("degree", {
                    required: t("fields.degree.required"),
                  })}
                  id="degree"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="below_diploma">
                    {t("fields.degree.options.below_diploma")}
                  </option>
                  <option value="diploma">
                    {t("fields.degree.options.diploma")}
                  </option>
                  <option value="associate">
                    {t("fields.degree.options.associate")}
                  </option>
                  <option value="bachelor">
                    {t("fields.degree.options.bachelor")}
                  </option>
                  <option value="master">
                    {t("fields.degree.options.master")}
                  </option>
                  <option value="doctorate">
                    {t("fields.degree.options.doctorate")}
                  </option>
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
                  {t("fields.university.label")} *
                </label>
                <input
                  {...register("university", {
                    required: t("fields.university.required"),
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
                  {t("fields.major.label")} *
                </label>
                <input
                  {...register("major", {
                    required: t("fields.major.required"),
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
                  {t("fields.experience.label")} *
                </label>
                <select
                  {...register("experience", {
                    required: t("fields.experience.required"),
                  })}
                  id="experience"
                  defaultValue=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                >
                  <option value="" disabled hidden></option>
                  <option value="less_than_3">
                    {t("fields.experience.options.less_than_3")}
                  </option>
                  <option value="between_3_and_5">
                    {t("fields.experience.options.between_3_and_5")}
                  </option>
                  <option value="greater_than_5">
                    {t("fields.experience.options.greater_than_5")}
                  </option>
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
                  {t("fields.email.label")} *
                </label>
                <input
                  {...register("email", {
                    required: t("fields.email.required"),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("fields.email.invalid"),
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
                {t("fields.text.label")}
              </label>
              <textarea
                {...register("text")}
                id="text"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("fields.text.placeholder")}
              ></textarea>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  {t("fields.resume.label")} *
                </h3>
                <p className="text-xs text-gray-600">
                  {t("fields.resume.description")}
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
                      <span className="font-semibold">
                        {t("fields.resume.upload.click")}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {t("fields.resume.upload.format")}
                    </p>
                  </div>
                  <input
                    id="resume-upload"
                    {...register("resume_file", {
                      required: t("fields.resume.required"),
                      validate: (value: any) => {
                        if (value[0] && value[0].size > 8 * 1024 * 1024) {
                          return t("fields.resume.size_error");
                        }
                        return true;
                      },
                    })}
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {resumeFile && (
                <p className="text-sm text-gray-600">
                  {t("fields.resume.selected", { filename: resumeFile.name })}
                </p>
              )}
              {errors.resume_file && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.resume_file.message}
                </p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <div className="flex justify-between items-center gap-2">
                    <p>{t("submit.loading")}</p>
                    <svg
                      className="w-4 h-4 animate-spin text-gray-900/50"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-white"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  t("submit.button")
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
