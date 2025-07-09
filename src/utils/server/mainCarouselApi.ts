import "server-only";

export async function getCarouselData() {
  const res = await fetch("https://jsk-co.com/api/sliders", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
