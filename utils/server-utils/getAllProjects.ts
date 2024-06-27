// import "server-only";
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
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${type}`,
    {...options , cache:"no-store"}
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return allProjects;
}




// const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [totalPages, setTotalPages] = useState<number>(1);

  // const page = parseInt(searchParams.get("page") || "1", 10);
  // const type = parseInt(searchParams.get("type") || "1", 10);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchData(type, page)
  //     .then((fetchedData) => {
  //       setData(fetchedData.results);
  //       setTotalPages(fetchedData.total_pages);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, [type, page]);
