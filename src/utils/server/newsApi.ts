import "server-only";

export async function getNews() {
  const res = await fetch("https://jsk-co.com/api/news", {
    // next: { revalidate: 3600 },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}


export async function getNewsById(id: number) {
  const res = await fetch(`https://jsk-co.com/api/news/${id}`, {
    // next: { revalidate: 3600 },
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("No such news");
    }
    throw new Error("Failed to fetch the news data");
  }
  return res.json();
}
