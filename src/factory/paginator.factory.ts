export interface PaginatorFactory<T> {
  filter?: T;
  page: number;
  perPage: number;
}
