"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("ایمیل معتبر نیست"), // Valid email format
  website: z
    .string()
    .url("آدرس وب سایت معتبر نیست")
    .optional()
    .or(z.literal("")), // Optional URL
  text: z.string().min(5, "پیام باید حداقل ۵ کاراکتر باشد"), // At least 5 characters
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null); // Reference to the reCAPTCHA instance
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

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
      toast.error("لطفاً reCAPTCHA را تکمیل کنید.");
      return;
    }

    try {
      // Step 1: Validate reCAPTCHA with Next.js API
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
        toast.error("تأیید reCAPTCHA شکست خورد. لطفاً دوباره امتحان کنید.");
        recaptchaRef.current?.reset(); // Reset reCAPTCHA if validation fails
        setRecaptchaToken(null);
        return;
      }

      // Step 2: Submit form data to /comments endpoint
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
        toast.error("خطایی رخ داده است. لطفا دوباره تلاش کنید.");
        reset();
        recaptchaRef.current?.reset(); // Reset reCAPTCHA after submission failure
        setRecaptchaToken(null);
      } else {
        toast.success("فرم با موفقیت ارسال شد.");
        reset();
        recaptchaRef.current?.reset(); // Reset reCAPTCHA after successful submission
        setRecaptchaToken(null);
      }
    } catch (error) {
      toast.error("خطایی رخ داده است. لطفا دوباره تلاش کنید.");
      recaptchaRef.current?.reset(); // Reset reCAPTCHA after catching an error
      setRecaptchaToken(null);
    }
  };

  // reCAPTCHA onChange handler
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      {/* Toast Container for displaying success/error messages */}
      <ToastContainer />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              } pr-[20px] rounded-[15px]`}
              placeholder="نام شما"
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
              } pr-[20px] rounded-[15px]`}
              placeholder="پست الکترونیکی(ضروری)"
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
              } pr-[20px] rounded-[15px]`}
              placeholder="آدرس وب سایت"
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
            } pr-[20px] rounded-[15px]`}
            placeholder="پیام شما(ضروری)"
          ></textarea>
        </div>
        {/* Add reCAPTCHA Component */}
        <div className="mb-[30px]">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdmdIoqAAAAAPEu4G4i9ba4eQbxDsZ5Ux2FBJ8B" // Replace with your Site Key
            onChange={handleRecaptchaChange}
            onExpired={() => setRecaptchaToken(null)} // Reset token if expired
            hl="fa" // Set language to Persian (for RTL support)
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-center bg-[#fea925] rounded-[15px] cursor-pointer border 
                  border-solid border-[#fea925] h-[52px] font-[600] text-[#fff] text-[18px]
                   hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s] ${
                     isSubmitting
                       ? "opacity-50 cursor-not-allowed pointer-events-none"
                       : ""
                   }`}
          >
            {isSubmitting ? (
              <div
                className="spinner-border spinner-border-sm text-white"
                role="status"
              >
                <span className="visually-hidden">در حال ارسال ...</span>
              </div>
            ) : (
              "ارسال پیام"
            )}
          </button>
        </div>
      </form>

      {/* {!popupAllowed && (
        <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          <p>پنجره‌های بازشو مسدود شده‌اند. لطفاً مراحل زیر را دنبال کنید:</p>
          <ol className="list-decimal list-inside mt-2">
            <li>
              تنظیمات مرورگر خود را برای اجازه‌ی پنجره‌های بازشو از این سایت
              تغییر دهید.
            </li>
            <li>صفحه را رفرش کنید.</li>
            <li>فرم را دوباره پر کرده و ارسال کنید.</li>
          </ol>
        </div>
      )} */}
    </>
  );
};
