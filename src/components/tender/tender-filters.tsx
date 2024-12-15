"use client";

export function TenderFilters() {
  return (
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
              id="region-search"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="عنوان را وارد کنید..."
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="competition"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            دسته بندی فراخوان
          </label>
          <select
            id="competition"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {/* <option value="">دسته بندی را انتخاب کنید</option> */}
            <option value="open">مناقصه</option>
            <option value="limited">مزایده</option>
            <option value="direct">استعلام</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            وضعیت فراخوان
          </label>
          <select
            id="status"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">فعال</option>
            <option value="active">غیر فعال</option>
            <option value="closed">لغو</option>
            <option value="expose">تمدید</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            پاک کردن
          </button>
          <button className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
}
