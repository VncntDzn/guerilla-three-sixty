import { IUser } from "@/core/domain/users.types";
import { httpClient } from "@/core/httpClient";
import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse } from "../dto/get-users.dto";

export const useGetUsers = () => {
  const res = useQuery<PaginatedResponse<IUser[]>>({
    queryKey: ["users"],
    queryFn: () => {
      return httpClient.get("/users?limit=10&skip=1");
    },
  });

  return {
    ...res,
    usersData: res.data?.data,
  };
};
