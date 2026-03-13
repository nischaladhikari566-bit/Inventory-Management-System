import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

const variants = {
  primary:
    'bg-white text-black hover:bg-gray-200 active:bg-gray-300 shadow-sm shadow-white/10',
  secondary:
    'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5',
  ghost:
    'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
  danger:
    'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-4 py-2.5 text-sm rounded-xl',
  lg: 'px-6 py-3 text-base rounded-xl',
};

const Button = forwardRef(
  ({ children, variant = 'primary', size = 'md', loading = false, disabled = false, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`
          inline-flex items-center justify-center gap-2
          font-semibold
          transition-all duration-200 ease-out
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:scale-[1.02] active:scale-[0.98]
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...props}
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
