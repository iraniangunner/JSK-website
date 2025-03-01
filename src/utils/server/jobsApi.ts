import "server-only";

export async function getJobs() {
  const res = await fetch("https://jsk-co.com/api/job-opportunities", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    // cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch job opportunities");
  }

  return res.json();
}
export async function getJobCities() {
  const res = await fetch("https://jsk-co.com/api/cities", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    // cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the job city");
  }

  return res.json();
}

export async function getJobCategory() {
  const res = await fetch("https://jsk-co.com/api/job-categories", {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    // cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the job category");
  }

  return res.json();
}

export async function getJobById(id: number) {
  const res = await fetch(`https://jsk-co.com/api/job-opportunities/${id}`, {
    next: { revalidate: 3600 },
    headers: {
      Authorization:
        "Bearer 3|aEbpCRb3dEf0gV3YyrmjFpmGdkEyYGxJue9ResHtb33d8a02",
    },
    // cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("No such job");
    }
    throw new Error("Failed to fetch the job data");
  }

  return res.json();
}
