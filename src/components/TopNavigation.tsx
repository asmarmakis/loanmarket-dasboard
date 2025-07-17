import { Bell, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const TopNavigation = () => {
  
  return (
    <div className="bg-card border-b border-border">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-semibold text-foreground">Product</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-destructive"></Badge>
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">YOHANNES AFFANDY</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="px-6">
        <div className="flex justify-center space-x-8 mb-6">
            <button
              className={`pb-2 text-sm font-medium  "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
          
              style={{ lineHeight: "100%", letterSpacing: "0%" }}
            >
              Bank
            </button>
            <button
              className={`pb-2 text-sm font-medium  "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
             
              style={{ lineHeight: "100%", letterSpacing: "0%" }}
            >
              Developer
            </button>
          </div>
      </div>
    </div>
  );
};