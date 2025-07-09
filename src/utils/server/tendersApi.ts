import "server-only";

export async function getTenders() {
  const res = await fetch("https://jsk-co.com/api/tenders", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the Tenders");
  }

  return res.json();
}

export async function getTenderCategory() {
  const res = await fetch("https://jsk-co.com/api/tender-categories", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the Tenders");
  }

  return res.json();
}

export async function getTenderById(id: number) {
  const res = await fetch(`https://jsk-co.com/api/tenders/${id}`, {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("No such tender"); // Triggers the `not-found.js` file if it exists
    }
    throw new Error("Failed to fetch the tender data");
  }
  return res.json();
}
