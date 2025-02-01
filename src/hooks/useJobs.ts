import { useQuery } from "@tanstack/react-query";
import { JobSearchParams, JobResponse } from "../types/job";

const fetchJobs = async (params: JobSearchParams): Promise<JobResponse[]> => {
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
    `https://jsk-co.com/api/job-opportunities?${queryParams.toString()}`,
    {
      next: { revalidate: 3600 },
      headers: {
        Authorization:
          "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
};

export const useJobs = (params: JobSearchParams) => {
  return useQuery({
    queryKey: ["jobs", params],
    queryFn: () => fetchJobs(params),
    enabled: !params?.title || (params.title?.length ?? 0) >= 2,
  });
};
