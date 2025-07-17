import { useParams, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { TopNavigation } from "../components/TopNavigation";
import { Card } from "../components/ui/card";
import { ArrowLeft, Pencil, Trash } from "lucide-react";
import { Button } from "../components/ui/button";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample product data
  const product = {
    bank: "Mandiri",
    productName: "Bunga Special Tengah Imlek 2023",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    komisi: "1%",
    appraisal: "1%",
    floating: "1%",
    loanToValue: "1%",
    penaltyFee: "-",
    interestRate: "3.65%",
    fixRate: "3.89%",
    fixRateYear: "3",
    maxTenor: "12",
    keterangan: "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik dalam kondisi baru maupun bekas.",
    url: "null"
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavigation />
        <main className="flex-1 p-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center justify-center bg-[#37b5e7] text-white rounded-[5px] p-2 w-10 h-10"
                >
                  <ArrowLeft className="w-6 h-6" />
                 
                </button>
                 <span>Bank Product Detail</span>
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => navigate(`/product/edit/${id}`)} // Tambahkan ini
                  className="flex items-center justify-center gap-2 bg-[#005274] hover:bg-[#005274]/90 text-white w-[250px] h-[50px] rounded-[5px] border border-[#C1C1C1]"
                >
                  <Pencil className="w-5 h-5" />
                  <span>Edit Product</span>
                </Button>
                <button className="w-[250px] h-[50px] bg-[#ff0000] text-white rounded-[5px] border border-[#C1C1C1] flex items-center justify-center gap-2 hover:bg-[#ff0000]/90">
                  <Trash className="w-4 h-4" />
                  Delete Product
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Bank</span>
                <input
                  type="text"
                  value={product.bank}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Nama Product</span>
                <input
                  type="text"
                  value={product.productName}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Jaminan</span>
                <input
                  type="text"
                  value={product.jaminan}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Target Market</span>
                <input
                  type="text"
                  value={product.target}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Komisi</span>
                <input
                  type="text"
                  value={product.komisi}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Appraisal</span>
                <input
                  type="text"
                  value={product.appraisal}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Floating</span>
                <input
                  type="text"
                  value={product.floating}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Loan to Value</span>
                <input
                  type="text"
                  value={product.loanToValue}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Penalty Fee</span>
                <input
                  type="text"
                  value={product.penaltyFee}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Interest Rate</span>
                <input
                  type="text"
                  value={product.interestRate}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Fix Rate %</span>
                <input
                  type="text"
                  value={product.fixRate}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Fix Rate (year)</span>
                <input
                  type="text"
                  value={product.fixRateYear}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Max Tenor (year)</span>
                <input
                  type="text"
                  value={product.maxTenor}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">Keterangan</span>
                <textarea
                  value={product.keterangan}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-[120px,1fr] items-center">
                <span className="text-gray-600">URL</span>
                <input
                  type="text"
                  value={product.url}
                  readOnly
                  className="p-2 bg-gray-100 rounded w-full"
                />
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};