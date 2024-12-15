"use client";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
// import { ChevronDownIcon, ChevronUpIcon } from "@/components/icons";

// Mock data for tenders
const mockTenders = Array.from({ length: 100 }, (_, i) => ({
  id: `1115${i.toString().padStart(4, "0")}`,
  // title: "مناقصه عمومی یک مرحله ای...",
  title: `Supply Of Item ${i + 1} At Location ${i + 1}`,
  type: "مناقصه",
  T_number: 7253465234,
  start_date: "1399/04/21",
  end_date: "1400/01/30",
  rules: "لطفاً تمام قوانین و مقررات مربوط به این مناقصه را با دقت مطالعه فرمایید.",
    deliveryLocation: "تهران، خیابان ولیعصر، پلاک 1234",
    deliveryDeadline: "1402/06/31",
    openingDate: "1402/07/05",
    documents: [
      { name: "فرم شرکت در مناقصه", url: "/documents/form.pdf" },
      { name: "مشخصات فنی پروژه", url: "/documents/specs.pdf" },
      { name: "قرارداد نمونه", url: "/documents/contract.pdf" },
    ],
  status: "فعال",
  country: "India",
  value: "Refer Document",
  deadline: `${(i % 30) + 1} Dec 2024`,
  description: `This is a detailed description for the tender of Supply Of Item ${
    i + 1
  } At Location ${
    i + 1
  }. It includes specifications, requirements, and other relevant information for potential bidders.`,
}));

interface TenderListProps {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
}

// const fetchData = () => {
//     setLoading(true);
//     fetch(
//       `https://randomuser.me/api?${qs.stringify(
//         getRandomuserParams(tableParams)
//       )}`
//     )
//       .then((res) => res.json())
//       .then(({ results }) => {
//         setData(results);
//         setLoading(false);
//         setTableParams({
//           ...tableParams,
//           pagination: {
//             ...tableParams.pagination,
//             total: 200,
//             // 200 is mock data, you should read it from server
//             // total: data.totalCount,
//           },
//         });
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

export function TenderList({
  currentPage,
  itemsPerPage,
  setCurrentPage,
}: TenderListProps) {
  // const [openTenderId, setOpenTenderId] = useState<string | null>(null);

  const pageCount = Math.ceil(mockTenders.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentTenders = mockTenders.slice(offset, offset + itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  // const toggleTenderDetails = (tenderId: string) => {
  //   setOpenTenderId(openTenderId === tenderId ? null : tenderId);
  // };

  return (
    <div className="space-y-4">
      <div className="h-[calc(100vh-200px)] overflow-y-auto rounded-md border border-gray-200">
        <div className="space-y-4 p-4">
          {currentTenders?.map((tender) => (
            <div
              key={tender.id}
              className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="grid gap-4">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <h3 className="text-lg font-semibold">{tender.title}</h3>
                    <Link
                      href={`/tenders/${tender.id}`}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      مشاهده جزئیات
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">دسته بندی:</span>
                      <div className="flex items-center gap-2">
                        <span>{tender.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">شماره:</span>
                      <span>{tender.T_number}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">تاریخ شروع:</span>
                      <span>{tender.start_date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">تاریخ پایان:</span>
                      <span className="font-medium">{tender.end_date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">وضعیت:</span>
                      <span className="font-medium">{tender.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) || <p>No tenders available.</p>}
        </div>
      </div>
      <ReactPaginate
        previousLabel={<ChevronRightIcon className="h-4 w-4" />}
        nextLabel={<ChevronLeftIcon className="h-4 w-4" />}
        breakLabel="..."
        breakClassName="hidden sm:flex items-center justify-center w-8 h-8 text-sm"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="flex items-center justify-center space-x-1 sm:space-x-2"
        pageClassName="hidden sm:flex items-center justify-center w-8 h-8 rounded border text-sm"
        pageLinkClassName="flex items-center justify-center w-full h-full"
        activeClassName="bg-indigo-600 text-white"
        previousClassName="flex items-center justify-center w-8 h-8 rounded border ml-2"
        nextClassName="flex items-center justify-center w-8 h-8 rounded border"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
      <div className="sm:hidden text-sm text-center mt-2">
        صفحه {currentPage + 1} از {pageCount}
      </div>
    </div>
  );
}
