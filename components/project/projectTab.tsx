"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProjectTab({
  type,
  text,
}: {
  type: string;
  text: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleClick = () => {
    router.push(`/projects?type=${type}`);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`filter_btn hover:text-white ${
        searchParams.get("type") === type ||
        (searchParams.get("type") === null && text === "همه")
          ? "filter_active hover:before:bg-[#ffa500] hover:before:w-0 hover:before:h-0"
          : ""
      }`}
    >
      {text}
    </button>
  );
}
