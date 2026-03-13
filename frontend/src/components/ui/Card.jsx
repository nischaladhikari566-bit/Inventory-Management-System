export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`
        bg-surface-800/50 backdrop-blur-sm
        border border-white/[0.06]
        rounded-2xl
        p-6
        transition-all duration-300
        ${hover ? 'hover:border-white/15 hover:bg-surface-800/80 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
