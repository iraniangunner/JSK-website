import TenderSearch from "@/components/tenderTable/tenderSearch";
import TenderTable from "@/components/tenderTable/tenderTable";

export default function Tender(){
  return (
    <div className="my-12 mx-8">
      <TenderSearch/>
      <TenderTable/>
    </div>
  )
}
