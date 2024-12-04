import { FilterOption } from "@/types/job";
import { CgSearch } from "react-icons/cg";

interface JobFiltersProps {
  cities: FilterOption[];
  categories: FilterOption[];
  onCityChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export function JobFilters({
  cities,
  categories,
  onCityChange,
  onCategoryChange,
  onSearchChange,
}: JobFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="relative md:col-span-2">
        <input
          type="text"
          placeholder="جستجوی عنوان شغل"
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full bg-white border border-gray-300 rounded-md py-2 pr-10 pl-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <CgSearch className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <select
        onChange={(e) => onCityChange(e.target.value)}
        className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        {cities.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}
