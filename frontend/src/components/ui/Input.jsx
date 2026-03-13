import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(
  ({ label, error, icon: Icon, type = 'text', className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icon size={18} />
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            className={`
              w-full
              bg-surface-800 text-white placeholder-gray-500
              border border-white/10 rounded-xl
              px-4 py-2.5 text-sm
              transition-all duration-200
              focus:outline-none focus:border-white/30 focus:bg-surface-700
              hover:border-white/20
              disabled:opacity-50 disabled:cursor-not-allowed
              ${Icon ? 'pl-10' : ''}
              ${isPassword ? 'pr-10' : ''}
              ${error ? 'border-red-500/50 focus:border-red-500/70' : ''}
              ${className}
            `}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-400 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
