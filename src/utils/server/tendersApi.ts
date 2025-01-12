import "server-only";

export async function getTenderById(id: number) {
  const res = await fetch(`https://jsk-co.com/api/tenders/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("No such project"); // Triggers the `not-found.js` file if it exists
    }
    throw new Error("Failed to fetch the project data");
  }

  return res.json();
}
