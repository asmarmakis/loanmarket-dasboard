import { Home, Users, CreditCard, Building2, FileText, BarChart3, Users2, TrendingUp, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const sidebarItems = [
    { icon: "/icon/dasboard.png", label: "Dashboard", active: false },
    { icon: "/icon/contact.png", label: "Contact", active: false },
    { icon: "/icon/loan.png", label: "Loan", active: false },
    { icon: "/icon/product.png", label: "Product", active: true },
    { icon: "/icon/bank.png", label: "Bank", active: false },
    { icon: "/icon/credit.png", label: "Credit Scoring", active: false },
    { icon: "/icon/faqs.png", label: "FAQ's", active: false },
    { icon: "/icon/pipeline.png", label: "Pipeline", active: false },
    { icon: "/icon/pipeline.png", label: "Pipeline Developer", active: false },
];

export const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-50">
    <div className="w-64 bg-white shadow-sm">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <img src="/logo-web.png" alt="Logo" width={120} height={40} />
        </div>
      </div>

      <nav className="mt-4">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <div
              className={`flex items-center px-4 py-3 text-sm ${item.active ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500" : "text-gray-600 hover:bg-gray-50"}`}
            >
              <img src={item.icon} alt={item.label} width={16} height={16} className="mr-3" />
              {item.label}
              {item.label === "Product" && (
                <ChevronDown className="w-4 h-4 ml-auto" />
              )}
            </div>
            {item.label === "Product" && item.active && (
              <div className="bg-gray-50 py-2">
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <div className="ml-6">Bank Product</div>
                </div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <div className="ml-6">Product</div>
                </div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <div className="ml-6">Category Product</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
    </div>
  );
};