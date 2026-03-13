import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useState } from "react";
import { SearchUser } from "./components/search-user";
import { UsersTable } from "./components/users-table";
import { useGetUsers } from "./services/users.service";

export const Users = () => {
  const PAGE_SIZE = 10;
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { usersData, isFetching } = useGetUsers({
    page,
    limit: PAGE_SIZE,
    term: search,
  });

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  if (!usersData) return "no users yet";

  return (
    <Suspense fallback={<Skeleton />}>
      <div className="w-full">
        <SearchUser onSearch={setSearch} />
        <UsersTable
          onNextPage={handleNextPage}
          onPreviousPage={handlePrevPage}
          users={usersData.users}
          isFetching={isFetching}
        />
      </div>
    </Suspense>
  );
};
