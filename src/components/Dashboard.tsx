import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";
import { ProductCategories } from "./ProductCategories";
import { SearchAndFilter } from "./SearchAndFilter";
import { ProductCard } from "./ProductCard";
import { Card } from "./ui/card";
import { BarChart3, Building, CreditCard, Package, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const sampleProducts = [
  {
      id: 1,
      bank: "Mandiri",
      logo: "/mandiri-logo.png",
      productName: "Bunga Special Tengah Imlek 2023",
      rating: 4,
      reviews: 14,
      users: 220,
      fixRate: "3.88",
      maxTenor: "12",
      loanToValue: "1",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan, Pengusaha",
      komisi: "1",
    },
    {
      id: 2,
      bank: "Panin",
      logo: "/panin-logo.png",
      productName: "Panin KPR & KPR XTRA",
      rating: 3,
      reviews: 9,
      users: 220,
      fixRate: "9.90",
      maxTenor: "10",
      loanToValue: "85%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan",
      komisi: "1",
    },
    {
      id: 3,
      bank: "MNC",
      logo: "/mnc-logo.png",
      productName: "MNC KPR Secondary",
      rating: 4,
      reviews: 14,
      users: 155,
      fixRate: "3.88",
      maxTenor: "12",
      loanToValue: "1",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan, Pengusaha",
      komisi: "1",
    },
    {
      id: 2,
      bank: "Commonwealth",
      logo: "/commontwealth-logo.png",
      productName: "Commonwealth KPR Primary",
      rating: 4,
      reviews: 12,
      users: 180,
      fixRate: "9.90",
      maxTenor: "10",
      loanToValue: "85%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan",
      komisi: "1",
    },
    {
      id: 3,
      bank: "Commonwealth",
      logo: "/commontwealth-logo.png",
      productName: "Commonwealth KPR Secondary",
      rating: 4,
      reviews: 10,
      users: 165,
      fixRate: "9.90",
      maxTenor: "10",
      loanToValue: "85%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan",
      komisi: "1",
    },
    {
      id: 4,
      bank: "UOB",
      logo: "/uob-logo.png",
      productName: "UOB KPR Primary",
      rating: 3,
      reviews: 8,
      users: 145,
      fixRate: "8.88",
      maxTenor: "15",
      loanToValue: "80%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan",
      komisi: "1",
    },
    {
      id: 5,
      bank: "UOB",
      logo: "/uob-logo.png",
      productName: "UOB KPR Secondary",
      rating: 3,
      reviews: 7,
      users: 135,
      fixRate: "8.88",
      maxTenor: "15",
      loanToValue: "80%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan",
      komisi: "1",
    },
    {
      id: 6,
      bank: "OCBC NISP",
      logo: "/ocbc-logo.png",
      productName: "OCBC NISP KPR Kendali",
      rating: 4,
      reviews: 11,
      users: 170,
      fixRate: "8.75",
      maxTenor: "20",
      loanToValue: "75%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan",
      komisi: "1",
    },
    {
      id: 7,
      bank: "CIMB Niaga",
      logo: "/cimbniaga-logo.png",
      productName: "CIMB Niaga KPR Primary",
      rating: 4,
      reviews: 12,
      users: 273,
      fixRate: "8.75",
      maxTenor: "20",
      loanToValue: "75%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan",
      komisi: "1",
    },
    {
      id: 8,
      bank: "CIMB Niaga",
      logo: "/cimbniaga-logo.png",
      productName: "CIMB Niaga KPR Secondary",
      rating: 4,
      reviews: 8,
      users: 254,
      fixRate: "8.75",
      maxTenor: "20",
      loanToValue: "75%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan dan Professional",
      komisi: "1",
    },
    {
      id: 9,
      bank: "CIMB Niaga",
      logo: "/cimbniaga-logo.png",
      productName: "CIMB Niaga KPR Extra",
      rating: 4,
      reviews: 6,
      users: 245,
      fixRate: "8.75",
      maxTenor: "20",
      loanToValue: "75%",
      jaminan: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan dan Professional",
      komisi: "1",
    }
];

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavigation />
        <main className="flex-1 p-6">
          <ProductCategories />
          <SearchAndFilter />
          <div className="space-y-4">
              {sampleProducts.map((product) => (
              <Card key={product.id} className="p-6">
                <div className="flex items-center justify-between"> {/* Mengubah items-start menjadi items-center */}
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <div className="flex justify-center items-center h-16 mb-4">
                        <img
                          src={product.logo}
                          alt={`${product.bank} logo`}
                          width={120}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">Rating :</div>
                          <div className="flex justify-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={`star-${product.id}-${star}`} // Menggunakan kombinasi product.id dan star sebagai key yang unik
                                className={`text-xl ${star <= product.rating ? "text-blue-500" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">{product.reviews} Reviews</div>
                        </div>
                        <div className="mx-4 h-16 w-px bg-gray-200"></div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">User :</div>
                          <div className="text-lg font-semibold text-gray-900">{product.users}</div>
                          <div className="text-sm text-gray-600">Users yearly</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-4">
                        {product.bank} <span className="text-[#37b5e7]">{product.productName}</span>
                      </h3>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Fix Rate (Year): {product.fixRate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Jaminan: {product.jaminan}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Max Tenor: {product.maxTenor}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Target: {product.target}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Loan to Value: {product.loanToValue}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Komisi: {product.komisi}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="text-[#37b5e7] bg-transparent hover:bg-[#37b5e7]/10 self-center shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Detail
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};