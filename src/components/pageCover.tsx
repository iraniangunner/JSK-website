import Link from "next/link";
export function PageCover({
  bgImage,
  title,
}: {
  bgImage: string;
  title: string;
}) {
  // bg-projects-pattern
  return (
    <div
      className={`relative bg-${bgImage} pt-[80px] lg:pt-[260px] 
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-0 before:z-[-1]`}
    >
      <nav
        aria-label="breadcrumb"
        className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px] relative hidden md:block"
      >
        <ol className="flex flex-wrap items-center absolute bottom-[20px] rounded-md bg-opacity-60 px-[1rem]">
          <li className="flex items-center text-lg antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
            <Link href="/" className="opacity-60">
              خانه
            </Link>
            <span className="mx-2 text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
              /
            </span>
          </li>
          <li className="flex items-center text-lg antialiased font-normal leading-normal text-blue-gray-900">
            <span>{title}</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-[35px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {title}
      </h1>
    </div>
  );
}
