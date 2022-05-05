export interface PaginationFactory<T> {
  items: T[];
  page: number;
  perPage: number;
  total: number;
}
