// "use client";
// import { useRef, useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { ToastContainer, toast } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useLocale, useTranslations } from "next-intl";
// import "react-toastify/dist/ReactToastify.css";

// export const ContactForm = () => {
//   const t = useTranslations("ContactForm");
//   const locale = useLocale();

//   // Define Zod schema with translations
//   const formSchema = z.object({
//     name: z.string().optional(),
//     email: z.string().email(t("fields.email.error")),
//     website: z
//       .string()
//       .url(t("fields.website.error"))
//       .optional()
//       .or(z.literal("")),
//     text: z.string().min(5, t("fields.message.error")),
//   });

//   type FormValues = z.infer<typeof formSchema>;

//   const recaptchaRef = useRef<ReCAPTCHA>(null);
//   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
//   const [isCompact, setIsCompact] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsCompact(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = async (data: FormValues, event: any) => {
//     event.preventDefault();

//     if (!recaptchaToken) {
//       toast.error(t("recaptcha.error"));
//       return;
//     }

//     try {
//       // Validate reCAPTCHA
//       const recaptchaValidationResponse = await fetch(
//         "/api/validate-recaptcha",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ token: recaptchaToken }),
//         }
//       );

//       const recaptchaValidationResult =
//         await recaptchaValidationResponse.json();

//       if (!recaptchaValidationResult.success) {
//         toast.error(t("notifications.recaptchaFailed"));
//         recaptchaRef.current?.reset();
//         setRecaptchaToken(null);
//         return;
//       }

//       // Submit form data
//       const trimmedData = {
//         name: data.name ? data.name.trim() : undefined,
//         email: data.email.trim(),
//         website: data.website ? data.website.trim() : undefined,
//         text: data.text.trim(),
//       };

//       const response = await fetch("https://jsk-co.com/api/comments", {
//         method: "POST",
//         next: { revalidate: 3600 },
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
//         },
//         body: JSON.stringify(trimmedData),
//       });

//       if (!response.ok) {
//         throw new Error("Submission failed");
//       }

//       toast.success(t("notifications.success"));
//       reset();
//       recaptchaRef.current?.reset();
//       setRecaptchaToken(null);
//     } catch (error) {
//       toast.error(t("notifications.error"));
//       recaptchaRef.current?.reset();
//       setRecaptchaToken(null);
//     }
//   };

//   const handleRecaptchaChange = (token: string | null) => {
//     setRecaptchaToken(token);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="text-center">
//         <h2 className="mb-[10px] text-[25px] font-bold">{t("title")}</h2>
//         <p className="text-[#848484] mb-[20px]">{t("subtitle")}</p>
//       </div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         noValidate
//         className="rtl:text-right"
//       >
//         <div>
//           <div>
//             {errors.name?.message && (
//               <p className="text-red-500 text-sm mb-1">{errors.name.message}</p>
//             )}
//             <input
//               {...register("name")}
//               type="text"
//               className={`w-full mb-[30px] py-3 border border-solid ${
//                 errors.name ? "border-red-500" : "border-[#ddd]"
//               } px-[20px] rounded-[15px] rtl:text-right`}
//               placeholder={t("fields.name.placeholder")}
//             />
//           </div>
//           <div>
//             {errors.email && (
//               <p className="text-red-500 text-sm mb-1">
//                 {errors.email.message}
//               </p>
//             )}
//             <input
//               {...register("email")}
//               type="email"
//               className={`w-full mb-[30px] py-3 border border-solid ${
//                 errors.email ? "border-red-500" : "border-[#ddd]"
//               } px-[20px] rounded-[15px] rtl:text-right`}
//               placeholder={t("fields.email.placeholder")}
//             />
//           </div>
//           <div>
//             {errors.website?.message && (
//               <p className="text-red-500 text-sm mb-1">
//                 {errors.website.message}
//               </p>
//             )}
//             <input
//               {...register("website")}
//               type="text"
//               className={`w-full mb-[30px] py-3 border border-solid ${
//                 errors.website ? "border-red-500" : "border-[#ddd]"
//               } px-[20px] rounded-[15px] rtl:text-right`}
//               placeholder={t("fields.website.placeholder")}
//             />
//           </div>
//         </div>
//         <div>
//           {errors.text && (
//             <p className="text-red-500 text-sm mb-1">{errors.text.message}</p>
//           )}
//           <textarea
//             {...register("text")}
//             rows={6}
//             className={`w-full mb-[30px] py-3 border border-solid ${
//               errors.text ? "border-red-500" : "border-[#ddd]"
//             } px-[20px] rounded-[15px] rtl:text-right`}
//             placeholder={t("fields.message.placeholder")}
//           ></textarea>
//         </div>
//         <div className="mb-[30px]">
//           <ReCAPTCHA
//             ref={recaptchaRef}
//             sitekey="6LdmdIoqAAAAAPEu4G4i9ba4eQbxDsZ5Ux2FBJ8B"
//             size={isCompact ? "compact" : "normal"}
//             onChange={handleRecaptchaChange}
//             onExpired={() => setRecaptchaToken(null)}
//             hl={`${locale === "fa" ? "fa" : "en"}`}
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full text-center bg-[#EC9123] rounded-[15px] cursor-pointer border
//                   border-solid border-[#EC9123] h-[52px] font-[600] text-[#fff] text-[18px]
//                    hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s] ${
//                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//                    }`}
//           >
//             {isSubmitting ? (
//               <div className="flex items-center justify-center gap-2">
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 <span>{t("submit.loading")}</span>
//               </div>
//             ) : (
//               t("submit.button")
//             )}
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

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
  const isRTL = locale === "fa";

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

      if (!response.ok) throw new Error("Submission failed");

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

  const getInputClasses = (fieldName: string, hasError: boolean) => {
    const baseClasses =
      "w-full bg-gray-50 border-2 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 outline-none";

    if (hasError) {
      return `${baseClasses} border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10`;
    }

    if (focusedField === fieldName) {
      return `${baseClasses} border-[#EC9123] bg-white shadow-lg shadow-[#EC9123]/10 ring-4 ring-[#EC9123]/10`;
    }

    return `${baseClasses} border-gray-200 hover:border-gray-300 focus:border-[#EC9123] focus:bg-white focus:shadow-lg focus:shadow-[#EC9123]/10 focus:ring-4 focus:ring-[#EC9123]/10`;
  };

  return (
    <>
      <ToastContainer
        position={isRTL ? "top-left" : "top-right"}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={isRTL}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#EC9123]/10 to-[#EC9123]/5 rounded-2xl mb-4">
          <svg
            className="w-8 h-8 text-[#EC9123]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c4050] mb-2">
          {t("title")}
        </h2>
        <p className="text-gray-500">{t("subtitle")}</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={isRTL ? "text-right" : "text-left"}
      >
        <div className="space-y-5">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                {t("fields.name.placeholder")}
              </label>
              <input
                {...register("name")}
                type="text"
                className={getInputClasses("name", !!errors.name)}
                placeholder={isRTL ? "نام شما" : "John Doe"}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-sm flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="w-1.5 h-1.5 bg-[#EC9123] rounded-full" />
                {t("fields.email.placeholder")}
                <span className="text-[#EC9123] text-xs">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                className={getInputClasses("email", !!errors.email)}
                placeholder={isRTL ? "example@email.com" : "you@example.com"}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Website Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
              {t("fields.website.placeholder")}
            </label>
            <input
              {...register("website")}
              type="text"
              className={getInputClasses("website", !!errors.website)}
              placeholder="https://yourwebsite.com"
              onFocus={() => setFocusedField("website")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.website?.message && (
              <p className="text-red-500 text-sm flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.website.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-1.5 h-1.5 bg-[#EC9123] rounded-full" />
              {t("fields.message.placeholder")}
              <span className="text-[#EC9123] text-xs">*</span>
            </label>
            <textarea
              {...register("text")}
              rows={5}
              className={`${getInputClasses(
                "text",
                !!errors.text
              )} resize-none`}
              placeholder={
                isRTL
                  ? "پیام خود را بنویسید..."
                  : "Tell us about your project..."
              }
              onFocus={() => setFocusedField("text")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.text && (
              <p className="text-red-500 text-sm flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.text.message}
              </p>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center py-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdmdIoqAAAAAPEu4G4i9ba4eQbxDsZ5Ux2FBJ8B"
              size={isCompact ? "compact" : "normal"}
              onChange={handleRecaptchaChange}
              onExpired={() => setRecaptchaToken(null)}
              hl={locale === "fa" ? "fa" : "en"}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              group relative w-full py-4 px-6 bg-gradient-to-r from-[#EC9123] to-[#d4820f] 
              text-white font-bold text-lg rounded-2xl overflow-hidden
              shadow-lg shadow-[#EC9123]/25 hover:shadow-xl hover:shadow-[#EC9123]/30 
              hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#EC9123]/30
              transition-all duration-300
              ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed hover:scale-100"
                  : ""
              }
            `}
          >
            {/* Shine effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </span>

            <span className="relative z-10 flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {t("submit.loading")}
                </>
              ) : (
                <>
                  {t("submit.button")}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-300"
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
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </>
  );
};
