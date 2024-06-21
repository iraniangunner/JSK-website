import TenderSearch from "@/components/tender/tenderSearch";
import TenderTable from "@/components/tender/tenderTable";
// import { Suspense } from "react";

export const metadata = {
  title: "ژیوار صنعت کیان | مناقصات",
};

export default function Tender() {
  return (
    <div className="my-12 mx-8">
      <TenderSearch />
      <TenderTable />
    </div>
  );
}
