import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { TopNavigation } from "../components/TopNavigation";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Save } from "lucide-react";

export default function EditProduct() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi logika update produk di sini
    navigate(-1);
  };

  return (
    <div className="flex h-screen bg-[#F8F9FC]">
      <Sidebar />
      <div className="flex-1">
        <TopNavigation />
        <main className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center bg-[#37b5e7] text-white rounded-[5px] p-2 w-10 h-10"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-medium">Edit Product</h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <Label htmlFor="bank">Bank</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Mandiri" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mandiri">Mandiri</SelectItem>
                    <SelectItem value="bca">BCA</SelectItem>
                    <SelectItem value="bni">BNI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Loan to Value</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <span className="text-sm">%</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div>
                <Label>Jenis Product</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Kredit Pemilikan Rumah Secondary (KPR Secondary)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kpr">Kredit Pemilikan Rumah Secondary (KPR Secondary)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Penalty Fee</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <span className="text-sm">%</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div>
                <Label>Promotion Product</Label>
                <div className="flex gap-4 mt-2">
                  <Input type="date" className="w-40" />
                  <span className="self-center">s/d</span>
                  <Input type="date" className="w-40" />
                </div>
              </div>

              <div>
                <Label>Interest Rate</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <span className="text-sm">%</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div>
                <Label>Jaminan</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="ruko" />
                    <Label htmlFor="ruko">Ruko</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="rumah" />
                    <Label htmlFor="rumah">Rumah</Label>
                  </div>
                   <div className="flex items-center gap-2">
                    <Checkbox id="Kendaraan Pribadi" />
                    <Label htmlFor="Kendaraan Pribadi">Kendaraan Pribadi</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="Slip Gaji" />
                    <Label htmlFor="Slip Gaji">Slip Gaji</Label>
                  </div>
                   <div className="flex items-center gap-2">
                    <Checkbox id="ruko" />
                    <Label htmlFor="ruko">Ruko</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="apartemen" />
                    <Label htmlFor="apartemen">Apartemen</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="sertifikat" />
                    <Label htmlFor="sertifikat">Sertifikat Perusahaan</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label>Fix Rate</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input type="number" className="w-24" />
                  <span>%</span>
                  <Button variant="outline" size="icon" className="w-8 h-8 text-[#37b5e7]">+</Button>
                </div>
              </div>

              <div>
                <Label>Target Market</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="karyawan" />
                    <Label htmlFor="karyawan">Karyawan</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="Milenial" />
                    <Label htmlFor="Milenial">Milenial</Label>
                  </div>
                    <div className="flex items-center gap-2">
                    <Checkbox id="pengusaha" />
                    <Label htmlFor="pemgusaha">Pengusaha</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="profesional" />
                    <Label htmlFor="profesional">Profesional</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="asn" />
                    <Label htmlFor="asn">ASN</Label>
                  </div>
                   <div className="flex items-center gap-2">
                    <Checkbox id="tni" />
                    <Label htmlFor="tni">TNI</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="polri" />
                    <Label htmlFor="polri">POLRI</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="lainnya" />
                    <Label htmlFor="lainnya">Lainnya</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label>Fix Rate (Year)</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div>
                <Label>Komisi</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <span className="text-sm">%</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div>
                <Label>Max Tenor (Year)</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div>
                <Label>Appraisal</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <span className="text-sm">%</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="col-span-2">
                <Label>Keterangan</Label>
                <Input 
                  className="mt-1 w-[686px] h-[150px] top-[972px] left-[1104px] rounded-[5px] border border-[#C1C1C1] p-2" 
                  placeholder="Syarat KPR pegawai tetap (sertifikat ready), NPWP, gaji minimal 3x angsuran"
                  style={{ resize: 'none' }}
                 /*  component="textarea" */
                />
              </div>

              <div>
                <Label>Floating</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input 
                    type="number" 
                    className="w-[686px] h-[50px] top-[306px] left-[1104px] rounded-[3px] border border-[#C1C1C1] px-2" 
                  />
                  <span className="text-sm">%</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 text-[#37b5e7] border border-[#C1C1C1] rounded-[3px]"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div>
                <Label>URL</Label>
                <Input className="mt-1" />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button
                type="submit"
                className="bg-[#005274] hover:bg-[#005274]/90 text-white px-8 flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                UPDATE
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}