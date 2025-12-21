import { PageCover } from "@/components/pageCover";
import { CertificationsCarousel } from "@/components/carousel/CertificationCarousel";
import { getLocale, getTranslations } from "next-intl/server";
import { Award, Shield, BadgeCheck } from "lucide-react";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Certifications" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/certifications",
    },
    openGraph: {
      title: t("default"),
      description: t("description"),
    },
  };
}

export default async function Certifications() {
  const locale = await getLocale();
  const isRTL = locale === "fa";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <PageCover
        title={isRTL ? "گواهینامه ها و جوایز" : "Certifications & Awards"}
      />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                value: "15+",
                label: isRTL ? "جوایز بین‌المللی" : "International Awards",
                color: "text-amber-500",
                bg: "bg-amber-50",
              },
              {
                icon: Shield,
                value: "ISO",
                label: isRTL ? "گواهینامه‌های ISO" : "ISO Certified",
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                icon: BadgeCheck,
                value: "100%",
                label: isRTL ? "تضمین کیفیت" : "Quality Assured",
                color: "text-emerald-500",
                bg: "bg-emerald-50",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <p className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
              {isRTL ? "افتخارات ما" : "Our Achievements"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {isRTL
                ? "گواهینامه‌های بین‌المللی"
                : "International Certifications"}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {isRTL
                ? "ما مفتخریم که دارای گواهینامه‌های معتبر بین‌المللی هستیم که تعهد ما به کیفیت و استانداردهای جهانی را نشان می‌دهد."
                : "We are proud to hold prestigious international certifications that demonstrate our commitment to quality and global standards."}
            </p>
          </div>

          <CertificationsCarousel />
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-white mb-3">
            {isRTL
              ? "به کیفیت ما اعتماد کنید"
              : "Trust in Our Quality Standards"}
          </h3>
          <p className="text-slate-300">
            {isRTL
              ? "گواهینامه‌های ما توسط سازمان‌های معتبر بین‌المللی تأیید شده‌اند"
              : "Our certifications are verified by internationally recognized organizations"}
          </p>
        </div>
      </section>
    </div>
  );
}