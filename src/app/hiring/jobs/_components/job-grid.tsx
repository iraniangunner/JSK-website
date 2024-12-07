"use client";
import { FilterOption, Job } from "@/types/job";
import { JobFilters } from "./job-filters";
import { JobCard } from "./job-card";
import { JobCardSkeleton } from "./job-card-skeleton";
import { useState } from "react";
import ResumeForm from "./resume-form";

const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "مشاور سرمایه گذاری",
    location: "اهواز",
    category: "investment",
    isUrgent: true,
  },
  {
    id: "2",
    title: "مشاور سرمایه گذاری(خرم آباد)",
    location: "خرم آباد",
    category: "investment",
    isUrgent: true,
  },
  {
    id: "3",
    title: "مشاور سرمایه گذاری(قزوین)",
    location: "قزوین",
    category: "investment",
    isUrgent: false,
  },
  {
    id: "4",
    title: "مشاور سرمایه گذاری(مشهد)",
    location: "مشهد",
    category: "investment",
    isUrgent: true,
  },
  {
    id: "5",
    title: "مشاور سرمایه گذاری(ماهشهر)",
    location: "ماهشهر",
    category: "investment",
    isUrgent: true,
  },
  {
    id: "6",
    title: "مشاور سرمایه گذاری(بوشهر)",
    location: "بوشهر",
    category: "investment",
    isUrgent: false,
  },
  // Add more mock jobs here to test pagination
  // ...Array.from({ length: 10 }, (_, i) => ({
  //   id: `${i + 7}`,
  //   title: `مشاور سرمایه گذاری(شهر ${i + 7})`,
  //   location: `شهر ${i + 7}`,
  //   category: "investment",
  //   isUrgent: i % 2 === 0,
  // })),
];

const CITIES: FilterOption[] = [
  { value: "all", label: "همه شهرها" },
  { value: "اهواز", label: "اهواز" },
  { value: "خرم آباد", label: "خرم آباد" },
  { value: "قزوین", label: "قزوین" },
  { value: "مشهد", label: "مشهد" },
  { value: "ماهشهر", label: "ماهشهر" },
  { value: "بوشهر", label: "بوشهر" },
];

const CATEGORIES: FilterOption[] = [
  { value: "all", label: "همه دسته‌ها" },
  { value: "investment", label: "سرمایه‌گذاری" },
  { value: "consulting", label: "مشاوره" },
  { value: "sales", label: "فروش" },
];

// const ITEMS_PER_PAGE = 6;

export const JobGrid: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  // const [visibleJobs, setVisibleJobs] = useState(ITEMS_PER_PAGE);
  // const [isLoading, setIsLoading] = useState(false);

  const filteredJobs = MOCK_JOBS.filter((job) => {
    const cityMatch = selectedCity === "all" || job.location === selectedCity;
    const categoryMatch =
      selectedCategory === "all" || job.category === selectedCategory;
    const searchMatch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return cityMatch && categoryMatch && searchMatch;
  });
  // const handleLoadMore = () => {
  //   setIsLoading(true);
  //   // Simulate API call
  //   setTimeout(() => {
  //     setVisibleJobs((prevVisible: number) => prevVisible + ITEMS_PER_PAGE);
  //     setIsLoading(false);
  //   }, 1000);
  // };

  return (
    <>
      <JobFilters
        cities={CITIES}
        categories={CATEGORIES}
        onCityChange={setSelectedCity}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {/* {isLoading &&
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <JobCardSkeleton key={`skeleton-${index}`} />
          ))} */}
      </div>

      <div className="text-center py-10 lg:py-20">
        {filteredJobs.length === 0 && (
          <p className="text-gray-500">
            هیچ شغلی با فیلترهای انتخاب شده یافت نشد.
          </p>
        )}
      </div>

      {/* {filteredJobs.length > visibleJobs && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "در حال بارگذاری..." : "نمایش بیشتر"}
          </button>
        </div>
      )} */}

      <ResumeForm />
    </>
  );
};
