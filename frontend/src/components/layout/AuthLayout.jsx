import { Outlet, Link } from 'react-router-dom';
import { Boxes } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-surface-950 flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px]" />

        {/* Branding content */}
        <div className="relative z-10 max-w-md px-12">
          <Link to="/" className="flex items-center gap-3 mb-12 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/10 group-hover:shadow-white/20 transition-shadow">
              <Boxes size={22} className="text-black" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Inven<span className="text-gray-400">track</span>
            </span>
          </Link>

          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Manage your inventory
            <br />
            <span className="text-gray-500">with precision.</span>
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Real-time stock tracking, smart reports, and supplier management
            — all in one beautifully simple platform.
          </p>

          {/* Decorative stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { label: 'Uptime', value: '99.9%' },
              { label: 'Speed', value: '<50ms' },
              { label: 'Users', value: '10k+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center"
              >
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md animate-slide-up">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
