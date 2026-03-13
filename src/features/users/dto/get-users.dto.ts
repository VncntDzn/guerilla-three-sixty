export interface PaginatedResponse<T> {
  data: {
    skip: number;
    limit: number;
    offset: number;
    users: T;
  };
}

export type GetUsersResponse = {
  limit: number;
  term?: string;
  page: number;
};

export type GetUserResponse = Omit<GetUsersResponse, "page"> & {
  skip?: number;
};
