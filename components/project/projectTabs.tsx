"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProjectTabs() {
  const searchParams = useSearchParams();

  const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-2 lg:gap-0 py-4 md:py-8 flex-wrap">
      <button
        onClick={() => {
          router.push(`/projects?type=1`);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          searchParams.get("type") === "1" || searchParams.get("type") === null
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        همه
      </button>
      <button
        onClick={() => {
          router.push(`/projects?type=2`);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          searchParams.get("type") === "2"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        طراحی و مهندسی
      </button>
      <button
        onClick={() => {
          router.push(`/projects?type=3`);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          searchParams.get("type") === "3"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        خرید
      </button>
      <button
        onClick={() => {
          router.push(`/projects?type=4`);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          searchParams.get("type") === "4"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        نصب
      </button>
      <button
        onClick={() => {
          router.push(`/projects?type=5`);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          searchParams.get("type") === "5"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        اجرا
      </button>
      <button
        onClick={() => {
          router.push(`/projects?type=6`);
        }}
        type="button"
        className={`filter_btn hover:text-white ${
          searchParams.get("type") === "6"
            ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
            : ""
        }`}
      >
        بهره برداری
      </button>
    </div>
  );
}
