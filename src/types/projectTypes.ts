export interface Project {
  id: number;
  title: string;
  title_en: string;
  text: string;
  text_en: string;
  employer: string;
  employer_en: string;
  start_date: string;
  location: string;
  location_en: string;
  images: { full_path: string }[];
  categories: { id: number; title: string; title_en: string }[];
}
export interface ProjectsData {
  data: Project[];
}

export interface ProjectCategory {
  id: number;
  order: number;
  title: string;
  title_en: string;
}
