import React, { useState } from 'react';
import { Card, Button, Input, Select, Badge } from '../components/ui/shared';
import { Search, Plus, AlertTriangle, CheckCircle } from 'lucide-react';

export function MedicineDispensing() {
  const [selectedResep, setSelectedResep] = useState<number | null>(1);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pemberian Obat</h1>
        <p className="text-gray-500">Siapkan dan serahkan obat sesuai resep dokter.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prescription Queue */}
        <Card className="lg:col-span-1 p-0 overflow-hidden flex flex-col h-[600px]">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">Antrean Resep</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Cari no resep atau pasien..." 
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {[1, 2, 3, 4, 5].map(i => (
              <div 
                key={i} 
                onClick={() => setSelectedResep(i)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${selectedResep === i ? 'bg-primary-50 border-l-4 border-l-primary-700' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-gray-900">RSP-00{i}</span>
                  {i === 1 ? <Badge variant="warning">Pending</Badge> : <Badge variant="success">Selesai</Badge>}
                </div>
                <p className="text-sm font-medium text-gray-800">Pasien Dummy {i}</p>
                <p className="text-xs text-gray-500">Poli Umum • dr. Budi S.</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Prescription Detail */}
        <Card className="lg:col-span-2 p-6 h-[600px] flex flex-col">
          {selectedResep ? (
            <>
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Resep RSP-00{selectedResep}</h2>
                  <p className="text-sm text-gray-500 mt-1">Tanggal: 26 Jun 2026, 10:15 WIB</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">Pasien Dummy {selectedResep}</p>
                  <p className="text-sm text-gray-500">RM-2026-00{selectedResep} • 35 Thn</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">Nama Obat</th>
                      <th className="px-4 py-3">Aturan Pakai</th>
                      <th className="px-4 py-3 text-center">Permintaan</th>
                      <th className="px-4 py-3 text-center">Stok</th>
                      <th className="px-4 py-3 text-center rounded-tr-lg">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-4">
                        <p className="font-bold text-gray-900">Paracetamol 500mg</p>
                        <p className="text-xs text-gray-500">Tablet</p>
                      </td>
                      <td className="px-4 py-4 font-medium">3 x 1 sesudah makan</td>
                      <td className="px-4 py-4 text-center font-bold text-gray-900">10</td>
                      <td className="px-4 py-4 text-center text-success">150</td>
                      <td className="px-4 py-4 text-center">
                        <CheckCircle size={20} className="text-success mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">
                        <p className="font-bold text-gray-900">Amoxicillin 500mg</p>
                        <p className="text-xs text-gray-500">Kapsul</p>
                      </td>
                      <td className="px-4 py-4 font-medium">3 x 1 sesudah makan, habiskan</td>
                      <td className="px-4 py-4 text-center font-bold text-gray-900">15</td>
                      <td className="px-4 py-4 text-center text-danger flex items-center justify-center gap-1">
                        <AlertTriangle size={14} /> 5
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Badge variant="danger">Stok Kurang</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4 bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900">Total Item: 2 jenis obat</p>
                  <p className="text-xs text-danger mt-1">Terdapat 1 obat dengan stok tidak mencukupi.</p>
                </div>
                <div className="space-x-3">
                  <Button variant="outline">Tolak / Revisi Resep</Button>
                  <Button disabled>Selesaikan & Serahkan Obat</Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Pilih resep dari daftar antrean.
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export function MedicineInventory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Stok Obat</h1>
          <p className="text-gray-500">Kelola master data obat, stok, dan tanggal kadaluarsa.</p>
        </div>
        <Button className="flex items-center gap-2"><Plus size={18} /> Tambah Obat Baru</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-4 border-l-4 border-primary-700">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Jenis Obat</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">245</p>
        </Card>
        <Card className="p-4 border-l-4 border-danger">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Stok Menipis</h3>
          <p className="text-2xl font-bold text-danger mt-1">12</p>
        </Card>
        <Card className="p-4 border-l-4 border-warning">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Hampir Expired</h3>
          <p className="text-2xl font-bold text-warning mt-1">5</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari nama obat..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:border-primary-700 focus:ring-1 focus:ring-primary-700 outline-none"
            />
          </div>
          <Select className="w-48">
            <option>Semua Kategori</option>
            <option>Antibiotik</option>
            <option>Analgesik</option>
            <option>Vitamin</option>
          </Select>
          <Select className="w-48">
            <option>Semua Stok</option>
            <option>Aman</option>
            <option>Menipis</option>
            <option>Habis</option>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Kode</th>
                <th className="px-4 py-3">Nama Obat</th>
                <th className="px-4 py-3">Kategori</th>
                <th className="px-4 py-3">Satuan</th>
                <th className="px-4 py-3 text-right">Stok Aktif</th>
                <th className="px-4 py-3 text-right">Min. Stok</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { code: 'OB-001', name: 'Paracetamol 500mg', cat: 'Analgesik', unit: 'Tablet', stock: 1250, min: 200, status: 'Aman' },
                { code: 'OB-002', name: 'Amoxicillin 500mg', cat: 'Antibiotik', unit: 'Kapsul', stock: 50, min: 200, status: 'Menipis' },
                { code: 'OB-003', name: 'Omeprazole 20mg', cat: 'Pencernaan', unit: 'Kapsul', stock: 0, min: 100, status: 'Habis' },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 text-gray-500">{item.code}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                  <td className="px-4 py-3 text-gray-600">{item.cat}</td>
                  <td className="px-4 py-3 text-gray-600">{item.unit}</td>
                  <td className={`px-4 py-3 text-right font-bold ${item.stock === 0 ? 'text-danger' : item.stock < item.min ? 'text-warning' : 'text-gray-900'}`}>
                    {item.stock}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">{item.min}</td>
                  <td className="px-4 py-3">
                    {item.stock === 0 ? <Badge variant="danger">Habis</Badge> : 
                     item.stock < item.min ? <Badge variant="warning">Menipis</Badge> : 
                     <Badge variant="success">Aman</Badge>}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" className="text-primary-700 !px-2">Restock</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
