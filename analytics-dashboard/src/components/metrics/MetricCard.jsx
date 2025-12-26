import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { useAnimatedNumber } from '../../hooks/useAnimatedNumber';
import clsx from 'clsx';

/**
 * MetricCard Component
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Main value to display
 * @param {string} [props.subValue] - Secondary value/label
 * @param {Object} [props.trend] - Trend indicator
 * @param {string|number} props.trend.value - Trend value
 * @param {boolean} props.trend.isPositive - Whether trend is positive
 * @param {React.ReactNode} [props.icon] - Optional icon
 * @param {number} [props.delay] - Animation delay in ms
 * @param {boolean} [props.isDark] - Dark variant
 * @param {'default'|'pill'|'pill-highlight'} [props.variant] - Card variant
 * @param {string} [props.avatar] - Avatar URL
 * @param {string} [props.suffix] - Value suffix
 * @param {string} [props.prefix] - Value prefix
 * @param {boolean} [props.formatCompact] - Use compact number format
 */
const MetricCard = ({ 
  title, 
  value, 
  subValue, 
  trend, 
  delay = 0,
  isDark = false,
  variant = 'default',
  avatar,
  suffix,
  prefix,
  formatCompact
}) => {
  const numericValue = typeof value === 'number' ? value : parseFloat(String(value).replace(/[^0-9.-]+/g, ""));
  const animatedValue = useAnimatedNumber(numericValue || 0, 1500);
  
  let displayValue = animatedValue.toLocaleString();
  if (formatCompact) {
     displayValue = Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 0 }).format(animatedValue);
  }
  
  const finalValue = `${prefix || ''}${displayValue}${suffix || ''}`;

  // PILL VARIANTS (Deals, Value, Win Rate)
  if (variant === 'pill' || variant === 'pill-highlight') {
     return (
        <div 
          className={clsx(
            "rounded-2xl p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-ios opacity-0 animate-fade-in flex flex-col h-full min-h-[130px]",
            "bg-white dark:bg-bg-elevated-dark border border-border-subtle/30 dark:border-border-subtle-dark/30"
          )}
          style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
        >
           <h4 className="text-xs font-medium text-text-tertiary dark:text-text-tertiary-dark mb-3 uppercase tracking-wide">{title}</h4>
           
           <div className="flex-1 flex flex-col items-center justify-center">
             <div className={clsx(
                "px-4 py-1.5 rounded-full text-sm font-bold mb-2 tabular-nums",
                variant === 'pill-highlight' 
                  ? "bg-accent-red text-white shadow-sm" 
                  : "bg-gray-100 dark:bg-white/10 text-text-primary dark:text-text-primary-dark"
             )}>
                {finalValue}
             </div>

             {trend && (
               <div className={clsx("text-xs font-semibold flex items-center gap-0.5 tabular-nums", 
                 trend.isPositive ? "text-accent-success" : "text-accent-red"
               )}>
                  {trend.isPositive ? "↑" : "↓"} {trend.value}%
               </div>
             )}
           </div>
        </div>
     )
  }

  // DEFAULT / DARK VARIANT (Top Sales / Best Deal)
  return (
    <div 
      className={clsx(
        "rounded-2xl p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-ios opacity-0 animate-fade-in h-full min-h-[130px] flex flex-col justify-between relative overflow-hidden",
        isDark 
          ? "bg-gradient-to-br from-gray-900 to-black text-white" 
          : "bg-white dark:bg-bg-elevated-dark text-text-primary dark:text-text-primary-dark border border-border-subtle/30 dark:border-border-subtle-dark/30"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Header */}
      <div className="flex justify-between items-start z-10 relative">
        <h4 className={clsx("text-xs font-medium uppercase tracking-wide", isDark ? "text-gray-400" : "text-text-tertiary dark:text-text-tertiary-dark")}>
          {title}
        </h4>
        {isDark && title === 'Best deal' && (
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        )}
      </div>

      {/* Main Content */}
      <div className="z-10 relative mt-2">
        <div className="text-2xl md:text-3xl font-bold tracking-tight mb-1 tabular-nums">
          {finalValue}
        </div>
        
        <div className="flex items-center justify-between">
           {/* SubValue & Avatar */}
           <div className="flex items-center gap-2">
              {avatar && (
                 <img src={avatar} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700 shadow-sm object-cover" alt="Avatar" />
              )}
              {subValue && (
                 <span className={clsx("text-xs font-medium", isDark ? "text-gray-400" : "text-text-secondary dark:text-text-secondary-dark")}>{subValue}</span>
              )}
           </div>
           
           {/* Best Deal Arrow */}
           {title === 'Best deal' && (
              <button className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                 <ArrowUpRight size={14} />
              </button>
           )}
           
           {/* Top Sales +3 indicator */}
           {title === 'Top sales' && (
               <div className="flex -space-x-1">
                   <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 border border-white dark:border-bg-elevated-dark flex items-center justify-center text-[10px] text-gray-500 dark:text-gray-300 font-bold">+3</div>
               </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
