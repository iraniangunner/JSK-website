export interface JobSearchParams {
  job_category_id?: number;
  city_id?: number;
  title?: string;
  title_en?: string;
}

export interface JobResponse {
  id: number;
  title: string;
  title_en: string;
  job_category: {
    title: string;
    title_en: string;
  };
  city: {
    title: string;
    title_en: string;
  };
  text: string;
  text_en: string;
}

export interface FilterOption {
  value: string;
  label: string;
}
