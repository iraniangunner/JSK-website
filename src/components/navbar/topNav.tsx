import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin } from "lucide-react";
import jsk from "../../../public/images/jsk1.png";
import LocalSwitcher from "../language-switcher";
import { getLocale, getTranslations } from "next-intl/server";

export default async function TopNav() {
  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <div className="hidden top-0 lg:flex items-center justify-center gap-6 bg-white p-[10px]">
      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="block relative cursor-pointer font-medium h-auto lg:h-[68px]"
        >
          <Image
            src={jsk}
            alt="JSK logo"
            width={200}
            height={24}
            className="w-full h-full"
          />
        </Link>
      </div>

      <div
        className={`flex justify-center items-center gap-3 ${
          locale === "fa" ? "lg:mr-6" : "lg:ml-6"
        }`}
      >
        <div
          className={`lg:hidden 2xl:flex items-center justify-center ${
            locale === "fa" ? "ml-4" : "mr-4"
          }`}
        >
          <a
            href={process.env.GOOGLE_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-[#EC9123] text-[#EC9123] hover:bg-[#EC9123] hover:text-white transition-all rounded-full p-2 ${
              locale === "fa" ? "ml-3" : "mr-3"
            }`}
          >
            <MapPin size={20} />
          </a>
          <div className="text-black">
            <p className="mb-2 font-bold text-black">
              {t.raw("Header.Address.title")}
            </p>
            <p className="text-sm">{t.raw("Header.Address.description")}</p>
          </div>
        </div>
        <div
          className={`flex justify-center items-center ${
            locale === "fa" ? "ml-4" : "mr-4"
          }`}
        >
          <a
            href="tel:02188660368"
            className={`border border-[#EC9123] text-[#EC9123] hover:bg-[#EC9123] hover:text-white transition-all rounded-full p-2 ${
              locale === "fa" ? "ml-3" : "mr-3"
            }`}
          >
            <Phone size={20} />
          </a>
          <div>
            <p className="mb-2 font-bold text-black">
              {t.raw("Header.Phone.title")}
            </p>
            <p className="text-sm text-black">021-88660368</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="mailto:info@jsk-co.com"
            className={`border border-[#EC9123] text-[#EC9123] hover:bg-[#EC9123] 
          hover:text-white transition-all rounded-full p-2 ${
            locale === "fa" ? "ml-3" : "mr-3"
          }`}
          >
            <Mail size={20} />
          </a>
          <div>
            <p className="mb-2 font-bold text-black">
              {t.raw("Header.Email.title")}
            </p>
            <p className="text-sm text-black">info@jsk-co.com</p>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center ${
          locale === "fa"
            ? "border-r pr-4 lg:pr-6 xl:pr-8"
            : "border-l pl-4 lg:pl-6 xl:pl-8"
        } border-gray-200 mr-2`}
      >
        <LocalSwitcher />
      </div>
    </div>
  );
}
