"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JobGrid } from "./job-grid";
const queryClient = new QueryClient();

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
