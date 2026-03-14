import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useMemo, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { FilterUsers, GENDER } from "./components/filter-users";
import { SearchUser } from "./components/search-user";
import { UsersTable } from "./components/users-table";
import { useGetUsers } from "./services/users.service";

export const Users = () => {
  const PAGE_SIZE = 10;
  const [search, setSearch] = useState("");
  const [debouncedValue] = useDebounceValue(search, 500);
  const [filteredValue, setFilterValue] = useState(GENDER.ALL);
  const [page, setPage] = useState(1);
  const { usersData, isFetching } = useGetUsers({
    page,
    limit: PAGE_SIZE,
    term: debouncedValue,
    filter: filteredValue,
  });

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const filteredUsers = useMemo(() => {
    if (!usersData?.users) return [];
    if (!filteredValue || filteredValue === "all") return usersData.users;

    return usersData.users.filter((user) => user.gender === filteredValue);
  }, [filteredValue, usersData]);
  if (!usersData) return "no users yet";

  return (
    <Suspense fallback={<Skeleton />}>
      <div className="w-full">
        <div className="flex justify-between items-center gap-2">
          <SearchUser onSearch={setSearch} search={search} />

          <FilterUsers
            filterValue={filteredValue}
            onFilterChange={setFilterValue}
          />
        </div>
        <UsersTable
          onNextPage={handleNextPage}
          onPreviousPage={handlePrevPage}
          users={filteredUsers}
          isFetching={isFetching}
        />
      </div>
    </Suspense>
  );
};
