import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IUser } from "@/core/domain/users.types";

interface Props {
  user: IUser | null;
  isOpen: boolean;
  setDetailsOpen: (val: boolean) => void;
}
export const UserDialog = ({ user, isOpen, setDetailsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={(val) => setDetailsOpen(val)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User</DialogTitle>

          <p>{user?.firstName}</p>
          <p>{user?.lastName}</p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
