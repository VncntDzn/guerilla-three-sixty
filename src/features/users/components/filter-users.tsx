import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export enum GENDER {
  ALL = "all",
  MALE = "male",
  FEMALE = "female",
}

interface Props {
  onFilterChange: (gender: GENDER) => void;
  filterValue: GENDER;
}
export const FilterUsers = ({ filterValue, onFilterChange }: Props) => {
  return (
    <Select
      value={filterValue}
      defaultValue={GENDER.ALL}
      onValueChange={(gender) => onFilterChange(gender as GENDER)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Filter by Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={GENDER.ALL}>{GENDER.ALL}</SelectItem>
          <SelectItem value={GENDER.MALE}>{GENDER.MALE}</SelectItem>
          <SelectItem value={GENDER.FEMALE}>{GENDER.FEMALE}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
