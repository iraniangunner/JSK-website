"use client";
import { useEffect, useState } from "react";
import { Project } from "./projectView";
import Skeleton from "../loadingSkeleton";

async function fetchData(type: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${type}`,
    {
      ...options,
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function ProjectsTable({ type }: { type: string }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData(type)
      .then((fetchedData) => {
        setData(fetchedData.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [type]);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((project: any) => (
        <Project projectDetails={project} key={project.id} />
      ))}
    </div>
  );
}
