"use client";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ReactPaginate from "react-paginate";
import { TenderFilters } from "@/types/tender";
import { useTenders } from "@/hooks/useTender";
import { useScroll } from "@/hooks/useScroll";
import { TenderView } from "./tenderView";
import { TenderSkeletons } from "./tender-skeleton";

export function TendersTable() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filters, setFilters] = useState<TenderFilters>({
    title: "",
    tender_category_id: "all",
    status: "all",
  });
  const [tempFilters, setTempFilters] = useState<TenderFilters>(filters);
  const [forcePage, setForcePage] = useState<number | undefined>(undefined);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const { data, isLoading, isError  } = useTenders(page, itemsPerPage, filters);

  const [isScrolling] = useScroll(80);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
    setForcePage(undefined);
  };

  const handleFilterChange = (name: string, value: string) => {
    setTempFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    if (tempFilters.title && tempFilters.title.length < 2) {
      setErrorMessage("عنوان باید حداقل ۲ حرف داشته باشد.");
      return;
    }
    setErrorMessage("");
    setFilters(tempFilters);
    setPage(1);
    setForcePage(0);
  };

  const clearFilters = () => {
    setErrorMessage("");
    setTempFilters({ title: "", tender_category_id: "all", status: "all" });
    setFilters({ title: "", tender_category_id: "all", status: "all" });
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
        <div
          className={`bg-white p-6 rounded-lg border border-gray-200 self-start  ${
            isScrolling ? "xl:sticky xl:top-24" : "xl:relative"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">جستجوی پیشرفته</h2>
            <button className="text-gray-500 hover:text-gray-700"></button>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="search-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                عنوان فراخوان
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={tempFilters.title}
                  onChange={(e) => handleFilterChange("title", e.target.value)}
                  id="search-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="عنوان را وارد کنید..."
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 mt-1 text-sm">{errorMessage}</p>
              )}
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
                className="w-full px-3 py-2 border text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">همه دسته بندی ها</option>
                <option value="1">مناقصه</option>
                <option value="2">مزایده</option>
                <option value="3">استعلام</option>
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
                className="w-full px-3 py-2 border text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">همه وضعیت ها</option>
                <option value="active">فعال</option>
                <option value="inactive">غیر فعال</option>
                <option value="cancelled">لغو</option>
                <option value="renewal">تمدید</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={clearFilters}
                disabled={isLoading}
                className="flex-1 px-4 py-2 border disabled:opacity-50 border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                پاک کردن
              </button>
              <button
                onClick={applyFilters}
                disabled={isLoading}
                className="flex-1 px-4 py-2 border disabled:opacity-50 der-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setPage(1);
                  setForcePage(0);
                }}
              >
                <option value="10">نمایش 10 فراخوان</option>
                <option value="20">نمایش 20 فراخوان</option>
                <option value="50">نمایش 50 فراخوان</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-[calc(100vh-200px)] overflow-y-auto rounded-md border border-gray-400">
              <div className="space-y-4 p-4 h-full">
                {isLoading ? (
                  <TenderSkeletons />
                ) : isError ? (
                  <div className="flex h-full justify-center items-center">
                    <p className="text-red-500">
                      مشکلی پیش امده دوباره تلاش کنید
                    </p>
                  </div>
                ) : !data || !data.data.length ? (
                  <div className="flex h-full justify-center items-center">
                    <p>فراخوانی یافت نشد</p>
                  </div>
                ) : (
                  data?.data.map((tender:any) => (
                    <TenderView key={tender.id} tender={tender} />
                  ))
                )}
              </div>
            </div>
            <ReactPaginate
              previousLabel={<ChevronRightIcon className="h-4 w-4" />}
              nextLabel={<ChevronLeftIcon className="h-4 w-4" />}
              breakLabel="..."
              breakClassName="hidden sm:flex items-center justify-center w-8 h-8 text-sm"
              pageCount={ data?.meta.last_page || 1}
              marginPagesDisplayed={2}
              forcePage={forcePage}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName="flex items-center justify-center space-x-1 sm:space-x-2"
              pageClassName="hidden sm:flex items-center justify-center w-8 h-8 rounded border text-sm"
              pageLinkClassName="flex items-center justify-center w-full h-full"
              activeClassName="bg-blue-600 text-white"
              previousClassName="flex items-center justify-center w-8 h-8 rounded border ml-2"
              nextClassName="flex items-center justify-center w-8 h-8 rounded border"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
            <div className="sm:hidden text-sm text-center mt-2">
              صفحه {page} از {data?.last_page || 1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
