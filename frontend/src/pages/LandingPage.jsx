import { Link } from "react-router-dom";
import {
  Package,
  BarChart3,
  Truck,
  ShieldCheck,
  ArrowRight,
  Boxes,
  TrendingUp,
  Bell,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const FEATURES = [
  {
    icon: Boxes,
    title: "Real-time Stock Tracking",
    desc: "Monitor every unit across all locations instantly. Never lose sight of your inventory again.",
  },
  {
    icon: TrendingUp,
    title: "Smart Reports",
    desc: "Actionable insights with visual dashboards. Understand trends before they become problems.",
  },
  {
    icon: Truck,
    title: "Supplier Management",
    desc: "Manage all your suppliers in one place. Track orders, contacts, and delivery history.",
  },
  {
    icon: Bell,
    title: "Low Stock Alerts",
    desc: "Automatic notifications when stock dips below your threshold. Stay ahead of shortages.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based Access",
    desc: "Admin and staff roles with fine-grained permissions. Secure by design.",
  },
  {
    icon: BarChart3,
    title: "Movement History",
    desc: "Full audit trail of every stock movement — in, out, and adjustments — with user attribution.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e6e1] overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#0a0a0f]/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/30 group-hover:shadow-amber-400/50 transition-shadow">
              <Package size={18} className="text-[#0a0a0f]" strokeWidth={2.5} />
            </div>
            <span
              className="text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Inven<span className="text-amber-400">track</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#a09e99] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm text-[#a09e99] hover:text-white transition-colors duration-200 px-4 py-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium bg-amber-400 hover:bg-amber-300 text-[#0a0a0f] px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#e8e6e1 1px, transparent 1px),
                              linear-gradient(90deg, #e8e6e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Inventory Management, Simplified
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            Know exactly what
            <br />
            <span className="text-amber-400">you have.</span> Always.
          </h1>

          <p className="text-lg text-[#7a7872] max-w-xl mx-auto mb-10 leading-relaxed">
            Inventrack gives your team a single source of truth for stock
            levels, supplier data, and movement history — in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a0a0f] font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/25 group"
            >
              Start for free
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-[#a09e99] hover:text-white px-6 py-3 rounded-lg transition-all duration-200"
            >
              Sign in to your account
            </Link>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="rounded-xl border border-white/10 bg-[#111118] overflow-hidden shadow-2xl shadow-black/60">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0e0e15]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="ml-4 flex-1 bg-white/5 rounded text-xs text-[#555] px-3 py-1 max-w-xs">
                app.inventrack.io/dashboard
              </div>
            </div>

            {/* Stats */}
            <div className="p-6 grid grid-cols-4 gap-4">
              {[
                {
                  label: "Total Products",
                  value: "1,284",
                  color: "text-amber-400",
                },
                {
                  label: "Low Stock Items",
                  value: "23",
                  color: "text-red-400",
                },
                { label: "Suppliers", value: "47", color: "text-blue-400" },
                {
                  label: "Stock Value",
                  value: "$94,200",
                  color: "text-green-400",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/5 rounded-lg p-4"
                >
                  <div className="text-xs text-[#555] mb-1">{stat.label}</div>
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium mb-3 uppercase tracking-widest">
              Features
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Everything your team needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-400/20 rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                  <f.icon size={20} className="text-amber-400" />
                </div>

                <h3 className="text-white font-semibold mb-2">{f.title}</h3>

                <p className="text-sm text-[#6b6963] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to take control?
          </h2>

          <p className="text-[#7a7872] mb-8">
            Join teams that trust Inventrack to keep their operations running
            smoothly.
          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a0a0f] font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/20 group"
          >
            Create your free account
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
