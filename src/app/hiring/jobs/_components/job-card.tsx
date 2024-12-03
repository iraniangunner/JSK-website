import { Job } from "@/types/job";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-700">
            <Link
              href={`/hiring/jobs/${job.id}`}
              className="outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
            >
              {job.title}
            </Link>
          </h3>
          {job.isUrgent && (
            <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
              استخدام فوری
            </span>
          )}
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
          <span className="text-sm">{job.location}</span>
        </div>
      </div>
    </div>
  );
}
