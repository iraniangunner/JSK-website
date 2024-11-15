export default function Skeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-center py-4 md:py-8 gap-6 flex-wrap">
          {[...Array(6)].map((category, index) => (
            <button
              key={index}
              className="relative animate-pulse h-10 w-20 bg-gray-300"
            ></button>
          ))}
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((project, index) => {
          return (
            <li key={index} className="relative animate-pulse">
              <div className="aspect-square h-[300] w-full overflow-hidden rounded-lg bg-gray-300"></div>
              <p className="mt-2 h-4 w-1/2 rounded-lg bg-gray-600"></p>
              <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
              <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
