"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ProjectTab({
  type,
  text,
}: {
  type: number;
  text: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChangeReleaseType = (newReleaseType: number) => {
    router.push(`/projects?type=${newReleaseType}&page=1`);
  };

  return (
    <button
      onClick={() => handleChangeReleaseType(type)}
      type="button"
      className={`filter_btn hover:text-white ${
        searchParams.get("type") === String(type) ||
        (searchParams.get("type") === null && text === "همه")
          ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
          : ""
      }`}
    >
      {text}
    </button>
  );
}
