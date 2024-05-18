


export function Project({ projectDetails }) {
  return (
    <div>
      <h2>{projectDetails.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500"+projectDetails.backdrop_path}
        // width={500}
        // height={300}
        alt=""
      />
    </div>
  );
}
