export function JobCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md animate-pulse">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="mt-2 flex items-center text-gray-600">
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-300 rounded ml-2 animate-pulse"></div>
        </div>
        <div className="flex justify-center items-center w-[80%] xl:w-[40%] px-2 py-2 mt-8 bg-gray-300 animate-pulse rounded">
          &nbsp;
        </div>
      </div>
    </div>
  );
}
