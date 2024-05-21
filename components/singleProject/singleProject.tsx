export function SingleProject({ project }: any) {
  return (
    <div className="min-h-[100vh]">
      <h1 className="text-xl">{project.id}</h1>
      <p>{project.title}</p>
      <p>{project.overview}</p>
      <p>{project.release_date}</p>
    </div>
  );
}
