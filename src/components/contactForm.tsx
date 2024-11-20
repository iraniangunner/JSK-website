"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "نام الزامی است"), // At least 1 character
  email: z.string().email("ایمیل معتبر نیست"), // Valid email format
  website: z.string().url("آدرس وب سایت معتبر نیست").optional(), // Optional URL
  text: z.string().min(5, "پیام باید حداقل ۵ کاراکتر باشد"), // At least 5 characters
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  //const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue, // We need this to manually set values if we want to trim while typing.
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Trim spaces from all input fields before submission
      const trimmedData = {
        name: data.name.trim(),
        email: data.email.trim(),
        website: data.website ? data.website.trim() : "",
        text: data.text.trim(),
      };

      const response = await fetch("https://jsk-co.com/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedData),
      });

      if (!response.ok) {
        toast.error("خطایی رخ داده است. لطفا دوباره تلاش کنید.");
        reset();
      } else {
        toast.success("پیام شما با موفقیت ارسال شد!");
        // window.open("https://jsk-co.com", "_blank");
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("خطایی رخ داده است. لطفا دوباره تلاش کنید.");
    }
  };

  // Trim spaces as the user types (optional)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormValues
  ) => {
    setValue(field, e.target.value.trim());
  };

  return (
    <>
      {/* Toast Container for displaying success/error messages */}
      <ToastContainer />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <div>
            {errors.name && (
              <p className="text-red-500 text-sm mb-1">{errors.name.message}</p>
            )}
            <input
              {...register("name")}
              className={`w-full mb-[30px] py-3 border border-solid ${
                errors.name ? "border-red-500" : "border-[#ddd]"
              } pr-[20px] rounded-[15px]`}
              placeholder="نام شما"
              onChange={(e) => handleChange(e, "name")} // Trimming spaces as the user types
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
              className={`w-full mb-[30px] py-3 border border-solid ${
                errors.email ? "border-red-500" : "border-[#ddd]"
              } pr-[20px] rounded-[15px]`}
              placeholder="پست الکترونیکی"
              onChange={(e) => handleChange(e, "email")} // Trimming spaces as the user types
            />
          </div>
          <div>
          {errors.website && (
              <p className="text-red-500 text-sm mb-1">
                {errors.website.message}
              </p>
            )}
            <input
              {...register("website")}
              className={`w-full mb-[30px] py-3 border border-solid ${
                errors.website ? "border-red-500" : "border-[#ddd]"
              } pr-[20px] rounded-[15px]`}
              placeholder="آدرس وب سایت"
              onChange={(e) => handleChange(e, "website")} // Trimming spaces as the user types
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
            placeholder="پیام خود را تایپ کنید"
            onChange={(e) => handleChange(e, "text")} // Trimming spaces as the user types
          ></textarea>
         
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-center bg-[#fea925] rounded-[15px] cursor-pointer border 
                  border-solid border-[#fea925] h-[52px] font-[600] text-[#fff] text-[18px]
                   hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s] ${
                     isSubmitting ? "opacity-50 cursor-not-allowed" : ""
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
    </>
  );
};

