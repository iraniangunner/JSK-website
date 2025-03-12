"use client";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useLocale, useTranslations } from "next-intl";
import type {
  Tender,
  TenderCategory,
  TenderSearchParams,
} from "@/types/tender";
import { useTenders } from "@/hooks/useTender";
import { useScroll } from "@/hooks/useScroll";
import { TenderView } from "./tenderView";
import { TenderSkeletons } from "./tender-skeleton";
import ReactPaginate from "react-paginate";

export function TendersTable({ categories }: { categories: TenderCategory[] }) {
  const t = useTranslations("Tenders");
  const locale = useLocale();
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [forcePage, setForcePage] = useState<number | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isScrolling] = useScroll(80);
  // UI state (what user is typing/selecting)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  // Applied filters (what's actually used for the API call)
  const [appliedTitle, setAppliedTitle] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("all");
  const [appliedStatus, setAppliedStatus] = useState("all");

  const searchParams: TenderSearchParams = {
    page: page ? page : undefined,
    per_page: itemsPerPage ? itemsPerPage : undefined,
    ...(locale === "fa"
      ? { title: appliedTitle.length >= 2 ? appliedTitle : undefined }
      : { title_en: appliedTitle.length >= 2 ? appliedTitle : undefined }),
    tender_category_id:
      appliedCategory && appliedCategory !== "all"
        ? Number(appliedCategory)
        : undefined,
    status:
      appliedStatus && appliedStatus !== "all" ? appliedStatus : undefined,
  };

  const { data, isLoading, isError } = useTenders(searchParams);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
    setForcePage(undefined);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const applyFilters = () => {
    if (title && title.length < 2) {
      setErrorMessage(t("filters.fields.tenderTitle.error"));
      return;
    }
    setErrorMessage("");

    // Apply the current UI filter values
    setAppliedTitle(title);
    setAppliedCategory(category);
    setAppliedStatus(status);

    // Reset to first page when applying filters
    setPage(1);
    setForcePage(0);
  };

  const clearFilters = () => {
    setErrorMessage("");

    // Reset UI filter values
    setTitle("");
    setCategory("all");
    setStatus("all");

    // Reset applied filter values
    setAppliedTitle("");
    setAppliedCategory("all");
    setAppliedStatus("all");

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
          className={`bg-white p-6 rounded-lg border border-gray-200 self-start ${
            isScrolling ? "xl:sticky xl:top-24" : "xl:relative"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{t("filters.title")}</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="search-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("filters.fields.tenderTitle.label")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  id="search-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 rtl:text-right"
                  placeholder={t("filters.fields.tenderTitle.placeholder")}
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
                {t("filters.fields.category.label")}
              </label>
              <select
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                id="competition"
                className="w-full px-3 py-2 border text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 rtl:text-right"
              >
                <option value="all">
                  {t("filters.fields.category.options.all")}
                </option>
                {categories.map((category: any) => (
                  <option key={category.id} value={category.id}>
                    {locale === "fa" ? category.title : category.title_en}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-1"
              >
                {t("filters.fields.status.label")}
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full px-3 py-2 border text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 rtl:text-right"
              >
                <option value="all">
                  {t("filters.fields.status.options.all")}
                </option>
                <option value="active">
                  {t("filters.fields.status.options.active")}
                </option>
                <option value="inactive">
                  {t("filters.fields.status.options.inactive")}
                </option>
                <option value="cancelled">
                  {t("filters.fields.status.options.cancelled")}
                </option>
                <option value="renewal">
                  {t("filters.fields.status.options.renewal")}
                </option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={clearFilters}
                disabled={isLoading}
                className="flex-1 px-4 py-2 border disabled:opacity-50 border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t("filters.buttons.clear")}
              </button>
              <button
                onClick={applyFilters}
                disabled={isLoading}
                className="flex-1 px-4 py-2 border disabled:opacity-50 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t("filters.buttons.search")}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-4">
            <h1 className="text-2xl font-semibold">{t("list.title")}</h1>
            <div className="flex items-center">
              <select
                className="border text-sm text-gray-600 rounded px-6 py-1 w-[200px]"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setPage(1);
                  setForcePage(0);
                }}
              >
                {[10, 20, 50].map((value) => (
                  <option key={value} value={value}>
                    {t("list.display.show")} {value} {t("list.display.tenders")}
                  </option>
                ))}
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
                    <p className="text-red-500">{t("list.error")}</p>
                  </div>
                ) : !data || !data.data.length ? (
                  <div className="flex h-full justify-center items-center">
                    <p>{t("list.empty")}</p>
                  </div>
                ) : (
                  data?.data.map((tender: Tender) => (
                    <TenderView key={tender.id} tender={tender} />
                  ))
                )}
              </div>
            </div>

            <ReactPaginate
              previousLabel={
                locale === "fa" ? (
                  <ChevronRightIcon className="h-4 w-4" />
                ) : (
                  <ChevronLeftIcon className="h-4 w-4" />
                )
              }
              nextLabel={
                locale === "fa" ? (
                  <ChevronLeftIcon className="h-4 w-4" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4" />
                )
              }
              breakLabel="..."
              breakClassName="hidden sm:flex items-center justify-center w-8 h-8 text-sm"
              pageCount={data?.meta.last_page || 1}
              marginPagesDisplayed={2}
              forcePage={forcePage}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName="flex items-center justify-center space-x-1 sm:space-x-2 rtl:space-x-reverse"
              pageClassName="hidden sm:flex items-center justify-center w-8 h-8 rounded border text-sm"
              pageLinkClassName="flex items-center justify-center w-full h-full"
              activeClassName="bg-blue-600 text-white"
              previousClassName="flex items-center justify-center w-8 h-8 rounded border ml-2 rtl:ml-0 rtl:mr-2"
              nextClassName="flex items-center justify-center w-8 h-8 rounded border"
              disabledClassName="opacity-50 cursor-not-allowed"
            />

            <div className="sm:hidden text-sm text-center mt-2">
              {t("list.pagination.page")} {page} {t("list.pagination.of")}{" "}
              {data?.meta.last_page || 1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
