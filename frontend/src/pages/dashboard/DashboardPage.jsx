import { useState, useEffect } from 'react';
import { Package, AlertTriangle, Truck, TrendingUp } from 'lucide-react';
import Card from '../../components/ui/Card';
import Spinner from '../../components/ui/Spinner';
import API from '../../api/axios';

const STAT_CARDS = [
  { key: 'totalProducts', label: 'Total Products', icon: Package, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { key: 'lowStock', label: 'Low Stock', icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-400/10' },
  { key: 'suppliers', label: 'Suppliers', icon: Truck, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { key: 'stockValue', label: 'Stock Value', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-400/10' },
];

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get('/reports/dashboard');
        setStats(res.data);
      } catch {
        // Fallback placeholder stats if API not ready
        setStats({
          totalProducts: 0,
          lowStock: 0,
          suppliers: 0,
          stockValue: '$0',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
        <p className="text-gray-500 text-sm">Overview of your inventory</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STAT_CARDS.map((card) => (
          <Card key={card.key} hover>
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center`}>
                <card.icon size={20} className={card.color} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{card.label}</p>
                <p className={`text-xl font-bold ${card.color}`}>
                  {stats?.[card.key] ?? '—'}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Placeholder for future sections */}
      <Card>
        <div className="text-center py-12">
          <Package size={40} className="text-gray-600 mx-auto mb-3" />
          <h3 className="text-white font-semibold mb-1">Your inventory at a glance</h3>
          <p className="text-gray-500 text-sm">
            Charts and recent activity will appear here as you add products.
          </p>
        </div>
      </Card>
    </div>
  );
}
