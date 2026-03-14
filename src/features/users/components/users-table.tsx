import { Badge } from "@/components/ui/badge";
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
    <Table className="my-3 overflow-hidden rounded-xl border border-border bg-background">
      <TableHeader className="bg-muted/50">
        <TableRow className="hover:bg-transparent">
          <TableHead className="h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            First Name
          </TableHead>
          <TableHead className="h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Last Name
          </TableHead>
          <TableHead className="h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Role
          </TableHead>
        </TableRow>
      </TableHeader>
      {users.length > 0 ? (
        <>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                onClick={() => onSelectUser(user)}
                className="cursor-pointer border-b border-border/60 odd:bg-muted/20 transition-colors hover:bg-muted/60"
              >
                <TableCell className="px-4 py-3 font-medium text-foreground">
                  {user.firstName}
                </TableCell>
                <TableCell className="px-4 py-3 text-foreground/90">
                  {user.lastName}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium capitalize text-muted-foreground">
                    {user.role}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="border-t bg-background hover:bg-background">
              <TableCell colSpan={3} className="px-4 py-4">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    disabled={isFetching}
                    onClick={onPreviousPage}
                    className="min-w-24 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
                  >
                    Previous
                  </Button>
                  <Button
                    disabled={isFetching}
                    onClick={onNextPage}
                    className="min-w-24 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
                  >
                    Next
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </>
      ) : (
        <TableBody>
          <TableRow className="cursor-pointer border-b border-border/60 odd:bg-muted/20 transition-colors hover:bg-muted/60">
            <TableCell
              colSpan={3}
              className="px-4 py-3 font-medium text-center text-foreground"
            >
              No users found.
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
};
