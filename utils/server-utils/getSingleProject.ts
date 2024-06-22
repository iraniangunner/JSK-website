import "server-only";

export async function getProjectById(project_id: string) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDcwNWJkNGQzNWU0MGUyZmUyZGFhZDhjNGVmOGQ0YyIsInN1YiI6IjY2NDg2ZDZmNzNiN2FlNDAzODdhM2M2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n49ziu8wMl4nILzUvN3r222fH9-x4oofAlLVtvMkduc",
      },
    };
  
    // const project = await fetch(
    //   `https://api.themoviedb.org/3/movie/${project_id}`,
    //   {...options,next:{revalidate:60}}
    // )
  
    const project = await fetch(
      `https://api.themoviedb.org/3/movie/${project_id}`,
      options
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));
  
    return project;
  }
  