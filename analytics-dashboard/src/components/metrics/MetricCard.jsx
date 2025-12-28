import { ArrowUpRight, Star, Trophy, Briefcase, TrendingUp, Target, DollarSign } from 'lucide-react';
import { useAnimatedNumber } from '../../hooks/useAnimatedNumber';
import clsx from 'clsx';

/**
 * MetricCard Component - Pixel-perfect implementation
 * Matches reference dashboard design exactly
 */
const MetricCard = ({ 
  title, 
  value, 
  subValue, 
  trend, 
  delay = 0,
  variant = 'default', // 'default' | 'dark' | 'highlight'
  avatar,
  icon,
  suffix,
  prefix,
}) => {
  const numericValue = typeof value === 'number' ? value : parseFloat(String(value).replace(/[^0-9.-]+/g, ""));
  const animatedValue = useAnimatedNumber(numericValue || 0, 1200);
  
  // Format display value
  const formatValue = () => {
    if (typeof value === 'string' && value.includes('$')) {
      return `$${animatedValue.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
    }
    if (typeof value === 'string' && value.includes('%')) {
      return `${animatedValue}%`;
    }
    return animatedValue.toLocaleString();
  };
  
  const displayValue = prefix ? `${prefix}${formatValue()}` : formatValue();
  const finalValue = suffix ? `${displayValue}${suffix}` : displayValue;

  // Icon mapping
  const IconComponent = {
    trophy: Trophy,
    dollar: DollarSign,
    briefcase: Briefcase,
    trending: TrendingUp,
    target: Target,
  }[icon];

  // DARK VARIANT (Best Deal card)
  if (variant === 'dark') {
    return (
      <div 
        className="rounded-2xl p-4 shadow-card hover:shadow-hover transition-all duration-300 ease-ios opacity-0 animate-fade-in h-full flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      >
        {/* Decorative element */}
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        
        {/* Header */}
        <div className="flex justify-between items-start relative z-10">
          <h4 className="text-[10px] font-medium uppercase tracking-wider text-gray-400">{title}</h4>
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
        </div>

        {/* Main Value */}
        <div className="relative z-10 mt-auto">
          <div className="text-2xl font-bold tracking-tight mb-1.5 tabular-nums">{finalValue}</div>
          
          <div className="flex items-center justify-between">
            {/* SubValue & Avatar */}
            <div className="flex items-center gap-2">
              {avatar && (
                <img src={avatar} className="w-5 h-5 rounded-full border border-white/30 object-cover" alt="" />
              )}
              {subValue && (
                <span className="text-[11px] font-medium text-gray-400">{subValue}</span>
              )}
            </div>
            
            {/* Arrow Button */}
            <button className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowUpRight size={12} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // HIGHLIGHT VARIANT (Value card with red pill)
  if (variant === 'highlight') {
    return (
      <div 
        className="rounded-2xl p-4 shadow-card hover:shadow-hover transition-all duration-300 ease-ios opacity-0 animate-fade-in h-full flex flex-col bg-white dark:bg-bg-elevated-dark border border-border-subtle/30 dark:border-border-subtle-dark/30"
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      >
        <h4 className="text-[10px] font-medium uppercase tracking-wider text-text-tertiary dark:text-text-tertiary-dark mb-2">{title}</h4>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Red Highlight Pill */}
          <div className="bg-accent-red text-white px-4 py-1.5 rounded-full text-sm font-bold mb-2 tabular-nums shadow-sm">
            {finalValue}
          </div>
          
          {trend && (
            <div className={clsx(
              "text-[11px] font-semibold flex items-center gap-0.5 tabular-nums",
              trend.isPositive ? "text-accent-success" : "text-accent-red"
            )}>
              {trend.isPositive ? "↑" : "↓"} {trend.value}%
            </div>
          )}
        </div>
      </div>
    );
  }

  // PILL VARIANT (Deals, Win Rate) with Sparkline
  if (variant === 'pill') {
    // Mini sparkline data
    const sparklineData = [3, 5, 4, 7, 6, 8, 7, 9, 8, 10];
    const maxVal = Math.max(...sparklineData);
    const points = sparklineData.map((v, i) => `${i * 12},${20 - (v / maxVal) * 18}`).join(' ');
    
    return (
      <div 
        className="rounded-2xl p-4 shadow-card hover:shadow-hover hover:scale-[1.02] transition-all duration-300 ease-ios opacity-0 animate-fade-in h-full flex flex-col bg-white dark:bg-bg-elevated-dark border border-border-subtle/30 dark:border-border-subtle-dark/30"
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      >
        <h4 className="text-[10px] font-medium uppercase tracking-wider text-text-tertiary dark:text-text-tertiary-dark mb-2">{title}</h4>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Gray Pill */}
          <div className="bg-gray-100 dark:bg-white/10 text-text-primary dark:text-text-primary-dark px-4 py-1.5 rounded-full text-sm font-bold mb-2 tabular-nums">
            {finalValue}
          </div>
          
          {trend && (
            <div className={clsx(
              "text-[11px] font-semibold flex items-center gap-0.5 tabular-nums mb-2",
              trend.isPositive ? "text-accent-success" : "text-accent-red"
            )}>
              {trend.isPositive ? "↑" : "↓"} {trend.value}%
            </div>
          )}
          
          {/* Mini Sparkline */}
          <svg width="108" height="20" className="opacity-60">
            <polyline
              fill="none"
              stroke={trend?.isPositive ? "#10B981" : "#EF4444"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points}
            />
          </svg>
        </div>
      </div>
    );
  }

  // DEFAULT VARIANT (Top Sales)
  return (
    <div 
      className="rounded-2xl p-4 shadow-card hover:shadow-hover transition-all duration-300 ease-ios opacity-0 animate-fade-in h-full flex flex-col justify-between bg-white dark:bg-bg-elevated-dark border border-border-subtle/30 dark:border-border-subtle-dark/30"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <h4 className="text-[10px] font-medium uppercase tracking-wider text-text-tertiary dark:text-text-tertiary-dark">{title}</h4>
        {IconComponent && (
          <div className="w-6 h-6 rounded-lg bg-accent-pink/10 flex items-center justify-center">
            <IconComponent size={12} className="text-accent-pink" />
          </div>
        )}
      </div>

      {/* Main Value */}
      <div className="mt-auto">
        <div className="text-2xl font-bold tracking-tight text-text-primary dark:text-text-primary-dark mb-1.5 tabular-nums">
          {finalValue}
        </div>
        
        {/* Footer with avatar/subvalue */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {avatar && (
              <img src={avatar} className="w-5 h-5 rounded-full border border-white dark:border-gray-600 object-cover" alt="" />
            )}
            {subValue && (
              <span className="text-[11px] text-text-secondary dark:text-text-secondary-dark">{subValue}</span>
            )}
          </div>
          
          {/* Overflow indicator */}
          {title === 'Top sales' && (
            <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[9px] font-bold text-text-secondary dark:text-text-secondary-dark">
              +3
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
