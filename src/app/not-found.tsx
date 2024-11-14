import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl text-[#ffa500] tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            ۴۰۴
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            چنین صفحه ای پیدا نشد برای دیدن قسمت های دیگر وبسایت به صفحه اصلی
            بروید.
          </p>
          <Link
            href="/"
            className="inline-block px-4 py-2 text-white bg-[#ffa500] select-none
                mt-8 border border-[#ffa500] hover:bg-white hover:text-[#ffa500] 
                transition-all"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </section>
  );
}
