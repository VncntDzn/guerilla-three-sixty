import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IUser } from "@/core/domain/users.types";

interface Props {
  user: IUser | null;
  isOpen: boolean;
  setDetailsOpen: (val: boolean) => void;
}
export const UserDialog = ({ user, isOpen, setDetailsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={(val) => setDetailsOpen(val)}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Selected User</DialogTitle>
        </DialogHeader>

        {!user ? (
          <div className="px-6 py-10 text-center text-sm text-muted-foreground">
            No user selected.
          </div>
        ) : (
          <div className="max-h-[75vh] overflow-y-auto px-6 py-6">
            <div className="grid gap-6">
              <section className="rounded-lg border bg-background p-5 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold tracking-wide text-foreground">
                    Personal Information
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Basic identity and contact details.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={user.firstName}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={user.lastName}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={user.email}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={user.phone}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={user.username}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      value={user.gender}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-lg border bg-background p-5 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold tracking-wide text-foreground">
                    Company Information
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Employment and organization details.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={user.company.name}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="companyTitle">Job Title</Label>
                    <Input
                      id="companyTitle"
                      value={user.company.title}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="companyDepartment">Department</Label>
                    <Input
                      id="companyDepartment"
                      value={user.company.department}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-lg border bg-background p-5 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold tracking-wide text-foreground">
                    Address Information
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Residential location details.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="streetAddress">Street Address</Label>
                    <Input
                      id="streetAddress"
                      value={user.address.address}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={user.address.city}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={user.address.state}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={user.address.postalCode}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={user.address.country}
                      readOnly
                      className="bg-muted/30"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
