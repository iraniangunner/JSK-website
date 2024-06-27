"use client";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  type,
  total,
}: {
  type: number;
  total: number;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const router = useRouter();

  const handlePageChange = ({ selected }: { selected: number }) => {
    router.push(`/projects?type=${type}&page=${selected + 1}`);
  };
  return (
    <div className="mt-8">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={total}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
        initialPage={currentPage - 1}
      />
    </div>
  );
}
