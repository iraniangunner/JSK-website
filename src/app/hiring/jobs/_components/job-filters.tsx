import { FilterOption } from "@/types/job";

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      <input
        type="text"
        placeholder="جستجوی عنوان شغل"
        onChange={(e) => onSearchChange(e.target.value)}
        className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
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
