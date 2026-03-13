import { Input } from "@/components/ui/input";

interface Props {
  onSearch: (e: string) => void;
}
export const SearchUser = ({ onSearch }: Props) => {
  return (
    <div>
      <Input
        placeholder="Search here..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
