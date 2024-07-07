import TenderSearch from "@/components/tender/tenderSearch";
import TenderTable from "@/components/tender/tenderTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ژیوار صنعت کیان | مناقصات",
  description: "مناقصات ژیوار صنعت کیان",
  openGraph: {
    title: "ژیوار صنعت کیان | مناقصات",
    description: "مناقصات ژیوار صنعت کیان",
  },
};

export default function Tender() {
  return (
    <div className="my-12 mx-8">
      <TenderSearch />
      <TenderTable />
    </div>
  );
}
