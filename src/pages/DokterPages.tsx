import React, { useState } from 'react';
import { Card, Button, Input, Select, Badge } from '../components/ui/shared';
import { FileText, AlertCircle, Plus, Trash2 } from 'lucide-react';

export function DoctorExamination() {
  const [activeTab, setActiveTab] = useState<'diagnosis' | 'treatment' | 'prescription' | 'referral'>('diagnosis');

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pemeriksaan Dokter</h1>
          <p className="text-gray-500">Pencatatan diagnosis, tindakan, dan resep pasien.</p>
        </div>
        <Button variant="outline" className="text-primary-700 border-primary-700">Akhiri Kunjungan</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Patient Summary */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-5">
            <div className="text-center mb-4 border-b pb-4">
              <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xl font-bold mb-2">
                DK
              </div>
              <h3 className="font-bold text-gray-900">Dewi Kartika</h3>
              <p className="text-xs text-gray-500">RM-2026-003</p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Umur</span>
                <span className="font-medium text-gray-900">35 Tahun</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tensi</span>
                <span className="font-medium text-danger">140/90</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Suhu</span>
                <span className="font-medium text-danger">38.5 °C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">BB/TB</span>
                <span className="font-medium text-gray-900">60kg / 160cm</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-warning-50 rounded-lg text-sm">
              <div className="font-bold text-warning-700 flex items-center gap-1 mb-1">
                <AlertCircle size={14} /> Keluhan Utama
              </div>
              <p className="text-warning-900">Demam 3 hari, pusing, dan mual.</p>
            </div>
          </Card>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FileText size={18} /> Rekam Medis Lalu
          </Button>
        </div>

        {/* Right Column - Examination Workflow */}
        <div className="lg:col-span-3">
          <Card className="overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button 
                onClick={() => setActiveTab('diagnosis')}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${activeTab === 'diagnosis' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Diagnosis (S, O, A, P)
              </button>
              <button 
                onClick={() => setActiveTab('treatment')}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${activeTab === 'treatment' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Tindakan Medis
              </button>
              <button 
                onClick={() => setActiveTab('prescription')}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${activeTab === 'prescription' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Resep Obat
              </button>
              <button 
                onClick={() => setActiveTab('referral')}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${activeTab === 'referral' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Rujukan
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'diagnosis' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Subjective (S)</label>
                      <textarea className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700" rows={3} placeholder="Keluhan yang dirasakan pasien..." defaultValue="Demam 3 hari, pusing, mual"></textarea>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Objective (O)</label>
                      <textarea className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700" rows={3} placeholder="Hasil pemeriksaan fisik..." defaultValue="TD 140/90, Suhu 38.5, compos mentis"></textarea>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Assessment (A) / Diagnosis</label>
                      <div className="flex gap-2">
                        <Input placeholder="Kode ICD-10" className="w-1/3" />
                        <Input placeholder="Nama Diagnosis" className="w-2/3" />
                      </div>
                      <textarea className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700 mt-2" rows={2} placeholder="Catatan assessment..."></textarea>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Plan (P)</label>
                      <textarea className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700" rows={3} placeholder="Rencana penatalaksanaan..."></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button>Simpan Diagnosis</Button>
                  </div>
                </div>
              )}

              {activeTab === 'treatment' && (
                <div className="space-y-6">
                  <div className="flex gap-4 items-end">
                    <Select label="Pilih Tindakan Medis" className="flex-1">
                      <option>Pilih tindakan...</option>
                      <option>Perawatan Luka Ringan</option>
                      <option>Injeksi</option>
                      <option>Nebulizer</option>
                      <option>Ekstraksi Kuku</option>
                    </Select>
                    <Button className="flex items-center gap-2"><Plus size={18}/> Tambah</Button>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 text-center text-gray-500 text-sm">
                    Belum ada tindakan yang ditambahkan.
                  </div>
                </div>
              )}

              {activeTab === 'prescription' && (
                <div className="space-y-6">
                  <div className="flex gap-4 items-end bg-primary-50 p-4 rounded-xl border border-primary-100">
                    <div className="flex-1">
                      <Input label="Cari Obat" placeholder="Ketik nama obat..." />
                    </div>
                    <div className="w-24">
                      <Input label="Jumlah" type="number" defaultValue="10" />
                    </div>
                    <div className="flex-1">
                      <Input label="Aturan Pakai" placeholder="Contoh: 3 x 1 sesudah makan" />
                    </div>
                    <Button className="flex items-center gap-2"><Plus size={18}/> Tambah</Button>
                  </div>

                  <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-gray-100 text-gray-600 font-medium">
                      <tr>
                        <th className="px-4 py-3">Nama Obat</th>
                        <th className="px-4 py-3">Aturan Pakai</th>
                        <th className="px-4 py-3 text-center">Jumlah</th>
                        <th className="px-4 py-3 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Paracetamol 500mg</td>
                        <td className="px-4 py-3">3 x 1 sesudah makan</td>
                        <td className="px-4 py-3 text-center">10 tab</td>
                        <td className="px-4 py-3 text-center">
                          <button className="text-danger hover:text-red-700"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button>Kirim Resep ke Apotek</Button>
                  </div>
                </div>
              )}

              {activeTab === 'referral' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Select label="Rumah Sakit Tujuan">
                      <option>RSUD Kabupaten</option>
                      <option>RS Harapan Kita</option>
                    </Select>
                    <Select label="Poli Spesialis Tujuan">
                      <option>Poli Penyakit Dalam</option>
                      <option>Poli Bedah</option>
                      <option>Poli Mata</option>
                    </Select>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Alasan Rujukan</label>
                      <textarea className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-700" rows={4} placeholder="Kondisi pasien yang memerlukan rujukan..."></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                    <Button variant="outline">Simpan Draft</Button>
                    <Button>Cetak Surat Rujukan</Button>
                  </div>
                </div>
              )}

            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
