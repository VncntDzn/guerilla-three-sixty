import { IUser } from "@/core/domain/users.types";
import { httpClient } from "@/core/httpClient";
import { useQuery } from "@tanstack/react-query";
import {
  GetUserResponse,
  GetUsersResponse,
  PaginatedResponse,
} from "../dto/get-users.dto";
import { GENDER } from "../components/filter-users";

const fetchUsers = ({ limit, skip, term, filter }: GetUserResponse) => {
  if (term?.trim()) {
    return httpClient.get(
      `/users/search?q=${term}&limit=${limit}&skip=${skip}`
    );
  }
  if (filter !== GENDER.ALL) {
    return httpClient.get(
      `/users/filter?key=gender&value=${filter}&limit=${limit}&skip=${skip}`
    );
  }

  return httpClient.get(`/users?limit=${limit}&skip=${skip}`);
};
export const useGetUsers = ({
  page,
  limit,
  term = "",
  filter = GENDER.ALL,
}: GetUsersResponse) => {
  const skip = (page - 1) * limit;

  const res = useQuery<PaginatedResponse<IUser[]>>({
    queryKey: ["users", page, limit, term, filter],
    queryFn: () => fetchUsers({ limit, skip, term, filter }),
    placeholderData: (previousData) => previousData,
  });

  return {
    ...res,
    usersData: res.data?.data,
  };
};
