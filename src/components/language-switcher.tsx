"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import Image from "next/image";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
    flagCode: "gb",
  },
  {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    dir: "rtl",
    flagCode: "ir",
  },
] as const;

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLocale = useLocale();
  const currentPathname = usePathname();

  // Helper function to redirect with the correct locale while preserving the current path
  const redirectedPathname = (locale: string) => {
    if (!currentPathname) return "/";

    const segments = currentPathname.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.push(redirectedPathname(locale));
    });
    setIsOpen(false);
  };

  const activeLanguage = languages.find((l) => l.code === activeLocale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2 
          rounded-lg border border-gray-200 
          hover:border-gray-300 active:scale-95
          transition-all duration-200
          ${isPending ? "animate-pulse" : ""}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
          dark:border-gray-700 dark:hover:border-gray-600
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Image
          src={`https://flagcdn.com/w20/${activeLanguage?.flagCode}.png`}
          width={20}
          height={15}
          alt=""
          className="rounded-sm object-cover"
          aria-hidden="true"
        />
        <span className="hidden sm:inline-block">{activeLanguage?.code}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            className={`
              absolute z-50 mt-2 w-full 
              rounded-lg border border-gray-200 bg-white
              shadow-lg animate-in fade-in-0 zoom-in-95
              dark:bg-gray-800 dark:border-gray-700
            `}
            role="listbox"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onSelectChange(lang.code)}
                  className={`
                    w-full px-2 py-2 text-sm
                    flex items-center gap-2
                    ${
                      lang.dir === "rtl"
                        ? "flex-row-reverse text-right"
                        : "text-left"
                    }
                    ${
                      activeLocale === lang.code
                        ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }
                    hover:bg-gray-50 dark:hover:bg-gray-700/70
                    transition-colors duration-150
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  disabled={isPending}
                  role="option"
                  aria-selected={activeLocale === lang.code}
                >
                  <Image
                    src={`https://flagcdn.com/w20/${lang.flagCode}.png`}
                    width={20}
                    height={15}
                    alt=""
                    className="rounded-sm object-cover"
                    aria-hidden="true"
                  />
                  <span>{lang.code}</span>
                  {activeLocale === lang.code && (
                    <svg
                      className="h-4 w-4 ml-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
