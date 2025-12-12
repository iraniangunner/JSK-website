import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "About" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function About() {
  const locale = await getLocale();
  const t = await getTranslations("About");
  const isRTL = locale === "fa";

  return (
    <div
      className="min-h-screen bg-white text-gray-900 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.4]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Large decorative text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[20vw] font-black text-gray-100 tracking-tighter">
            ABOUT
          </span>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-[#ffa500]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-[#001c47]/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ffa500] to-transparent" />
            <span className="text-[#ffa500] text-xs font-semibold tracking-[0.3em] uppercase">
              {isRTL ? "شرکت ما" : "Our Company"}
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ffa500] to-transparent" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="block text-[#001c47]">
              {isRTL ? "درباره" : "About"}
            </span>
            <span className="block text-[#ffa500]">
              {isRTL ? "ما" : "Us"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "ما با اشتیاق و تعهد، بهترین خدمات را به مشتریان خود ارائه می‌دهیم"
              : "Driven by passion and commitment, we deliver excellence in everything we do"}
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-[#ffa500] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left - Section info */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-[#ffa500]/10 text-[#ffa500] font-bold text-lg rounded-2xl mb-6">
                  01
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001c47] tracking-tight mb-4">
                  {t("sections.about.title")}
                </h2>
                <div className="w-16 h-1.5 bg-[#ffa500] rounded-full" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-8">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-500">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed lg:text-justify">
                  {t.rich("sections.about.content", {
                    company: (chunks) => (
                      <span className="font-bold italic text-[#ffa500]">{t("companyName")}</span>
                    ),
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="relative py-24 lg:py-32 bg-[#001c47] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-[10%] w-72 h-72 bg-[#ffa500]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Quote marks decoration */}
        <div className="absolute top-12 left-8 lg:left-16 text-[#ffa500]/10 pointer-events-none">
          <svg className="w-24 h-24 lg:w-40 lg:h-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[#ffa500] text-white font-bold text-lg rounded-2xl mb-6">
              02
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t("sections.ceoMessage.title")}
            </h2>
          </div>

          <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed text-center lg:text-justify mb-12">
            {t.rich("sections.ceoMessage.content", {
              company: (chunks) => (
                <span className="font-semibold text-[#ffa500]">{t("companyName")}</span>
              ),
            })}
          </blockquote>

          {/* Signature */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-px bg-[#ffa500]" />
            <p className="text-[#ffa500] font-bold text-xl italic">
              {t("sections.ceoMessage.signature")}
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left - Section info */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-[#ffa500]/10 text-[#ffa500] font-bold text-lg rounded-2xl mb-6">
                  03
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001c47] tracking-tight mb-4">
                  {t("sections.objectives.title")}
                </h2>
                <div className="w-16 h-1.5 bg-[#ffa500] rounded-full" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-8">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-500">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed lg:text-justify">
                  {t.rich("sections.objectives.content", {
                    company: (chunks) => (
                      <span className="font-bold italic text-[#ffa500]">{t("companyName")}</span>
                    ),
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[#ffa500]/10 text-[#ffa500] font-bold text-lg rounded-2xl mb-6">
              04
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001c47] tracking-tight mb-4">
              {t("sections.policy.title")}
            </h2>
            <div className="w-16 h-1.5 bg-[#ffa500] rounded-full mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.rich("sections.policy.content", {
                company: (chunks) => (
                  <span className="font-bold italic text-[#ffa500]">{t("companyName")}</span>
                ),
              })}
            </p>
          </div>

          {/* Policy Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {t.raw("sections.policy.points").map((point: string, index: number) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#ffa500]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffa500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number badge */}
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-5xl font-black text-gray-100 group-hover:text-[#ffa500]/20 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#ffa500] rounded-xl shadow-lg shadow-[#ffa500]/25 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-[#001c47] font-semibold text-lg leading-relaxed pt-1">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 border-l-4 border-l-[#ffa500] rtl:border-l-0 rtl:border-r-4 rtl:border-r-[#ffa500] shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("sections.policy.footer")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ffa500]/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div>
              <span className="inline-flex items-center justify-center w-12 h-12 bg-[#ffa500]/10 text-[#ffa500] font-bold text-lg rounded-2xl mb-6">
                05
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001c47] tracking-tight mb-4">
                {t("sections.services.title")}
              </h2>
              <div className="w-16 h-1.5 bg-[#ffa500] rounded-full" />
            </div>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed lg:text-right rtl:lg:text-left">
              {t.rich("sections.services.intro", {
                company: (chunks) => (
                  <span className="font-bold italic text-[#ffa500]">{t("companyName")}</span>
                ),
              })}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw("sections.services.list").map((service: string, index: number) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#ffa500]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffa500]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number badge */}
                <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-6xl font-black text-gray-100 group-hover:text-[#ffa500]/20 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#ffa500] to-[#ff8c00] rounded-2xl mb-6 shadow-lg shadow-[#ffa500]/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-[#001c47] mb-4 group-hover:text-[#ffa500] transition-colors duration-300">
                    {service}
                  </h3>

                  {/* Decorative line */}
                  {/* <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-gray-200 group-hover:w-12 group-hover:bg-[#ffa500] transition-all duration-300 rounded-full" />
                    <span className="text-gray-400 text-sm group-hover:text-[#ffa500] transition-colors duration-300">
                      {isRTL ? "بیشتر" : "More"}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa500]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="block text-gray-400">
              {isRTL ? "آماده همکاری" : "Ready to Work"}
            </span>
            <span className="block text-[#001c47]">
              {isRTL ? "با ما هستید؟" : "Together?"}
            </span>
          </h2>

          <p className="text-gray-500 text-xl mb-10 max-w-xl mx-auto">
            {isRTL
              ? "همین امروز با ما تماس بگیرید و اولین قدم را بردارید"
              : "Get in touch today and take the first step towards success"}
          </p>

          <Link
            href={isRTL ?"/fa/contact":"/en/contact"}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#ffa500] to-[#ff8c00] text-white font-bold text-lg rounded-full overflow-hidden shadow-xl shadow-[#ffa500]/30 hover:shadow-2xl hover:shadow-[#ffa500]/40 hover:scale-105 transition-all duration-300"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </span>
            
            <span className="relative z-10">{isRTL ? "تماس با ما" : "Contact Us"}</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}