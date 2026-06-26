import React from 'react';
import { Card, Button, Input, Select } from '../components/ui/shared';
import { Activity, FileText } from 'lucide-react';

export function InitialAssessment() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pemeriksaan Awal (Tanda Vital)</h1>
        <p className="text-gray-500">Catat tanda vital dan keluhan utama pasien sebelum pemeriksaan dokter.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Patient Info Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <Card className="p-6 bg-primary-50 border-primary-100">
            <h3 className="text-sm font-bold text-primary-800 uppercase tracking-wider mb-4 border-b border-primary-200 pb-2">Informasi Pasien</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-primary-600">Nama</p>
                <p className="font-bold text-gray-900">Budi Santoso</p>
              </div>
              <div>
                <p className="text-xs text-primary-600">No. Rekam Medis</p>
                <p className="font-medium text-gray-900">RM-2026-002</p>
              </div>
              <div>
                <p className="text-xs text-primary-600">Umur / JK</p>
                <p className="font-medium text-gray-900">41 Tahun / Laki-laki</p>
              </div>
              <div>
                <p className="text-xs text-danger">Alergi</p>
                <p className="font-medium text-danger">Penisilin, Udang</p>
              </div>
            </div>
          </Card>
          
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FileText size={18} /> Lihat Riwayat Medis
          </Button>
        </div>

        {/* Assessment Form */}
        <Card className="md:col-span-2 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Activity size={20} className="text-primary-700" /> Form Tanda Vital
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input label="Tekanan Darah (mmHg)" placeholder="Contoh: 120/80" />
            <Input label="Suhu Tubuh (°C)" type="number" step="0.1" placeholder="Contoh: 36.5" />
            <Input label="Berat Badan (kg)" type="number" step="0.1" placeholder="Contoh: 65.5" />
            <Input label="Tinggi Badan (cm)" type="number" placeholder="Contoh: 170" />
          </div>

          <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Body Mass Index (BMI)</p>
              <p className="text-2xl font-bold text-gray-900">22.7 <span className="text-sm font-normal text-success">(Normal)</span></p>
            </div>
            <div className="text-right text-xs text-gray-400">
              *Dihitung otomatis
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">Keluhan Utama</label>
              <textarea 
                className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700 transition-colors"
                rows={3}
                placeholder="Deskripsikan keluhan utama pasien..."
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <Button variant="outline">Kosongkan</Button>
            <Button>Simpan & Lanjut ke Dokter</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function HealthCheckup() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Health Checkup Dasar (KIR)</h1>
        <p className="text-gray-500">Pencatatan hasil pemeriksaan kesehatan untuk surat keterangan sehat.</p>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-8 bg-gray-50 p-4 rounded-xl">
          <div className="flex-1">
            <p className="text-xs text-gray-500">Pasien</p>
            <p className="font-bold text-gray-900">Ahmad Fauzi (RM-005)</p>
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Tujuan Pembuatan</p>
            <p className="font-medium text-gray-900">Melamar Pekerjaan</p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Hasil Pemeriksaan Laboratorium Sederhana</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Input label="Gula Darah Sewaktu (mg/dL)" type="number" placeholder="Contoh: 110" />
          <Input label="Kolesterol Total (mg/dL)" type="number" placeholder="Contoh: 180" />
          <Input label="Asam Urat (mg/dL)" type="number" step="0.1" placeholder="Contoh: 5.5" />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Pemeriksaan Fisik</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Select label="Tes Buta Warna">
            <option>Normal (Tidak Buta Warna)</option>
            <option>Buta Warna Parsial</option>
            <option>Buta Warna Total</option>
          </Select>
          <Select label="Status Pendengaran">
            <option>Normal</option>
            <option>Terganggu Telinga Kanan</option>
            <option>Terganggu Telinga Kiri</option>
            <option>Tuli</option>
          </Select>
        </div>

        <div className="mb-8">
          <Select label="Kesimpulan / Status Kesehatan">
            <option>Sehat / Layak</option>
            <option>Sehat dengan Catatan</option>
            <option>Tidak Layak</option>
          </Select>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <Button variant="outline">Batal</Button>
          <Button>Simpan Hasil</Button>
        </div>
      </Card>
    </div>
  );
}
