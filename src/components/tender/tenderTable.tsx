"use client";

import { useState } from "react";
import { TenderList } from "./tender-list";
import { TenderFilters } from "./tender-filters";

export default function TendersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <TenderFilters />
        <div className="lg:col-span-3 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-4">
            <h1 className="text-2xl font-semibold">لیست مناقصات</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">تعداد آیتم ها:</span>
              <select
                className="border rounded px-2 py-1"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
          <TenderList
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
