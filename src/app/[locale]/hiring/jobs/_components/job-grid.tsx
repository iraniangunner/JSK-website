"use client";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Search, MapPin, Briefcase, X, SlidersHorizontal } from "lucide-react";
import { JobCard } from "./job-card";
import { JobCardSkeleton } from "./job-card-skeleton";
import { useJobs } from "@/hooks/useJobs";
import { JobSearchParams, JobResponse } from "@/types/job";
import { useLocale, useTranslations } from "next-intl";

export const JobGrid = ({
  categories,
  cities,
}: {
  categories: any;
  cities: any;
}) => {
  const t = useTranslations("JobGrid");
  const locale = useLocale();
  const isRTL = locale === "fa";
  
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const searchParams: JobSearchParams = {
    ...(isRTL
      ? { title: search.length >= 2 ? search : undefined }
      : { title_en: search.length >= 2 ? search : undefined }),
    job_category_id: category ? Number(category) : undefined,
    city_id: city ? Number(city) : undefined,
  };

  const { data: jobs, isLoading, error, refetch } = useJobs(searchParams);

  // Filter only active jobs
  const activeJobs = jobs?.filter((job: JobResponse) => job.is_active) || [];

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    if (search.length >= 2 || search.length === 0) {
      refetch();
    }
  }, [search, refetch]);

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    debouncedSearch(value);
  };

  const clearFilters = () => {
    setSearch("");
    setSearchInput("");
    setCategory("");
    setCity("");
  };

  const hasActiveFilters = search || category || city;

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6">
        {/* Main Search Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 ${isRTL ? "right-4" : "left-4"}`} />
            <input
              type="text"
              value={searchInput}
              placeholder={t("searchPlaceholder")}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={`w-full bg-gray-50 border border-gray-200 rounded-xl py-3 ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} focus:outline-none focus:ring-2 focus:ring-[#EC9123]/20 focus:border-[#EC9123] transition-all`}
            />
            {searchInput && (
              <button
                onClick={() => handleSearchChange("")}
                className={`absolute top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors ${isRTL ? "left-3" : "right-3"}`}
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <SlidersHorizontal className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">
              {isRTL ? "فیلترها" : "Filters"}
            </span>
            {hasActiveFilters && (
              <span className="flex items-center justify-center h-5 w-5 bg-[#EC9123] text-white text-xs rounded-full">
                {[search, category, city].filter(Boolean).length}
              </span>
            )}
          </button>

          {/* Desktop Filters */}
          <div className="hidden md:flex gap-4">
            {/* City Select */}
            <div className="relative min-w-[180px]">
              <MapPin className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 ${isRTL ? "right-3" : "left-3"}`} />
              <select
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className={`w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl py-3 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-8"} focus:outline-none focus:ring-2 focus:ring-[#EC9123]/20 focus:border-[#EC9123] transition-all cursor-pointer`}
                aria-label={t("filters.cities")}
              >
                <option value="">{t("allCities")}</option>
                {cities.map((c: any) => (
                  <option key={c.id} value={c.id}>
                    {isRTL ? c.title : c.title_en}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Select */}
            <div className="relative min-w-[180px]">
              <Briefcase className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 ${isRTL ? "right-3" : "left-3"}`} />
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className={`w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl py-3 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-8"} focus:outline-none focus:ring-2 focus:ring-[#EC9123]/20 focus:border-[#EC9123] transition-all cursor-pointer`}
                aria-label={t("filters.categories")}
              >
                <option value="">{t("allCategories")}</option>
                {categories.map((cat: any) => (
                  <option key={cat.id} value={cat.id}>
                    {isRTL ? cat.title : cat.title_en}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters (Collapsible) */}
        {showFilters && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-gray-100">
            {/* City Select */}
            <div className="relative">
              <MapPin className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 ${isRTL ? "right-3" : "left-3"}`} />
              <select
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className={`w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl py-3 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"} focus:outline-none focus:ring-2 focus:ring-[#EC9123]/20 focus:border-[#EC9123]`}
                aria-label={t("filters.cities")}
              >
                <option value="">{t("allCities")}</option>
                {cities.map((c: any) => (
                  <option key={c.id} value={c.id}>
                    {isRTL ? c.title : c.title_en}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Select */}
            <div className="relative">
              <Briefcase className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 ${isRTL ? "right-3" : "left-3"}`} />
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className={`w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl py-3 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"} focus:outline-none focus:ring-2 focus:ring-[#EC9123]/20 focus:border-[#EC9123]`}
                aria-label={t("filters.categories")}
              >
                <option value="">{t("allCategories")}</option>
                {categories.map((cat: any) => (
                  <option key={cat.id} value={cat.id}>
                    {isRTL ? cat.title : cat.title_en}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Active Filters Tags */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {isRTL ? "فیلترهای فعال:" : "Active filters:"}
            </span>
            
            {search && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#EC9123]/10 text-[#EC9123] rounded-full text-sm">
                <Search className="h-3 w-3" />
                {search}
                <button onClick={() => { setSearch(""); setSearchInput(""); }} className="hover:bg-[#EC9123]/20 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {city && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                <MapPin className="h-3 w-3" />
                {isRTL 
                  ? cities.find((c: any) => c.id === Number(city))?.title 
                  : cities.find((c: any) => c.id === Number(city))?.title_en}
                <button onClick={() => setCity("")} className="hover:bg-blue-100 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                <Briefcase className="h-3 w-3" />
                {isRTL 
                  ? categories.find((c: any) => c.id === Number(category))?.title 
                  : categories.find((c: any) => c.id === Number(category))?.title_en}
                <button onClick={() => setCategory("")} className="hover:bg-purple-100 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              {isRTL ? "پاک کردن همه" : "Clear all"}
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      {!isLoading && activeJobs.length > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{activeJobs.length}</span>
            {" "}
            {isRTL ? "فرصت شغلی یافت شد" : "jobs found"}
          </p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && activeJobs.length === 0 && !error && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Briefcase className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {isRTL ? "فرصت شغلی یافت نشد" : "No jobs found"}
          </h3>
          <p className="text-gray-500 text-center max-w-md mb-6">
            {isRTL 
              ? "متأسفانه فرصت شغلی با این مشخصات پیدا نشد. لطفاً فیلترها را تغییر دهید."
              : "We couldn't find any jobs matching your criteria. Try adjusting your filters."}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-[#EC9123] text-white rounded-lg hover:bg-[#d4820f] transition-colors"
            >
              {isRTL ? "پاک کردن فیلترها" : "Clear filters"}
            </button>
          )}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <X className="h-12 w-12 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {isRTL ? "خطا در دریافت اطلاعات" : "Error loading jobs"}
          </h3>
          <p className="text-gray-500 text-center max-w-md mb-6">
            {t("errorMessage")}
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-2 bg-[#EC9123] text-white rounded-lg hover:bg-[#d4820f] transition-colors"
          >
            {isRTL ? "تلاش مجدد" : "Try again"}
          </button>
        </div>
      )}

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <JobCardSkeleton key={`skeleton-${index}`} />
          ))}

        {!isLoading &&
          !error &&
          activeJobs.map((job: JobResponse) => (
            <JobCard key={job.id} job={job} />
          ))}
      </div>
    </div>
  );
};