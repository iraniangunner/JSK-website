"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useLocale } from "next-intl";
import bgImage from "../../public/images/contact-banner2.jpg";

export async function PageCover({ title }: { title: string }) {
  const locale = useLocale();

  return (
    <div className="relative pt-[80px] lg:pt-[260px] lg:pb-[10px] overflow-hidden min-h-[200px]">
      {/* Optimized background image */}
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={bgImage || "/placeholder.svg"}
          alt={`${title} background`}
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "top right",
          }}
        />
      </div>

      {/* Overlay element (previously :before) */}
      <div className="absolute inset-0 opacity-0 z-[-1]"></div>

      <nav
        aria-label="breadcrumb"
        className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative hidden md:block"
      >
        <ol className="flex flex-wrap items-center absolute bottom-[20px] rounded-md bg-opacity-60 px-[1rem]">
          <li className="flex items-center text-lg antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
            <Link href="/" className="opacity-60">
              {locale === "fa" ? "خانه" : "Home"}
            </Link>
            <span className="mx-2 text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
              /
            </span>
          </li>
          <li className="flex items-center text-lg antialiased font-normal leading-normal text-blue-gray-900">
            <span>{title}</span>
          </li>
        </ol>
      </nav>
      <h1 className="lg:text-[35px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {title}
      </h1>
    </div>
  );
}
