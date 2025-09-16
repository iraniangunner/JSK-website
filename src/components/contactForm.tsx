"use client";
import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useLocale, useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const locale = useLocale();

  // Define Zod schema with translations
  const formSchema = z.object({
    name: z.string().optional(),
    email: z.string().email(t("fields.email.error")),
    website: z
      .string()
      .url(t("fields.website.error"))
      .optional()
      .or(z.literal("")),
    text: z.string().min(5, t("fields.message.error")),
  });

  type FormValues = z.infer<typeof formSchema>;

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsCompact(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues, event: any) => {
    event.preventDefault();

    if (!recaptchaToken) {
      toast.error(t("recaptcha.error"));
      return;
    }

    try {
      // Validate reCAPTCHA
      const recaptchaValidationResponse = await fetch(
        "/api/validate-recaptcha",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: recaptchaToken }),
        }
      );

      const recaptchaValidationResult =
        await recaptchaValidationResponse.json();

      if (!recaptchaValidationResult.success) {
        toast.error(t("notifications.recaptchaFailed"));
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        return;
      }

      // Submit form data
      const trimmedData = {
        name: data.name ? data.name.trim() : undefined,
        email: data.email.trim(),
        website: data.website ? data.website.trim() : undefined,
        text: data.text.trim(),
      };

      const response = await fetch("https://jsk-co.com/api/comments", {
        method: "POST",
        next: { revalidate: 3600 },
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
        },
        body: JSON.stringify(trimmedData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success(t("notifications.success"));
      reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      toast.error(t("notifications.error"));
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <ToastContainer />
      <div className="text-center">
        <h2 className="mb-[10px] text-[25px] font-bold">{t("title")}</h2>
        <p className="text-[#848484] mb-[20px]">{t("subtitle")}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rtl:text-right"
      >
        <div>
          <div>
            {errors.name?.message && (
              <p className="text-red-500 text-sm mb-1">{errors.name.message}</p>
            )}
            <input
              {...register("name")}
              type="text"
              className={`w-full mb-[30px] py-3 border border-solid ${
                errors.name ? "border-red-500" : "border-[#ddd]"
              } px-[20px] rounded-[15px] rtl:text-right`}
              placeholder={t("fields.name.placeholder")}
            />
          </div>
          <div>
            {errors.email && (
              <p className="text-red-500 text-sm mb-1">
                {errors.email.message}
              </p>
            )}
            <input
              {...register("email")}
              type="email"
              className={`w-full mb-[30px] py-3 border border-solid ${
                errors.email ? "border-red-500" : "border-[#ddd]"
              } px-[20px] rounded-[15px] rtl:text-right`}
              placeholder={t("fields.email.placeholder")}
            />
          </div>
          <div>
            {errors.website?.message && (
              <p className="text-red-500 text-sm mb-1">
                {errors.website.message}
              </p>
            )}
            <input
              {...register("website")}
              type="text"
              className={`w-full mb-[30px] py-3 border border-solid ${
                errors.website ? "border-red-500" : "border-[#ddd]"
              } px-[20px] rounded-[15px] rtl:text-right`}
              placeholder={t("fields.website.placeholder")}
            />
          </div>
        </div>
        <div>
          {errors.text && (
            <p className="text-red-500 text-sm mb-1">{errors.text.message}</p>
          )}
          <textarea
            {...register("text")}
            rows={6}
            className={`w-full mb-[30px] py-3 border border-solid ${
              errors.text ? "border-red-500" : "border-[#ddd]"
            } px-[20px] rounded-[15px] rtl:text-right`}
            placeholder={t("fields.message.placeholder")}
          ></textarea>
        </div>
        <div className="mb-[30px]">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdmdIoqAAAAAPEu4G4i9ba4eQbxDsZ5Ux2FBJ8B"
            size={isCompact ? "compact" : "normal"}
            onChange={handleRecaptchaChange}
            onExpired={() => setRecaptchaToken(null)}
            hl={`${locale === "fa" ? "fa" : "en"}`}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-center bg-[#EC9123] rounded-[15px] cursor-pointer border 
                  border-solid border-[#EC9123] h-[52px] font-[600] text-[#fff] text-[18px]
                   hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s] ${
                     isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                   }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                <span>{t("submit.loading")}</span>
              </div>
            ) : (
              t("submit.button")
            )}
          </button>
        </div>
      </form>
    </>
  );
};
