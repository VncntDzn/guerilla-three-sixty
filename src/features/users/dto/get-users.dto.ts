export interface PaginatedResponse<T> {
  data: {
    skip: number;
    limit: number;
    offset: number;
    users: T;
  };
}
