export interface Tender {
  data: {
    id: number;
    title: string;
    tender_category_id: number;
    number: string;
    start_date: string;
    end_date: string;
    department: string;
    phone: string;
    email: string;
    doc_opening_date: string;
    doc_submission_deadline: string;
    doc_submission_location: string;
    status: string;
    text: string;
    file: string;
    created_at: string;
    updated_at: string;
    full_path: string;
    tender_category: {
      id: number;
      title: string;
      order: number;
      created_at: string;
      updated_at: string;
    };
  };
}

export interface TenderFilters {
  title: string;
  tender_category_id: string;
  status: string;
}

export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  meta: {
    last_page: number;
  };
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
