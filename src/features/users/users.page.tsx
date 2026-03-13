import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { useGetUsers } from "./services/use-users.service";
import { UsersTable } from "./components/users-table";

export const Users = () => {
  const { usersData } = useGetUsers();

  if (!usersData?.users) return "no users yet";

  return (
    <Suspense fallback={<Skeleton />}>
      <UsersTable users={usersData.users} />
    </Suspense>
  );
};
