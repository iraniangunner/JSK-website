export interface Job {
  id: string;
  title: string;
  location: string;
  category: string;
}


export interface JobSearchParams {
  job_category_id?: number;
  city_id?: number;
  title?: string;
}

export interface JobResponse {
  id: number;
  title: string;
  job_category: {
    title: string;
  };
  city: {
    title: string;
  };
}

export interface FilterOption {
  value: string;
  label: string;
}
