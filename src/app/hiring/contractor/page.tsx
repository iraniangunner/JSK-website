import { PageCover } from "@/components/pageCover";
import { ContractorForm } from "./_components/contractor-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "همکاری شرکت ها",
  description: "فرم درخواست همکاری شرکت ها",
  alternates: {
    canonical: "/hiring/contractor",
  },
  openGraph: {
    title: "ژیوار صنعت کیان | همکاری شرکت ها",
    description: "فرم درخواست همکاری شرکت ها",
  },
};

export default function ContractorPage() {
  return (
    <div>
      <PageCover title="همکاری شرکت ها" bgImage="projects-pattern" />
      <ContractorForm />
    </div>
  );
}
