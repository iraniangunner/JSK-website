import Link from "next/link";

export function TenderView({ tender }: { tender: any }) {
  return (
    <div
      key={tender.id}
      className="bg-white border border-gray-200 shadow rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <h3 className="text-lg font-semibold">{tender.title}</h3>
            <Link
              href={`/tenders/${tender.id}`}
              className="bg-blue-600 hover:bg-blue-600 cursor-pointer text-white py-2 px-4 rounded inline-flex items-center transition duration-300"
            >
              مشاهده جزئیات
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">دسته بندی:</span>
              <div className="flex items-center gap-2">
                <span>{tender.tender_category.title}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">شماره:</span>
              <span>{tender.number}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">تاریخ شروع:</span>
              <span>{tender.start_date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">تاریخ پایان:</span>
              <span className="font-medium">{tender.end_date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">وضعیت:</span>
              <span className="font-medium">{tender.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
