import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl text-[#ffa500] tracking-tight font-extrabold lg:text-9xl text-primary-600">
            {t("error")}
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500">
            {t("message")}
          </p>
          <Link
            href="/"
            className="inline-block px-4 py-2 text-white bg-[#ffa500] select-none
                mt-8 border border-[#ffa500] hover:bg-white hover:text-[#ffa500] 
                transition-all"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
