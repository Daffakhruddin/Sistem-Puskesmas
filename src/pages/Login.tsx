import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { Card, Button, Input } from '../components/ui/shared';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const role = localStorage.getItem('prototype_role') || 'loket';
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center bg-primary-50 p-12 h-full">
          <Activity size={80} className="text-primary-700 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Sistem Informasi Pelayanan Puskesmas
          </h2>
          <p className="text-gray-600 text-center">
            Digitalisasi pelayanan pasien Puskesmas Sehat Mandiri untuk proses yang lebih cepat, tepat, dan terintegrasi.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang</h1>
            <p className="text-gray-500">Silakan masuk ke akun Anda</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <Input 
              label="Username" 
              placeholder="Masukkan username" 
              required 
            />
            
            <Input 
              type="password" 
              label="Password" 
              placeholder="••••••••" 
              required 
            />
            
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-primary-700 focus:ring-primary-700 border-gray-300" />
                <span className="text-sm text-gray-600">Ingat Saya</span>
              </label>
              <a href="#" className="text-sm font-medium text-primary-700 hover:text-primary-800">
                Lupa Password?
              </a>
            </div>

            <Button type="submit" className="w-full py-3">
              Masuk
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; 2026 Puskesmas Sehat Mandiri
          </div>
        </div>
      </div>
    </div>
  );
}
