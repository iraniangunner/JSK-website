export interface News {
    id: number;
    title: string;
    title_en: string;
    content: string;
    content_en: string;
    image_url: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }
  
  export interface NewsSearchParams {
    page?: number;
    per_page?: number;
  }
  