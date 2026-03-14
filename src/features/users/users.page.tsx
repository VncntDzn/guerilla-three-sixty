import { Skeleton } from "@/components/ui/skeleton";
import { IUser } from "@/core/domain/users.types";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { FilterUsers, GENDER } from "./components/filter-users";
import { SearchUser } from "./components/search-user";
import { UserDialog } from "./components/user-dialog";
import { UsersTable } from "./components/users-table";
import { useGetUsers } from "./services/users.service";

export const Users = () => {
  const PAGE_SIZE = 10;
  const [search, setSearch] = useState("");
  const [debouncedValue] = useDebounceValue(search, 500);
  const [filteredValue, setFilterValue] = useState(GENDER.ALL);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [isDetailsOpen, setDetailsOpen] = useState(false);

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

  const handleSelectUser = (user: IUser) => {
    setSelectedUser(user);
    setDetailsOpen(true);
  };

  const filteredUsers = useMemo(() => {
    if (!usersData?.users) return [];
    if (!filteredValue || filteredValue === GENDER.ALL) return usersData.users;

    return usersData.users.filter((user) => user.gender === filteredValue);
  }, [filteredValue, usersData]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
  }, [search]);

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
          onSelectUser={handleSelectUser}
        />
        <UserDialog
          isOpen={isDetailsOpen}
          setDetailsOpen={(val) => setDetailsOpen(val)}
          user={selectedUser}
        />
      </div>
    </Suspense>
  );
};
