import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Large 404 */}
        <h1 className="text-8xl font-extrabold text-white/10 mb-4 select-none">404</h1>

        <h2 className="text-2xl font-bold text-white mb-3">Page not found</h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link to="/">
            <Button variant="primary" className="gap-2">
              <Home size={16} />
              Go home
            </Button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
