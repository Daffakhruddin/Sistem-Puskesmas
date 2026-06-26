import React from 'react';
import { Card, Button, Input, Select, Badge } from '../components/ui/shared';
import { Search, UserPlus, FileText, Printer } from 'lucide-react';

export function PatientManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Pasien</h1>
          <p className="text-gray-500">Cari, tambah, dan edit data rekam medis pasien.</p>
        </div>
        <Button className="flex items-center gap-2">
          <UserPlus size={18} /> Tambah Pasien Baru
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari berdasarkan NIK, No. RM, atau Nama Pasien..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-primary-700 focus:ring-1 focus:ring-primary-700 outline-none transition-all"
            />
          </div>
          <Button variant="outline">Filter Data</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">No. RM</th>
                <th className="px-4 py-3">NIK</th>
                <th className="px-4 py-3">Nama Lengkap</th>
                <th className="px-4 py-3">Jenis Kelamin</th>
                <th className="px-4 py-3">Tanggal Lahir</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { rm: 'RM-001', nik: '3271012345670001', name: 'Siti Rahayu', gender: 'Perempuan', dob: '12 Mei 1998' },
                { rm: 'RM-002', nik: '3271012345670002', name: 'Budi Santoso', gender: 'Laki-laki', dob: '05 Jan 1985' },
                { rm: 'RM-003', nik: '3271012345670003', name: 'Dewi Kartika', gender: 'Perempuan', dob: '22 Okt 1990' },
              ].map((p, i) => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-primary-700">{p.rm}</td>
                  <td className="px-4 py-3 text-gray-600">{p.nik}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-4 py-3 text-gray-600">{p.gender}</td>
                  <td className="px-4 py-3 text-gray-600">{p.dob}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" className="text-primary-700 !px-2">Detail</Button>
                    <Button variant="ghost" className="text-gray-500 !px-2">Edit</Button>
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

export function PatientRegistration() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pendaftaran Kunjungan</h1>
        <p className="text-gray-500">Daftarkan kunjungan pasien ke layanan poli puskesmas.</p>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">1. Pilih Pasien</h3>
        <div className="flex gap-4 mb-6">
          <Input placeholder="Masukkan NIK atau Nama..." className="flex-1" />
          <Button>Cari Data</Button>
        </div>

        {/* Selected Patient Preview */}
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm text-primary-700 font-medium mb-1">Pasien Terpilih:</p>
            <h4 className="text-lg font-bold text-gray-900">Siti Rahayu <span className="text-sm font-normal text-gray-500 ml-2">(RM-001)</span></h4>
            <p className="text-sm text-gray-600 mt-1">Perempuan, 28 Tahun | NIK: 3271012345670001</p>
          </div>
          <Button variant="outline" className="text-xs py-1 px-3 bg-white">Ganti Pasien</Button>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">2. Pilih Layanan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Select label="Poli Tujuan">
            <option>Poli Umum</option>
            <option>Poli Gigi</option>
            <option>Poli KIA</option>
            <option>UGD</option>
          </Select>
          <Select label="Jenis Kunjungan">
            <option>Sakit Baru</option>
            <option>Sakit Lama (Kontrol)</option>
            <option>Pemeriksaan Kesehatan (KIR)</option>
          </Select>
          <Select label="Metode Pembayaran">
            <option>BPJS Kesehatan</option>
            <option>Umum (Bayar Mandiri)</option>
            <option>Asuransi Lainnya</option>
          </Select>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <Button variant="outline">Batal</Button>
          <Button className="flex items-center gap-2">
            <Printer size={18} /> Simpan & Cetak Antrean
          </Button>
        </div>
      </Card>
    </div>
  );
}

export function QueueManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Antrean</h1>
        <p className="text-gray-500">Monitor dan atur antrean layanan pasien.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-primary-700">
          <h3 className="text-sm font-medium text-gray-500">Poli Umum (A)</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">A-012</p>
          <p className="text-sm text-gray-500 mt-1">Menunggu: 5 pasien</p>
        </Card>
        <Card className="p-6 border-l-4 border-secondary">
          <h3 className="text-sm font-medium text-gray-500">Poli Gigi (B)</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">B-004</p>
          <p className="text-sm text-gray-500 mt-1">Menunggu: 2 pasien</p>
        </Card>
        <Card className="p-6 border-l-4 border-warning">
          <h3 className="text-sm font-medium text-gray-500">Poli KIA (C)</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">C-008</p>
          <p className="text-sm text-gray-500 mt-1">Menunggu: 0 pasien</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Daftar Antrean Berjalan</h3>
          <Select className="w-48">
            <option>Semua Poli</option>
            <option>Poli Umum</option>
            <option>Poli Gigi</option>
          </Select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Nomor</th>
                <th className="px-4 py-3">Waktu Daftar</th>
                <th className="px-4 py-3">Nama Pasien</th>
                <th className="px-4 py-3">Poli Tujuan</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map(i => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 font-bold text-primary-700">A-01{i}</td>
                  <td className="px-4 py-3 text-gray-500">08:1{i} AM</td>
                  <td className="px-4 py-3 text-gray-900">Pasien Dummy {i}</td>
                  <td className="px-4 py-3 text-gray-600">Poli Umum</td>
                  <td className="px-4 py-3">
                    {i === 1 ? <Badge variant="success">Sedang Dilayani</Badge> : <Badge variant="warning">Menunggu</Badge>}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Button variant="ghost" className="text-gray-500 !px-2">Lewati</Button>
                    <Button variant="primary" className="!px-3 !py-1">Panggil</Button>
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
