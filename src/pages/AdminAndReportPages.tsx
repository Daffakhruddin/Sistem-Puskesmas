import React from 'react';
import { Card, Button, Input, Select, Badge } from '../components/ui/shared';
import { Search, UserPlus, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function UserManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Pengguna</h1>
          <p className="text-gray-500">Kelola akun, role, dan hak akses pengguna sistem.</p>
        </div>
        <Button className="flex items-center gap-2"><UserPlus size={18} /> Tambah User</Button>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <Input placeholder="Cari nama atau username..." className="max-w-md" />
          <Select className="w-48">
            <option>Semua Role</option>
            <option>Dokter</option>
            <option>Perawat</option>
            <option>Petugas Loket</option>
            <option>Apoteker</option>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Nama Lengkap</th>
                <th className="px-4 py-3">Username</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Terakhir Login</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'dr. Budi Santoso', user: 'budi.s', role: 'Dokter', status: 'Aktif', login: '26 Jun 2026, 08:00' },
                { name: 'Siti Rahayu', user: 'siti.r', role: 'Petugas Loket', status: 'Aktif', login: '26 Jun 2026, 07:30' },
                { name: 'Dewi Kartika', user: 'dewi.k', role: 'Perawat', status: 'Aktif', login: '26 Jun 2026, 07:45' },
                { name: 'Ahmad Fauzi', user: 'ahmad.f', role: 'Apoteker', status: 'Tidak Aktif', login: '20 Jun 2026, 16:00' },
              ].map((u, i) => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900">{u.name}</td>
                  <td className="px-4 py-3 text-gray-600">{u.user}</td>
                  <td className="px-4 py-3 text-gray-600">{u.role}</td>
                  <td className="px-4 py-3">
                    {u.status === 'Aktif' ? <Badge variant="success">Aktif</Badge> : <Badge variant="gray">Tidak Aktif</Badge>}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{u.login}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" className="text-gray-500 !px-2">Edit</Button>
                    <Button variant="ghost" className="text-danger !px-2">Reset Pass</Button>
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

export function AuditLog() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Audit Log</h1>
        <p className="text-gray-500">Catatan aktivitas sistem dan perubahan data (Security Trail).</p>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <Input type="date" className="w-48" />
          <Select className="w-48">
            <option>Semua Modul</option>
            <option>Medical Record</option>
            <option>Resep & Obat</option>
            <option>User Management</option>
          </Select>
          <Input placeholder="Cari aktivitas..." className="flex-1" />
          <Button>Cari</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Waktu</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Aksi</th>
                <th className="px-4 py-3">Modul</th>
                <th className="px-4 py-3">Deskripsi / Perubahan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { time: '10:15:22', user: 'dr. Budi Santoso', action: 'CREATE', module: 'Prescription', desc: 'Membuat resep baru RSP-001 untuk RM-2026-001' },
                { time: '10:12:05', user: 'dr. Budi Santoso', action: 'UPDATE', module: 'Medical Record', desc: 'Menambahkan diagnosis ICD-10 J06.9 (ISPA)' },
                { time: '09:45:10', user: 'Dewi Kartika', action: 'CREATE', module: 'Vital Sign', desc: 'Input tanda vital untuk RM-2026-001' },
                { time: '09:30:00', user: 'Siti Rahayu', action: 'CREATE', module: 'Registration', desc: 'Mendaftarkan kunjungan baru RM-2026-001' },
                { time: '08:00:15', user: 'Admin System', action: 'UPDATE', module: 'User Management', desc: 'Reset password untuk ahmad.f' },
              ].map((log, i) => (
                <tr key={i} className="hover:bg-primary-50 transition-colors">
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{log.time}</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{log.user}</td>
                  <td className="px-4 py-3">
                    <Badge variant={log.action === 'UPDATE' ? 'warning' : log.action === 'DELETE' ? 'danger' : 'primary'}>
                      {log.action}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{log.module}</td>
                  <td className="px-4 py-3 text-gray-600">{log.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

const COLORS = ['#1976D2', '#26A69A', '#FB8C00', '#E53935'];
const dataDiagnosis = [
  { name: 'ISPA', value: 400 },
  { name: 'Hipertensi', value: 300 },
  { name: 'Diabetes', value: 200 },
  { name: 'Lainnya', value: 150 },
];

const dataKunjungan = [
  { name: 'Jan', PoliUmum: 400, PoliGigi: 240, KIA: 150 },
  { name: 'Feb', PoliUmum: 300, PoliGigi: 139, KIA: 200 },
  { name: 'Mar', PoliUmum: 200, PoliGigi: 980, KIA: 220 },
  { name: 'Apr', PoliUmum: 278, PoliGigi: 390, KIA: 200 },
];

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Laporan & Analitik</h1>
          <p className="text-gray-500">Pusat laporan pelayanan, kunjungan, dan operasional.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2"><Download size={18} /> Export Excel</Button>
          <Button className="flex items-center gap-2"><Download size={18} /> Export PDF</Button>
        </div>
      </div>

      <div className="flex gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-200">
        <Select label="Jenis Laporan">
          <option>Laporan Kunjungan Pasien</option>
          <option>Laporan 10 Penyakit Terbanyak</option>
          <option>Laporan Penggunaan Obat</option>
        </Select>
        <Input type="date" label="Dari Tanggal" />
        <Input type="date" label="Sampai Tanggal" />
        <div className="flex items-end pb-[2px]">
          <Button className="h-[42px]">Tampilkan</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Tren Kunjungan per Poli</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataKunjungan}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f3f4f6'}} />
                <Bar dataKey="PoliUmum" stackId="a" fill="#1976D2" />
                <Bar dataKey="PoliGigi" stackId="a" fill="#26A69A" />
                <Bar dataKey="KIA" stackId="a" fill="#FB8C00" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Proporsi Diagnosis Utama</h3>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataDiagnosis}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataDiagnosis.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {dataDiagnosis.map((entry, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                  {entry.name}
                </span>
                <span className="font-medium">{entry.value} kasus</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
