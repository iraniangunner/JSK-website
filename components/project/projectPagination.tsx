"use client";
import { toPersianNumber } from "@/utils/numberUtils";
import { useRouter } from "next/navigation";

const Pagination = ({
  currentPage,
  totalPages,
  type,
}: {
  currentPage: number;
  totalPages: number;
  type: number;
}) => {
  const router = useRouter();

  const onPageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/projects?type=${type}&page=${page}`);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const visiblePages = 5;
    const half = Math.floor(visiblePages / 2);

    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, currentPage + half);

    if (currentPage - half <= 0) {
      endPage = Math.min(totalPages, visiblePages);
    }

    if (currentPage + half >= totalPages) {
      startPage = Math.max(1, totalPages - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) {
      pages.unshift("...");
      pages.unshift(1);
    }

    if (endPage < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="pagination mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="ellipsis">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`page-number ${page === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {toPersianNumber(page)}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
