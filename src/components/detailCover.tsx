"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { MapPin } from "lucide-react";
import backgroundImage from "../../public/images/contact-banner2.jpg";
import { useLocale } from "next-intl";

interface DetailCoverProps {
  title: string;
  location: string;
  link: string;
  linkTitle: string;
}

export function DetailCover({
  title,
  location,
  link,
  linkTitle,
}: DetailCoverProps) {
  const locale = useLocale();
  return (
    <div className="relative pt-[80px] lg:pt-[260px] lg:pb-[10px] overflow-hidden min-h-[200px]">
      {/* Optimized background image */}
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Background Pattern"
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

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[-1] bg-[#042038] opacity-90"
        aria-hidden="true"
      ></div>

      {/* Navigation */}
      <nav
        aria-label="breadcrumb"
        className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative hidden lg:block"
      >
        <ol className="flex flex-wrap items-center absolute bottom-[20px] rounded-md bg-opacity-60 px-[1rem]">
          <li className="flex items-center text-lg antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
            <Link
              href="/"
              className="opacity-60 text-white hover:text-[#ffa500]"
            >
              {locale === "fa" ? "خانه" : "Home"}
            </Link>
            <span className="mx-2 text-lg antialiased font-normal leading-normal pointer-events-none select-none text-white">
              /
            </span>
          </li>
          <li className="flex items-center text-lg antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer">
            <Link
              href={link}
              className="opacity-60 text-white hover:text-[#ffa500]"
            >
              {linkTitle}
            </Link>
            <span className="mx-2 text-sm antialiased font-normal leading-normal pointer-events-none select-none text-white">
              /
            </span>
          </li>
          <li className="flex items-center text-sm antialiased font-normal leading-normal text-white">
            <span>{title}</span>
          </li>
        </ol>
      </nav>

      {/* Title and Location */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[90%]">
        <h1 className="lg:text-2xl font-bold text-center text-white mb-2">
          {title}
        </h1>
        <div className="flex items-center justify-center text-white/80 mt-4">
          <MapPin className="h-4 w-4 ml-1" />
          <span className="mr-2">{location}</span>
        </div>
      </div>
    </div>
  );
}
