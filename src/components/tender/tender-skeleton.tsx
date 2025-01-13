import { FC } from "react";

const TenderSkeleton: FC = () => (
  <div className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden">
    <div className="p-6">
      <div className="grid gap-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="h-7 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const TenderSkeletons: FC = () => (
  <div className="space-y-6">
    {[...Array(3)].map((_, index) => (
      <TenderSkeleton key={index} />
    ))}
  </div>
);
