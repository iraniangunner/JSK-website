export interface Project {
  id: number;
  title: string;
  text: string;
  employer: string;
  start_date: string;
  location: string;
  images: { full_path: string }[];
  categories: { id: number; title: string }[];
}
export interface ProjectsData {
  data: Project[];
}

export interface ProjectCategory {
  order: string;
  title: string;
}
