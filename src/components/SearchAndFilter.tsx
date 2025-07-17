import { Search, Filter, Plus, ArrowUpDown } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const SearchAndFilter = () => {
  return (
    <div className="flex items-center justify-between mb-6 gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Cari berdasarkan nama" 
            className="pl-10"
          />
        </div>
        
        <Select defaultValue="kredit-pemilikan">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter produk" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kredit-pemilikan">Kredit Pemilikan...</SelectItem>
            <SelectItem value="kredit-usaha">Kredit Usaha</SelectItem>
            <SelectItem value="refinancing">Refinancing</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm">
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort
        </Button>
      </div>

      <Button className="bg-primary hover:bg-primary/90">
        <Plus className="w-4 h-4 mr-2" />
        Tambah Product
      </Button>
    </div>
  );
};