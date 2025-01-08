"use client";
import { JobCardSkeleton } from "./job-card-skeleton";
import { useState, useEffect } from "react";
import ResumeForm from "./resume-form";
import { CgSearch } from "react-icons/cg";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

export interface JobSearchParams {
  job_category_id?: number;
  city_id?: number;
  title?: string;
}

export interface JobResponse {
  id: number;
  title: string;
  job_category: {
    title: string;
  };
  city: {
    title: string;
  };
}

export const JobGrid = ({
  categories,
  cities,
}: {
  categories: any;
  cities: any;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<JobResponse[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const fetchJobs = async (params: JobSearchParams) => {
    try {
      setIsLoading(true);
      setError("");
      const queryParams = new URLSearchParams();

      if (params.job_category_id) {
        queryParams.set("job_category_id", params.job_category_id.toString());
      }
      if (params.city_id) {
        queryParams.set("city_id", params.city_id.toString());
      }
      if (params.title && params.title.length >= 2) {
        queryParams.set("title", params.title);
      }

      const response = await fetch(
        `https://jsk-co.com/api/job-opportunities?${queryParams.toString()}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await response.json();
      setJobs(data);
    } catch (error) {
      setError("خطایی رخ داده است");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs({
      title: undefined,
      job_category_id: undefined,
      city_id: undefined,
    });
  }, []);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.length >= 2 || value.length === 0) {
      fetchJobs({
        title: value,
        job_category_id: category ? Number(category) : undefined,
        city_id: city ? Number(city) : undefined,
      });
    }
  }, 300);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    fetchJobs({
      title: search,
      job_category_id: Number(value),
      city_id: city ? Number(city) : undefined,
    });
  };

  const handleCityChange = (value: string) => {
    setCity(value);
    fetchJobs({
      title: search,
      job_category_id: category ? Number(category) : undefined,
      city_id: Number(value),
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="relative md:col-span-2">
          <input
            type="text"
            placeholder="جستجوی عنوان شغل"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              debouncedSearch(e.target.value);
            }}
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

        {error && <p className="text-red-500">{error}</p>}

        {!isLoading && !jobs.length && !error && (
          <div className="text-center py-10 lg:py-20">
            <p className="text-gray-500">
              هیچ شغلی با فیلترهای انتخاب شده یافت نشد.
            </p>
          </div>
        )}

        {!isLoading &&
          jobs.length &&
          !error ?
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                    {job.title}
                  </h3>
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{job.city.title}</span>
                </div>
                <Link
                  href={`/hiring/jobs/${job.id}`}
                  className="flex justify-center items-center w-[80%] xl:w-[40%] px-2 py-2 mt-8 text-center bg-[#fea925] cursor-pointer border 
                      border-solid border-[#e6e5e5] font-[600] text-[#fff]
                       hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s]"
                >
                  مشاهده جزئیات
                </Link>
              </div>
            </div>
          )):""}
      </div>
    </>
  );
};
