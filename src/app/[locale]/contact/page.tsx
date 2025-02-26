import dynamic from "next/dynamic";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Map } from "@/components/googlemap";
import { PageCover } from "@/components/pageCover";
// import { ContactForm } from "@/components/contactForm";
import { getLocale, getTranslations } from "next-intl/server";

const ContactForm = dynamic(
  () => import("@/components/contactForm").then((mod) => mod.ContactForm),
  {
    loading: () => <p>Loading form...</p>,
    ssr: false, // Ensure it's only loaded on the client side
  }
);
type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Contact" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function Contact() {
  const locale = await getLocale();
  const t = await getTranslations();
  return (
    <>
      <PageCover
        title={`${locale === "fa" ? "تماس با ما" : "Contact Us"}`}
        bgImage="projects-pattern"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px] px-10 lg:px-30 xl:px-40 mx-auto">
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] 2xl:py-[25px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <FaPhone className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <FaPhone
            size={45}
            className={`${locale === "fa" ? "ml-[20px]" : "mr-[20px]"}`}
            color="#ffa500"
          />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              {t.raw("Header.Phone.title")}
            </h4>
            <p className="mb-0 text-[18px] text-[#777777]">
              021-88660368
              <br />
              021-88660628
            </p>
          </div>
        </div>
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] overflow-hidden bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <FaLocationDot className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <FaLocationDot
            size={45}
            className={`${locale === "fa" ? "ml-[20px]" : "mr-[20px]"}`}
            color="#ffa500"
          />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              {t.raw("Header.Address.title")}
            </h4>
            <p className="mb-0 text-[17px] text-[#777777]">
              {t.raw("Header.Address.description")}
            </p>
          </div>
        </div>
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <MdEmail className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <MdEmail
            size={45}
            className={`${locale === "fa" ? "ml-[20px]" : "mr-[20px]"}`}
            color="#ffa500"
          />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              {t.raw("Header.Email.title")}
            </h4>
            <p className="mb-0 text-[18px] text-[#777777]">
              info@jsk-co.com
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px] px-10 lg:px-30 xl:px-40 mx-auto">
        <div className="py-[40px] px-[45px] border border-solid border-[#fea925] lg:w-[80%] lg:mr-auto">
          <ContactForm />
        </div>
        <div className=" h-[200px] lg:h-full lg:w-[80%]">
          <Map />
        </div>
      </div>
    </>
  );
}
