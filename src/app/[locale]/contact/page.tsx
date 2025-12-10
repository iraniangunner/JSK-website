// import dynamic from "next/dynamic";
// import { FaPhone } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { Map } from "@/components/googlemap";
// import { PageCover } from "@/components/pageCover";
// // import { ContactForm } from "@/components/contactForm";
// import { getLocale, getTranslations } from "next-intl/server";

// const ContactForm = dynamic(
//   () => import("@/components/contactForm").then((mod) => mod.ContactForm),
//   {
//     loading: () => <p>Loading...</p>,
//     //ssr: false, // Ensure it's only loaded on the client side
//   }
// );
// type Props = {
//   params: { locale: string };
// };

// export async function generateMetadata({ params: { locale } }: Props) {
//   const t = await getTranslations({ locale, namespace: "Contact" });

//   return {
//     title: t("title"),
//     description: t("description"),
//     alternates: {
//       canonical: "/contact",
//     },
//     openGraph: {
//       title: t("default"),
//       description: t("description"),
//     },
//   };
// }

// export default async function Contact() {
//   const locale = await getLocale();
//   const t = await getTranslations();
//   return (
//     <>
//       <PageCover title={`${locale === "fa" ? "تماس با ما" : "Contact Us"}`} />
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px] px-10 lg:px-30 xl:px-40 mx-auto">
//         <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] 2xl:py-[25px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
//           <FaPhone className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
//           <FaPhone
//             size={45}
//             className={`${locale === "fa" ? "ml-[20px]" : "mr-[20px]"}`}
//             color="#EC9123"
//           />
//           <div className="overflow-hidden">
//             <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
//               {t.raw("Header.Phone.title")}
//             </h4>
//             <p className="mb-0 text-[18px] text-[#777777]">
//               021-88660368
//               <br />
//               021-88660628
//             </p>
//           </div>
//         </div>
//         <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] overflow-hidden bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
//           <FaLocationDot className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
//           <FaLocationDot
//             size={45}
//             className={`${locale === "fa" ? "ml-[20px]" : "mr-[20px]"}`}
//             color="#EC9123"
//           />
//           <div className="overflow-hidden">
//             <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
//               {t.raw("Header.Address.title")}
//             </h4>
//             <p className="mb-0 text-[17px] text-[#777777]">
//               {t.raw("Header.Address.description")}
//             </p>
//           </div>
//         </div>
//         <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
//           <MdEmail className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
//           <MdEmail
//             size={45}
//             className={`${locale === "fa" ? "ml-[20px]" : "mr-[20px]"}`}
//             color="#EC9123"
//           />
//           <div className="overflow-hidden">
//             <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
//               {t.raw("Header.Email.title")}
//             </h4>
//             <p className="mb-0 text-[18px] text-[#777777]">
//               info@jsk-co.com
//               <br />
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px] px-10 lg:px-30 xl:px-40 mx-auto">
//         <div className="py-[40px] px-[45px] border border-solid border-[#EC9123 lg:w-[80%] lg:mr-auto">
//           <ContactForm />
//         </div>
//         <div className=" h-[200px] lg:h-full lg:w-[80%]">
//           <Map />
//         </div>
//       </div>
//     </>
//   );
// }

import dynamic from "next/dynamic";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Map } from "@/components/googlemap";
import { getLocale, getTranslations } from "next-intl/server";

const ContactForm = dynamic(
  () => import("@/components/contactForm").then((mod) => mod.ContactForm),
  {
    loading: () => (
      <div className="flex items-center justify-center h-64">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-[#EC9123]/20 rounded-full" />
          <div className="absolute inset-0 w-12 h-12 border-4 border-[#EC9123] border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    ),
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
  const isRTL = locale === "fa";

  return (
    <div
      className="min-h-screen bg-white text-gray-900 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Large decorative text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[18vw] font-black text-gray-100 tracking-tighter">
            CONTACT
          </span>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-[#EC9123]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-[#2c4050]/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#EC9123] to-transparent" />
            <span className="text-[#EC9123] text-xs font-semibold tracking-[0.3em] uppercase">
              {isRTL ? "در ارتباط باشید" : "Get in Touch"}
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#EC9123] to-transparent" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="block text-[#2c4050]">
              {isRTL ? "تماس" : "Contact"}
            </span>
            <span className="block text-[#EC9123]">
              {isRTL ? "با ما" : "Us"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "ما آماده پاسخگویی به سوالات شما هستیم"
              : "We're here to help and answer any questions you might have"}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#EC9123] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[#EC9123]/10 text-[#EC9123] font-bold text-lg rounded-2xl mb-4">
              01
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c4050]">
              {isRTL ? "راه‌های ارتباطی" : "Contact Information"}
            </h2>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#EC9123]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC9123]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background icon */}
              <FaPhone className="absolute -bottom-4 -right-4 rtl:-right-auto rtl:-left-4 text-[120px] text-gray-100 group-hover:text-[#EC9123]/10 transition-colors duration-500" />

              {/* Number badge */}
              <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-5xl font-black text-gray-100 group-hover:text-[#EC9123]/20 transition-colors duration-500">
                01
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#EC9123] to-[#d4820f] rounded-2xl mb-6 shadow-lg shadow-[#EC9123]/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <FaPhone className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#2c4050] mb-2 group-hover:text-[#EC9123] transition-colors">
                  {t.raw("Header.Phone.title")}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {isRTL ? "شنبه تا پنجشنبه، ۹ صبح - ۶ عصر" : "Sat - Thu, 9am - 6pm"}
                </p>

                <div className="space-y-2">
                  <a
                    href="tel:02188660368"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#EC9123] transition-colors group/link"
                  >
                    <span className="w-6 h-px bg-gray-300 group-hover/link:bg-[#EC9123] group-hover/link:w-10 transition-all duration-300" />
                    <span className="font-medium">021-88660368</span>
                  </a>
                  <a
                    href="tel:02188660628"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#EC9123] transition-colors group/link"
                  >
                    <span className="w-6 h-px bg-gray-300 group-hover/link:bg-[#EC9123] group-hover/link:w-10 transition-all duration-300" />
                    <span className="font-medium">021-88660628</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#EC9123]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC9123]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background icon */}
              <FaLocationDot className="absolute -bottom-4 -right-4 rtl:-right-auto rtl:-left-4 text-[120px] text-gray-100 group-hover:text-[#EC9123]/10 transition-colors duration-500" />

              {/* Number badge */}
              <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-5xl font-black text-gray-100 group-hover:text-[#EC9123]/20 transition-colors duration-500">
                02
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#EC9123] to-[#d4820f] rounded-2xl mb-6 shadow-lg shadow-[#EC9123]/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <FaLocationDot className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#2c4050] mb-2 group-hover:text-[#EC9123] transition-colors">
                  {t.raw("Header.Address.title")}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {isRTL ? "دفتر مرکزی" : "Headquarters"}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {t.raw("Header.Address.description")}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#EC9123]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC9123]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background icon */}
              <MdEmail className="absolute -bottom-4 -right-4 rtl:-right-auto rtl:-left-4 text-[120px] text-gray-100 group-hover:text-[#EC9123]/10 transition-colors duration-500" />

              {/* Number badge */}
              <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-5xl font-black text-gray-100 group-hover:text-[#EC9123]/20 transition-colors duration-500">
                03
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#EC9123] to-[#d4820f] rounded-2xl mb-6 shadow-lg shadow-[#EC9123]/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <MdEmail className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#2c4050] mb-2 group-hover:text-[#EC9123] transition-colors">
                  {t.raw("Header.Email.title")}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {isRTL ? "پاسخ در کمتر از ۲۴ ساعت" : "Response within 24 hours"}
                </p>

                <a
                  href="mailto:info@jsk-co.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#EC9123] transition-colors group/link"
                >
                  <span className="w-6 h-px bg-gray-300 group-hover/link:bg-[#EC9123] group-hover/link:w-10 transition-all duration-300" />
                  <span className="font-medium">info@jsk-co.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="relative py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[#EC9123]/10 text-[#EC9123] font-bold text-lg rounded-2xl mb-4">
              02
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c4050] mb-4">
              {isRTL ? "پیام خود را بفرستید" : "Send Us a Message"}
            </h2>
            <p className="text-gray-600 text-lg">
              {isRTL
                ? "فرم زیر را پر کنید و تیم ما در اسرع وقت با شما تماس خواهد گرفت"
                : "Fill out the form below and our team will get back to you as soon as possible"}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-5">
              <div className="sticky top-8 h-[400px] lg:h-[600px] bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
     
    </div>
  );
}