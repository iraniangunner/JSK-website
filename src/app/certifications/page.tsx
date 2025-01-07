import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";
import { CertificationsCarousel } from "@/components/carousel/CertificationCarousel";

export const metadata: Metadata = {
  title: "گواهینامه ها",
  description: "گواهینامه ها و جوایز شرکت ژیوار صنعت کیان",
  alternates: {
    canonical: "/certifications",
  },
  openGraph: {
    title: "ژیوار صنعت کیان | گواهینامه ها",
    description: "گواهینامه ها و جوایز شرکت ژیوار صنعت کیان",
  },
};

export default function Certifications() {
  return (
    <>
      <PageCover title="گواهینامه ها و جوایز" bgImage="projects-pattern" />
      <div className="flex justify-center my-16">
        <div className="w-[80%] pt-[30px]">
          <CertificationsCarousel />
        </div>
      </div>
    </>
  );
}
