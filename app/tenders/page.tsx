import TenderSearch from "@/components/tender/tenderSearch";
import TenderTable from "@/components/tender/tenderTable";

export default function Tender(){
  return (
    <div className="my-12 mx-8">
      <TenderSearch/>
      <TenderTable/>
    </div>
  )
}
