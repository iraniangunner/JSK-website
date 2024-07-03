import "server-only"

export async function getServicesBySlug(slug: string) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
      },
    };
  
    const project = await fetch(
      `https://api.themoviedb.org/3/movie/${
        slug === "commerce"
          ? 2
          : slug === "operation"
          ? 3
          : slug === "management"
          ? 6
          : 5
      }`,
      options
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));
  
    return project;
  }