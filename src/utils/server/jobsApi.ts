import "server-only";
export async function getCities() {
  const response = await fetch("https://jsk-co.com/api/cities", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    // cache: "no-store",
  });

  const cities = await response.json();
  return cities;
}

export async function getJobCategory() {
  const response = await fetch("https://jsk-co.com/api/job-categories", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    // cache: "no-store",
  });

  const categories = await response.json();
  return categories;
}
