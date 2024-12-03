export interface Job {
  id: string;
  title: string;
  location: string;
  category: string;
  isUrgent: boolean;
}

export interface FilterOption {
  value: string;
  label: string;
}
