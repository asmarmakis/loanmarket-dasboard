import { Star, Clock, Users, Building2, Target, CreditCard } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const ProductCard = ({ product }) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex gap-6">
          <div>
            <img src={product.logo} alt={product.bank} className="h-8 mb-4" />
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Rating</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">{product.reviews} Reviews</div>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">User</div>
                <div className="font-semibold">{product.users}</div>
                <div className="text-sm text-gray-500">Users yearly</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">
              {product.bank} <span className="text-blue-500">{product.productName}</span>
            </h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Fix Rate (Year): {product.fixRate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span>Jaminan: {product.jaminan}</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span>Max Tenor: {product.maxTenor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-400" />
                <span>Target: {product.target}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span>Loan to Value: {product.loanToValue}</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span>Komisi: {product.komisi}</span>
              </div>
            </div>
          </div>
        </div>
        <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
          Detail
        </Button>
      </div>
    </Card>
  );
};