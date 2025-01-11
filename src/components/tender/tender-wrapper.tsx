"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TendersTable from "./tenderTable";

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

export default function TenderListWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <TendersTable />
    </QueryClientProvider>
  );
}
