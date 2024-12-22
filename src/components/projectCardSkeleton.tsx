export default function ProjectCardSkeleton() {
  return (
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
  );
}
