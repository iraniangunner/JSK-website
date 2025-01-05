import { PageCover } from "@/components/pageCover";
import { ContractorForm } from "./_components/contractor-form";

export default function ContractorPage() {
  return (
    <div>
      <PageCover title="همکاری پیمانکاران" bgImage="projects-pattern" />
      <ContractorForm />
    </div>
  );
}
