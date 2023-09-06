export interface Brand {
    id: number;
    brand: string;
    description: string;
    status: boolean;
  }
  
export interface Meta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
}

export interface ApiResponse {
  data: Brand[];
  meta?: Meta;
}