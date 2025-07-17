import { Home, RefreshCw, Briefcase, PiggyBank, Building } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

const categories = [
  { icon: Home, label: "KPR dan Multiguna", active: false },
  { icon: RefreshCw, label: "Refinancing", active: false },
  { icon: Briefcase, label: "Kredit Modal Usaha dan Investasi", active: true },
  { icon: PiggyBank, label: "Deposito", active: false },
  { icon: Building, label: "Take Over dan Bridging Loan", active: false },
];

export const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories.find(cat => cat.active)?.label || "");

  return (
    <div className="grid grid-cols-5 gap-4 mb-8">
      {categories.map((category, index) => (
        <Card
          key={category.label}
          className={`cursor-pointer transition-colors ${selectedCategory === category.label ? "ring-2 ring-blue-500" : "hover:shadow-md"}`}
          onClick={() => setSelectedCategory(category.label)}
        >
          <CardContent className="p-4 text-center">
            <category.icon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-xs text-gray-600">{category.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};