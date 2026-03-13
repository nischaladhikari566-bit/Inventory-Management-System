import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Package,
  FolderOpen,
  Truck,
  ArrowLeftRight,
  BarChart3,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Boxes,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Products', icon: Package, path: '/dashboard/products' },
  { label: 'Categories', icon: FolderOpen, path: '/dashboard/categories' },
  { label: 'Suppliers', icon: Truck, path: '/dashboard/suppliers' },
  { label: 'Stock', icon: ArrowLeftRight, path: '/dashboard/stock' },
  { label: 'Reports', icon: BarChart3, path: '/dashboard/reports' },
  { label: 'Users', icon: Users, path: '/dashboard/users' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside
      className={`
        h-screen sticky top-0
        bg-surface-900 border-r border-white/[0.06]
        flex flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-[72px]' : 'w-64'}
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <Boxes size={18} className="text-black" strokeWidth={2.5} />
          </div>
          <span
            className={`
              text-lg font-bold text-white tracking-tight whitespace-nowrap
              transition-all duration-300
              ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}
            `}
          >
            Inven<span className="text-gray-400">track</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2.5 rounded-xl
              text-sm font-medium
              transition-all duration-200
              group
              ${isActive
                ? 'bg-white text-black shadow-sm shadow-white/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }
            `}
          >
            <item.icon size={20} className="flex-shrink-0" />
            <span
              className={`
                whitespace-nowrap transition-all duration-300
                ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}
              `}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* User & Logout */}
      <div className="p-3 border-t border-white/[0.06] space-y-2">
        {/* User info */}
        {!collapsed && user && (
          <div className="px-3 py-2 animate-fade-in">
            <p className="text-sm font-medium text-white truncate">
              {user.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user.email || ''}
            </p>
          </div>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="
            w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
            text-sm font-medium text-gray-400
            hover:text-red-400 hover:bg-red-500/5
            transition-all duration-200
            cursor-pointer
          "
        >
          <LogOut size={20} className="flex-shrink-0" />
          <span
            className={`
              whitespace-nowrap transition-all duration-300
              ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}
            `}
          >
            Logout
          </span>
        </button>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            w-full flex items-center justify-center
            py-2 rounded-xl
            text-gray-500 hover:text-white hover:bg-white/5
            transition-all duration-200
            cursor-pointer
          "
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </aside>
  );
}
