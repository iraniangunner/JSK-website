"use client";
import { useLocale } from "next-intl";
import { CgDanger } from "react-icons/cg";

export function CustomError() {
  const locale = useLocale();
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="mb-4 text-7xl flex justify-center items-center font-extrabold tracking-tight text-blue-600 lg:text-9xl">
            <CgDanger color="red" />
          </div>
          <p className="mb-4 text-lg font-light text-gray-500">
            {locale === "fa"
              ? "مشکلی پیش آمده دوباره تلاش کنید"
              : "Something Went Wrong Try Again"}
          </p>
        </div>
      </div>
    </section>
  );
}
