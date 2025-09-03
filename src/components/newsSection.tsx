import { CustomError } from "./customError";
import dynamic from "next/dynamic";
import { getNews } from "@/utils/server/newsApi";

const NewsSectionUI = dynamic(
  () => import("./newsSectionUI").then((mod) => mod.NewsSectionUI),
  {
    loading: () => <p>Loading...</p>,
  }
);

export async function NewsSection() {
  try {
    const newsData = await getNews();
    return <NewsSectionUI news={newsData} />;
  } catch (error) {
    return <CustomError />;
  }
}