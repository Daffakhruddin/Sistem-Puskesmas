import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Bell, Search, UserCircle, LogOut, 
  Home, Users, ClipboardList, Activity, FileText, 
  Pill, Stethoscope, Settings, ShieldCheck, History
} from 'lucide-react';
import { Button } from '../components/ui/shared';

// Simulated roles for the prototype menu
export type Role = 'loket' | 'perawat' | 'dokter' | 'obat' | 'kepala' | 'admin';

interface MenuItem {
  path: string;
  name: string;
  icon: React.ElementType;
  roles: Role[];
}

const menuItems: MenuItem[] = [
  // Loket
  { path: '/loket', name: 'Dashboard Loket', icon: Home, roles: ['loket'] },
  { path: '/patients', name: 'Manajemen Pasien', icon: Users, roles: ['loket', 'dokter', 'perawat'] },
  { path: '/registration', name: 'Pendaftaran', icon: ClipboardList, roles: ['loket'] },
  { path: '/queue', name: 'Antrean', icon: Users, roles: ['loket'] },
  
  // Perawat
  { path: '/perawat', name: 'Dashboard Perawat', icon: Home, roles: ['perawat'] },
  { path: '/assessment', name: 'Pemeriksaan Awal', icon: Activity, roles: ['perawat'] },
  { path: '/checkup', name: 'Health Checkup', icon: Activity, roles: ['perawat'] },
  
  // Dokter
  { path: '/dokter', name: 'Dashboard Dokter', icon: Home, roles: ['dokter'] },
  { path: '/examination', name: 'Pemeriksaan Dokter', icon: Stethoscope, roles: ['dokter'] },
  { path: '/treatment', name: 'Tindakan', icon: Activity, roles: ['dokter', 'perawat'] },
  { path: '/referral', name: 'Rujukan', icon: FileText, roles: ['dokter'] },
  
  // Obat
  { path: '/obat', name: 'Dashboard Apotek', icon: Home, roles: ['obat'] },
  { path: '/dispensing', name: 'Pemberian Obat', icon: Pill, roles: ['obat'] },
  { path: '/inventory', name: 'Stok Obat', icon: Pill, roles: ['obat', 'admin'] },
  
  // Kepala
  { path: '/kepala', name: 'Dashboard Kepala', icon: Home, roles: ['kepala'] },
  { path: '/reports', name: 'Laporan', icon: FileText, roles: ['kepala', 'admin'] },
  
  // Admin
  { path: '/admin', name: 'Dashboard Admin', icon: Home, roles: ['admin'] },
  { path: '/users', name: 'Manajemen User', icon: ShieldCheck, roles: ['admin'] },
  { path: '/audit', name: 'Audit Log', icon: History, roles: ['admin'] },
];

export default function MainLayout({ children, role = 'loket' }: { children: React.ReactNode, role?: Role }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const allowedMenus = menuItems.filter(m => m.roles.includes(role));

  const handleLogout = () => {
    // Basic logout simulation
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-lg text-primary-700">SIPP</span>
            </div>
          ) : (
            <div className="w-8 h-8 mx-auto rounded-lg bg-primary-700 flex items-center justify-center text-white font-bold">
              S
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-gray-700">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} className="mx-auto" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
          {allowedMenus.map((menu) => {
            const isActive = location.pathname.startsWith(menu.path);
            return (
              <Link
                key={menu.path}
                to={menu.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-primary-700 text-white font-medium shadow-sm' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <menu.icon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
                {sidebarOpen && <span>{menu.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Role Selector for Prototype Testing */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Prototype Role Switcher:</p>
            <select 
              className="w-full text-sm border-gray-300 rounded-lg p-1"
              value={role}
              onChange={(e) => {
                // In a real app, this would be handled by auth state.
                // For this prototype, we'll store it in localStorage and reload.
                localStorage.setItem('prototype_role', e.target.value);
                window.location.href = `/${e.target.value}`;
              }}
            >
              <option value="loket">Petugas Loket</option>
              <option value="perawat">Perawat</option>
              <option value="dokter">Dokter</option>
              <option value="obat">Apoteker</option>
              <option value="kepala">Kepala Puskesmas</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96 hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Cari pasien atau menu..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-primary-700 text-sm transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900 capitalize">{role}</p>
                <p className="text-xs text-gray-500">Puskesmas Sehat Mandiri</p>
              </div>
              <UserCircle size={32} className="text-gray-400" />
            </div>
            <Button variant="ghost" className="!p-2 text-gray-500" onClick={handleLogout}>
              <LogOut size={20} />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
