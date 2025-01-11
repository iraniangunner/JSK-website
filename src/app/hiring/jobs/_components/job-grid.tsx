"use client";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CgSearch } from "react-icons/cg";
import { JobCard } from "./job-card";
import { JobCardSkeleton } from "./job-card-skeleton";
import { useJobs } from "@/hooks/useJobs";
import { JobSearchParams, JobResponse } from "@/types/job";

export const JobGrid = ({
  categories,
  cities,
}: {
  categories: any;
  cities: any;
}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const searchParams: JobSearchParams = {
    title: search.length >= 2 ? search : undefined,
    job_category_id: category ? Number(category) : undefined,
    city_id: city ? Number(city) : undefined,
  };

  const { data: jobs, isLoading, error, refetch } = useJobs(searchParams);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    if (search.length >= 2 || search.length === 0) {
      refetch();
    }
  }, [search, refetch]);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleCityChange = (value: string) => {
    setCity(value);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="relative md:col-span-2">
          <input
            type="text"
            placeholder="جستجوی عنوان شغل"
            onChange={(e) => debouncedSearch(e.target.value)}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pr-10 pl-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <CgSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <select
          onChange={(e) => handleCityChange(e.target.value)}
          value={city}
          className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">همه شهرها</option>
          {cities.map((city: any) => (
            <option key={city.id} value={city.id}>
              {city.title}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={category}
          className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">همه دسته بندی ها</option>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <JobCardSkeleton key={`skeleton-${index}`} />
          ))}

        {error && (
          <p className="text-red-500">مشکلی پیش آمده دوباره تلاش کنید</p>
        )}

        {!isLoading && jobs && jobs.length === 0 && !error && (
          <div className="text-center py-10 lg:py-20">
            <p className="text-gray-500">
              هیچ شغلی با فیلترهای انتخاب شده یافت نشد.
            </p>
          </div>
        )}

        {!isLoading &&
          jobs &&
          jobs.length > 0 &&
          !error &&
          jobs.map((job: JobResponse) => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  );
};
