import "server-only";
// import {unstable_noStore as noStore } from "next/cache";

export async function getAllProjects(page: number , type:number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
    },
  };

  // noStore();

  const allProjects = await fetch(
    `https://api.themoviedb.org/3/discoverrr/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${type}`,
    {...options , cache:"no-store"}
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return allProjects;
}



