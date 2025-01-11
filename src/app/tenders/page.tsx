import TenderTable from "@/components/tender/tenderTable";
import { Metadata } from "next";
import { PageCover } from "@/components/pageCover";
import TenderListWrapper from "@/components/tender/tender-wrapper";

export const metadata: Metadata = {
  title: "مناقصات",
  description: "مناقصات ژیوار صنعت کیان",
  openGraph: {
    title: "ژیوار صنعت کیان | مناقصات",
    description: "مناقصات ژیوار صنعت کیان",
  },
};

export default function Tender() {
  return (
    <>
      <PageCover title="فراخوان ها" bgImage="projects-pattern" />
      <div className="my-12 mx-8">
        <TenderListWrapper />
      </div>
    </>
  );
}
