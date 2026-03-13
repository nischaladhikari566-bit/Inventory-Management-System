const variants = {
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  danger: 'bg-red-500/10 text-red-400 border-red-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  neutral: 'bg-white/5 text-gray-300 border-white/10',
};

export default function Badge({ children, variant = 'neutral', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5
        text-xs font-medium
        rounded-full border
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
