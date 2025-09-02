export default function NewsCardSkeleton() {
  return (
    <div className="rounded-2xl shadow-md bg-white flex flex-col animate-pulse">
      {/* تصویر */}
      <div className="rounded-t-2xl w-full h-52 bg-gray-300" />

      <div className="p-4 flex flex-col flex-1">
        {/* عنوان */}
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-3" />

        {/* متن کوتاه */}
        <div className="space-y-2 flex-1">
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-11/12 bg-gray-300 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 rounded" />
        </div>

        {/* footer */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-4 w-20 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
}
