import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface Props {
  onSearch: (e: string) => void;
  search: string;
}
export const SearchUser = ({ search, onSearch }: Props) => {
  const handleClear = () => {
    onSearch("");
  };
  return (
    <div className="relative">
      <Input
        value={search}
        placeholder="Search here..."
        onChange={(e) => onSearch(e.target.value)}
      />
      {search && (
        <Button
          className="absolute right-1 top-1 text-gray-500"
          variant="ghost"
          onClick={handleClear}
        >
          <X size={20} />
        </Button>
      )}
    </div>
  );
};
