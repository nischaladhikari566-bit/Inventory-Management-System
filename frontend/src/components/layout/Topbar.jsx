import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Bell, Search } from 'lucide-react';

const PAGE_TITLES = {
  '/dashboard': 'Dashboard',
  '/dashboard/products': 'Products',
  '/dashboard/categories': 'Categories',
  '/dashboard/suppliers': 'Suppliers',
  '/dashboard/stock': 'Stock Movements',
  '/dashboard/reports': 'Reports',
  '/dashboard/users': 'Users',
};

export default function Topbar() {
  const location = useLocation();
  const { user } = useAuth();
  const title = PAGE_TITLES[location.pathname] || 'Dashboard';

  return (
    <header className="h-16 bg-surface-900/80 backdrop-blur-md border-b border-white/[0.06] flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Page title */}
      <h1 className="text-lg font-semibold text-white">{title}</h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="
              bg-surface-800 text-sm text-white placeholder-gray-500
              border border-white/[0.06] rounded-xl
              pl-9 pr-4 py-2
              w-56 focus:w-72
              transition-all duration-300
              focus:outline-none focus:border-white/20
            "
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-white rounded-full" />
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm font-semibold text-white">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-medium text-white leading-tight">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 leading-tight">
              {user?.role || 'staff'}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
