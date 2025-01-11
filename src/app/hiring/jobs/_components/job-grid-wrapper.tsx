"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JobGrid } from "./job-grid";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

export default function JobGridWrapper(props: {
  categories: any;
  cities: any;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <JobGrid {...props} />
    </QueryClientProvider>
  );
}
