import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser } from "@/core/domain/users.types";

interface Props {
  users: IUser[];
  onNextPage: () => void;
  onPreviousPage: () => void;
  isFetching: boolean;
  onSelectUser: (user: IUser) => void;
}
export const UsersTable = ({
  users,
  onNextPage,
  onPreviousPage,
  isFetching,
  onSelectUser,
}: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} onClick={() => onSelectUser(user)}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            <div className="flex items-center justify-end gap-2">
              <Button
                disabled={isFetching}
                onClick={onPreviousPage}
                className="disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:border-border"
              >
                Previous
              </Button>
              <Button
                disabled={isFetching}
                onClick={onNextPage}
                className="disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:border-border"
              >
                Next
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
