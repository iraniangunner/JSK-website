"use client";

import { useState } from "react";
import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormInputs = {
  company_name: string;
  phone: string;
  mobile: string;
  address: string;
  type_cooperation: string[];
  cooperation_file: File;
  text: string;
};

const COOPERATION_TYPES = [
  { value: "contracting" },
  { value: "supplier" },
  { value: "engineering_design_services" },
  { value: "investment" },
  { value: "consulting" },
  { value: "other" },
] as const;

const translations = {
  contracting: "پیمانکاری",
  supplier: "تامین کننده",
  engineering_design_services: "خدمات طراحی مهندسی",
  investment: "سرمایه گذاری",
  consulting: "مشاوره ",
  other: "سایر",
};

export function CooperationForm() {
  const t = useTranslations("CooperationForm");
  const [fileUploaded, setFileUploaded] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
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
            Authorization:
              "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
          },
          mode: "cors",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const variables = [
        {
          name: data.company_name,
          phone: data.phone,
          mobile: data.mobile,
          address: data.address,
          type_cooperation: data.type_cooperation
            .map(
              (item) => translations[item as keyof typeof translations] || item
            )
            .join(" - "),
          text: data.text,
        },
      ];

      const PMformData = new FormData();
      if (fileUploaded) {
        PMformData.append("resume_file", fileUploaded);
      }
      PMformData.append("variables", JSON.stringify(variables));
      PMformData.append("processId", "1475524906897041bf39250045954698");
      PMformData.append("taskId", "1534423826897234ad00e14005332120");
      PMformData.append("triggerId", "5845031736897263936d207091758781");
      PMformData.append("docId", "2369689946897253194a634043574157");
      PMformData.append("docComment", "رزومه شرکت");

      // Send data to PM server
      const PMresponse = await fetch("/api/create-case", {
        method: "POST",
        body: PMformData,
      });

      if (!PMresponse.ok) {
        throw new Error("Failed to send data to PM  server");
      }

      toast.success(
        t("submit.success") || "Your resume has been submitted successfully."
      );
      reset();
      setFileUploaded(null);
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
        setError("cooperation_file", {
          type: "manual",
          message: t("fields.file.error.size"),
        });
        setFileUploaded(null);
      } else {
        clearErrors("cooperation_file");
        setFileUploaded(file);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg border shadow-md overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
              <p className="text-sm text-gray-600">{t("subtitle")}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("fields.companyName.label")}
                  </label>
                  <input
                    {...register("company_name", {
                      required: t("fields.companyName.error"),
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
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("fields.phone.label")}
                  </label>
                  <input
                    {...register("phone", {
                      required: t("fields.phone.error"),
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("fields.mobile.label")}
                  </label>
                  <div className="relative">
                    <div className="absolute text-sm top-0 left-1 h-full border-r-2 border-r-gray-300 flex justify-center items-center pr-1">
                      98+
                    </div>
                    <input
                      {...register("mobile", {
                        pattern: {
                          value: /^9[0-9]{9}$/,
                          message: t("fields.mobile.error"),
                        },
                      })}
                      id="mobile"
                      type="tel"
                      className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
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
                  {t("fields.address.label")}
                </label>
                <textarea
                  {...register("address", {
                    required: t("fields.address.error"),
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
                  {t("fields.cooperationType.label")}
                </label>
                <div className="flex flex-wrap items-center gap-4">
                  {COOPERATION_TYPES.map((type) => (
                    <div key={type.value} className="flex items-center">
                      <input
                        {...register("type_cooperation", {
                          required: t("fields.cooperationType.error"),
                        })}
                        id={`contractType-${type.value}`}
                        type="checkbox"
                        value={type.value}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`contractType-${type.value}`}
                        className="rtl:mr-2 ml-2 block text-sm text-gray-900"
                      >
                        {t(`fields.cooperationType.options.${type.value}`)}
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
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    {t("fields.file.label")}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {t("fields.file.subtitle")}
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
                          {t("fields.file.clickToUpload")}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">PDF(MAX. 8MB)</p>
                    </div>
                    <input
                      {...register("cooperation_file", {
                        validate: (value: any) => {
                          if (value[0] && value[0].size > 8 * 1024 * 1024) {
                            return t("fields.file.error.size");
                          }
                          return true;
                        },
                      })}
                      id="file-upload"
                      type="file"
                      accept=".pdf"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                {fileUploaded && (
                  <p className="mt-2 text-sm text-gray-600">
                    {t("fields.file.selectedFile")} {fileUploaded.name}
                  </p>
                )}
                {errors.cooperation_file && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.cooperation_file.message ||
                      t("fields.file.error.generic")}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("fields.description.label")}
                </label>
                <textarea
                  {...register("text")}
                  id="text"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("fields.description.placeholder")}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white rtl:ml-3 rtl:mr-0"
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
                      {t("submit.loading")}
                    </>
                  ) : (
                    t("submit.button")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
