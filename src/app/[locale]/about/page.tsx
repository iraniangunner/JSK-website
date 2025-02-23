import { PageCover } from "@/components/pageCover";
import { getLocale, getTranslations } from "next-intl/server";

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
  return (
    <>
      <PageCover
        title={`${locale === "fa" ? "درباره ما" : "About Us"}`}
        bgImage="projects-pattern"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="container mx-auto px-4 py-12 max-w-[850px]">
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">
              {t("sections.about.title")}
            </h2>
            <p className="text-lg leading-10 mb-6 lg:text-justify">
              {t.rich("sections.about.content", {
                company: (chunks) => (
                  <span className="font-bold italic text-[#ffa500]">
                    {t("companyName")}
                  </span>
                ),
              })}
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">
              {t("sections.ceoMessage.title")}
            </h2>
            <p className="text-lg leading-10 mb-6 lg:text-justify">
              {t.rich("sections.ceoMessage.content", {
                company: (chunks) => (
                  <span className="font-bold italic text-[#ffa500]">
                    {t("companyName")}
                  </span>
                ),
              })}
              <br />
              <br />
              <span className="italic">
                {t("sections.ceoMessage.signature")}
              </span>
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">
              {t("sections.objectives.title")}
            </h2>
            <p className="text-lg leading-10 mb-6 lg:text-justify">
              {t.rich("sections.objectives.content", {
                company: (chunks) => (
                  <span className="font-bold italic text-[#ffa500]">
                    {t("companyName")}
                  </span>
                ),
              })}
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">
              {t("sections.policy.title")}
            </h2>
            <div className="text-lg leading-10 mb-6 lg:text-justify">
              {t.rich("sections.policy.content", {
                company: (chunks) => (
                  <span className="font-bold italic text-[#ffa500]">
                    {t("companyName")}
                  </span>
                ),
              })}
              <ul className="list-disc pr-5 mt-5">
                {t
                  .raw("sections.policy.points")
                  .map((point: string, index: number) => (
                    <li key={index} className="mt-3">
                      <p className="text-[#001c47] font-bold">{point}</p>
                    </li>
                  ))}
              </ul>
              <p className="text-lg leading-10 mb-6 lg:text-justify mt-4">
                {t("sections.policy.footer")}
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6">
              {t("sections.services.title")}
            </h2>
            <div className="text-lg leading-10 mb-6 lg:text-justify">
              {t.rich("sections.services.intro", {
                company: (chunks) => (
                  <span className="font-bold italic text-[#ffa500]">
                    {t("companyName")}
                  </span>
                ),
              })}
              <ul className="list-disc pr-5 mt-5">
                {t
                  .raw("sections.services.list")
                  .map((service: string, index: number) => (
                    <li key={index} className="mt-3">
                      <p className="text-[#001c47] font-bold">{service}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
