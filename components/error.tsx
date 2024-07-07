import { CgDanger } from "react-icons/cg";

export function CustomError() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="mb-4 text-7xl flex justify-center items-center font-extrabold tracking-tight text-blue-600 lg:text-9xl">
            <CgDanger color="red" />
          </div>
          <p className="mb-4 text-lg font-light text-gray-500">
            مشکلی پیش آمده دوباره تلاش کنید
          </p>
        </div>
      </div>
    </section>
  );
}
