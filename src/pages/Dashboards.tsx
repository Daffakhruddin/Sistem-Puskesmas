import React from 'react';
import { Card, Button, Badge } from '../components/ui/shared';
import { Users, UserPlus, Clock, CheckCircle, AlertTriangle, Pill, Activity, FileText, ShieldCheck, History } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

function StatCard({ title, value, icon: Icon, trend, colorClass = "border-primary-700" }: { title: string, value: string, icon: any, trend?: string, colorClass?: string }) {
  return (
    <Card className={`p-6 border-l-4 ${colorClass}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="p-2 bg-primary-50 text-primary-700 rounded-lg">
          <Icon size={20} />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
        {trend && <span className="text-xs font-medium text-success bg-success-50 px-2 py-1 rounded-full">{trend}</span>}
      </div>
    </Card>
  );
}

// ----------------------------------------------------
// Dashboard Loket
// ----------------------------------------------------
export function DashboardLoket() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Loket</h1>
          <p className="text-gray-500">Ringkasan pendaftaran dan antrean hari ini.</p>
        </div>
        <Button>+ Daftar Pasien Baru</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Pasien Hari Ini" value="142" icon={Users} trend="+12%" colorClass="border-primary-700" />
        <StatCard title="Pasien Baru" value="24" icon={UserPlus} colorClass="border-secondary" />
        <StatCard title="Antrean Berjalan" value="18" icon={Clock} colorClass="border-warning" />
        <StatCard title="Kunjungan Selesai" value="124" icon={CheckCircle} colorClass="border-danger" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Antrean Saat Ini</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">No. Antrean</th>
                  <th className="px-4 py-3">Nama Pasien</th>
                  <th className="px-4 py-3">Layanan</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 rounded-tr-lg">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3].map(i => (
                  <tr key={i} className="hover:bg-primary-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-primary-700">A-00{i}</td>
                    <td className="px-4 py-3 text-gray-600">Siti Rahayu</td>
                    <td className="px-4 py-3 text-gray-600">Pemeriksaan Umum</td>
                    <td className="px-4 py-3"><Badge variant="warning">Menunggu</Badge></td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" className="text-primary-700">Panggil</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Aksi Cepat</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start py-3">Pencarian Pasien</Button>
            <Button variant="outline" className="w-full justify-start py-3">Cetak Nomor Antrean</Button>
            <Button variant="outline" className="w-full justify-start py-3">Daftar Kunjungan Lama</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Dashboard Perawat
// ----------------------------------------------------
export function DashboardPerawat() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Perawat</h1>
        <p className="text-gray-500">Ringkasan pemeriksaan awal pasien.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Menunggu Assessment" value="12" icon={Users} colorClass="border-primary-700" />
        <StatCard title="Assessment Selesai" value="86" icon={CheckCircle} colorClass="border-secondary" />
        <StatCard title="Health Checkup" value="15" icon={Activity} colorClass="border-warning" />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Antrean Pemeriksaan Awal</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">No. Antrean</th>
                <th className="px-4 py-3">Nama Pasien</th>
                <th className="px-4 py-3">No. RM</th>
                <th className="px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4].map(i => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-primary-700">A-01{i}</td>
                  <td className="px-4 py-3 text-gray-600">Budi Santoso</td>
                  <td className="px-4 py-3 text-gray-500">RM-2026-00{i}</td>
                  <td className="px-4 py-3">
                    <Button variant="primary">Input Tanda Vital</Button>
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

// ----------------------------------------------------
// Dashboard Dokter
// ----------------------------------------------------
export function DashboardDokter() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Dokter</h1>
          <p className="text-gray-500">Ringkasan antrean pemeriksaan medis.</p>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">Panggil Antrean Berikutnya</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Menunggu Pemeriksaan" value="8" icon={Users} colorClass="border-primary-700" />
        <StatCard title="Konsultasi Selesai" value="42" icon={CheckCircle} colorClass="border-secondary" />
        <StatCard title="Resep Dikeluarkan" value="38" icon={Pill} colorClass="border-warning" />
        <StatCard title="Rujukan" value="3" icon={FileText} colorClass="border-danger" />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Antrean Pasien (Tanda Vital Selesai)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">No. Antrean</th>
                <th className="px-4 py-3">Nama Pasien</th>
                <th className="px-4 py-3">Keluhan Utama</th>
                <th className="px-4 py-3">Tensi</th>
                <th className="px-4 py-3">Suhu</th>
                <th className="px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3].map(i => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-primary-700">A-01{i}</td>
                  <td className="px-4 py-3 text-gray-600">Dewi Kartika</td>
                  <td className="px-4 py-3 text-gray-600">Demam 3 hari</td>
                  <td className="px-4 py-3 text-danger">140/90</td>
                  <td className="px-4 py-3 text-danger">38.5°C</td>
                  <td className="px-4 py-3">
                    <Button variant="primary">Mulai Periksa</Button>
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

// ----------------------------------------------------
// Dashboard Apoteker
// ----------------------------------------------------
export function DashboardApoteker() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Apotek</h1>
        <p className="text-gray-500">Ringkasan resep dan ketersediaan stok obat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Resep Pending" value="12" icon={Clock} colorClass="border-primary-700" />
        <StatCard title="Resep Selesai" value="86" icon={CheckCircle} colorClass="border-secondary" />
        <StatCard title="Stok Menipis" value="5" icon={AlertTriangle} trend="Perlu restock" colorClass="border-warning" />
        <StatCard title="Obat Expired" value="0" icon={AlertTriangle} colorClass="border-danger" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Antrean Resep</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3">No. Resep</th>
                  <th className="px-4 py-3">Nama Pasien</th>
                  <th className="px-4 py-3">Dokter</th>
                  <th className="px-4 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3].map(i => (
                  <tr key={i} className="hover:bg-primary-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-primary-700">RSP-00{i}</td>
                    <td className="px-4 py-3 text-gray-600">Ahmad Fauzi</td>
                    <td className="px-4 py-3 text-gray-500">dr. Budi Santoso</td>
                    <td className="px-4 py-3">
                      <Button variant="primary" className="py-1 px-3">Siapkan</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold text-danger mb-4 flex items-center gap-2">
            <AlertTriangle size={20} /> Peringatan Stok
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Paracetamol 500mg', stock: 120, min: 500 },
              { name: 'Amoxicillin 500mg', stock: 50, min: 200 },
              { name: 'Omeprazole 20mg', stock: 30, min: 100 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-danger-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-600">Min. Stok: {item.min}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-danger">{item.stock} item</p>
                  <Button variant="outline" className="text-xs py-1 px-2 mt-1 bg-white">Restock</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Dashboard Kepala Puskesmas
// ----------------------------------------------------
const dataKunjungan = [
  { name: 'Sen', pasien: 120 }, { name: 'Sel', pasien: 140 },
  { name: 'Rab', pasien: 150 }, { name: 'Kam', pasien: 130 },
  { name: 'Jum', pasien: 160 }, { name: 'Sab', pasien: 100 },
];

export function DashboardKepala() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Kepala Puskesmas</h1>
        <p className="text-gray-500">Analitik dan laporan operasional puskesmas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Kunjungan Bulan Ini" value="3,420" icon={Users} trend="+5%" colorClass="border-primary-700" />
        <StatCard title="Penyakit Terbanyak" value="ISPA" icon={Activity} colorClass="border-secondary" />
        <StatCard title="Pendapatan Layanan" value="Rp 12.5M" icon={FileText} colorClass="border-warning" />
        <StatCard title="Kepuasan Pasien" value="4.8/5" icon={CheckCircle} colorClass="border-success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Tren Kunjungan 7 Hari Terakhir</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataKunjungan}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f3f4f6'}} />
                <Bar dataKey="pasien" fill="#1976D2" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Top 5 Diagnosis Bulan Ini</h3>
          <div className="space-y-4">
            {[
              { name: 'ISPA', count: 450, percent: 35 },
              { name: 'Hipertensi', count: 320, percent: 25 },
              { name: 'Diabetes Mellitus', count: 210, percent: 15 },
              { name: 'Diare', count: 180, percent: 12 },
              { name: 'Gastritis', count: 120, percent: 8 },
            ].map((d, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">{d.name}</span>
                  <span className="text-gray-500">{d.count} Kasus</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${d.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Dashboard Admin
// ----------------------------------------------------
export function DashboardAdmin() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Administrator</h1>
        <p className="text-gray-500">Konfigurasi sistem, manajemen user, dan log aktivitas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Pengguna" value="45" icon={Users} colorClass="border-primary-700" />
        <StatCard title="Role Aktif" value="6" icon={ShieldCheck} colorClass="border-secondary" />
        <StatCard title="Log Aktivitas (Hari Ini)" value="1,204" icon={History} colorClass="border-warning" />
        <StatCard title="Status Server" value="Online" icon={Activity} trend="99.9% Uptime" colorClass="border-success" />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Aktivitas Sistem Terbaru</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Waktu</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Modul</th>
                <th className="px-4 py-3">Aktivitas</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map(i => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 text-gray-500">10:{i}4 AM</td>
                  <td className="px-4 py-3 font-medium text-gray-900">dr. Budi Santoso</td>
                  <td className="px-4 py-3 text-gray-600">Medical Record</td>
                  <td className="px-4 py-3 text-gray-600">Menyimpan diagnosis pasien RM-2026-00{i}</td>
                  <td className="px-4 py-3"><Badge variant="success">Berhasil</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
