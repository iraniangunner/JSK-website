"use client";
import { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import ReactPaginate from "react-paginate";
import { TenderFilters } from "@/types/tender";
import { useTenders } from "@/hooks/useTender";
import Link from "next/link";

export default function TendersTable() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filters, setFilters] = useState<TenderFilters>({
    title: "",
    tender_category_id: "",
    status: "",
  });
  const [tempFilters, setTempFilters] = useState<TenderFilters>(filters);
  const [forcePage, setForcePage] = useState<number | undefined>(undefined);

  const { data, isLoading, isError } = useTenders(page, itemsPerPage, filters);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
    setForcePage(undefined);
  };

  const handleFilterChange = (name: string, value: string) => {
    setTempFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    setFilters(tempFilters);
    setPage(1);
    setForcePage(0);
  };

  const clearFilters = () => {
    setTempFilters({ title: "", tender_category_id: "", status: "" });
    setFilters({ title: "", tender_category_id: "", status: "" });
    setPage(1);
    setForcePage(0);
  };

  useEffect(() => {
    if (forcePage !== undefined) {
      setForcePage(undefined);
    }
  }, [forcePage]);

  return (
    <div className="container mx-auto p-4 xl:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 self-start">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">جستجوی پیشرفته</h2>
            <button className="text-gray-500 hover:text-gray-700"></button>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                عنوان فراخوان
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={tempFilters.title}
                  onChange={(e) => handleFilterChange("title", e.target.value)}
                  id="region-search"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="عنوان را وارد کنید..."
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="competition"
                className="block text-sm font-medium mb-1"
              >
                دسته بندی فراخوان
              </label>
              <select
                value={tempFilters.tender_category_id}
                onChange={(e) =>
                  handleFilterChange("tender_category_id", e.target.value)
                }
                id="competition"
                className="w-full px-3 py-2 border text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">همه دسته بندی ها</option>
                <option value="open">مناقصه</option>
                <option value="limited">مزایده</option>
                <option value="direct">استعلام</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-1"
              >
                وضعیت فراخوان
              </label>
              <select
                id="status"
                value={tempFilters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="w-full px-3 py-2 border text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">همه وضعیت ها</option>
                <option value="active">غیر فعال</option>
                <option value="closed">لغو</option>
                <option value="expose">تمدید</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={applyFilters}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                پاک کردن
              </button>
              <button
                onClick={clearFilters}
                className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                جستجو
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-4">
            <h1 className="text-2xl font-semibold">لیست فراخوان ها</h1>
            <div className="flex items-center">
              <select
                className="border text-sm text-gray-600 rounded px-8 py-1 w-[150px]"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value="10">نمایش 10 فراخوان</option>
                <option value="20">نمایش 20 فراخوان</option>
                <option value="50">نمایش 50 فراخوان</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-[calc(100vh-200px)] overflow-y-auto rounded-md border border-gray-200">
              <div className="space-y-4 p-4">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error occured</p>}
                {data?.data.map((tender) => (
                  <div
                    key={tender.id}
                    className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="grid gap-4">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <h3 className="text-lg font-semibold">
                            {tender.title}
                          </h3>
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
                              <span>{tender.tender_category.title}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">شماره:</span>
                            <span>{tender.number}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">تاریخ شروع:</span>
                            <span>{tender.start_date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-600">تاریخ پایان:</span>
                            <span className="font-medium">
                              {tender.end_date}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-600">وضعیت:</span>
                            <span className="font-medium">{tender.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ReactPaginate
              previousLabel={<ChevronRightIcon className="h-4 w-4" />}
              nextLabel={<ChevronLeftIcon className="h-4 w-4" />}
              breakLabel="..."
              breakClassName="hidden sm:flex items-center justify-center w-8 h-8 text-sm"
              pageCount={data?.last_page || 1}
              marginPagesDisplayed={2}
              forcePage={forcePage}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName="flex items-center justify-center space-x-1 sm:space-x-2"
              pageClassName="hidden sm:flex items-center justify-center w-8 h-8 rounded border text-sm"
              pageLinkClassName="flex items-center justify-center w-full h-full"
              activeClassName="bg-indigo-600 text-white"
              previousClassName="flex items-center justify-center w-8 h-8 rounded border ml-2"
              nextClassName="flex items-center justify-center w-8 h-8 rounded border"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
            <div className="sm:hidden text-sm text-center mt-2">
              صفحه {page + 1} از {data?.last_page || 1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
