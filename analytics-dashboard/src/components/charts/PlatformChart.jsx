/**
 * PlatformChart Component (Donut Chart)
 * 
 * Displays platform distribution analytics with:
 * - Animated donut chart showing revenue distribution
 * - Platform legend with percentages and revenue
 * - Trend badges showing growth indicators
 * - "Sales dynamic" footer label
 * 
 * @component
 */

import { MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';
import { useDashboard } from '../../context/DashboardContext';

const PlatformChart = () => {
  const { isLoading } = useDashboard();
  
  // Loading state
  if (isLoading) {
    return (
      <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-6 shadow-card h-[280px] animate-pulse" />
    );
  }
  
  // Platform distribution data matching reference design
  const platforms = [
    { name: 'Dribbble', color: 'bg-platform-dribbble', percentage: 28.1, revenue: 44072 },
    { name: 'Instagram', color: 'bg-platform-instagram', percentage: 14.1, revenue: 22114 },
    { name: 'Google', color: 'bg-accent-success', percentage: 5.4, revenue: 8469 },
    { name: 'Other', color: 'bg-gray-400', percentage: 7.1, revenue: 11135 },
  ];

  // Calculate donut chart segments
  const circumference = 2 * Math.PI * 42; // Circle circumference for r=42
  let currentOffset = 0;
  
  const segments = platforms.map((platform) => {
    const segment = {
      ...platform,
      offset: currentOffset,
      dashArray: `${(platform.percentage / 100) * circumference} ${circumference}`,
    };
    currentOffset += platform.percentage;
    return segment;
  });

  return (
    <div 
      className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-ios animate-fade-in border border-border-subtle/30 dark:border-border-subtle-dark/30" 
      style={{ animationDelay: '250ms' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-text-primary dark:text-text-primary-dark text-sm">
          Work with platforms
        </h4>
        
        <button 
          className="text-text-tertiary dark:text-text-tertiary-dark hover:text-text-primary dark:hover:text-text-primary-dark transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Trend Badges */}
      <div className="flex gap-2 mb-4">
        {/* Growth Indicator */}
        <span className="bg-accent-pink text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 shadow-sm font-bold tabular-nums">
          ↑ 3
        </span>
        
        {/* Revenue Badge */}
        <span className="bg-accent-pink text-white text-[10px] px-2 py-1 rounded-full shadow-sm font-bold tabular-nums">
          $156,841
        </span>
      </div>

      {/* Chart and Legend Container */}
      <div className="flex items-center gap-4">
        {/* Donut Chart */}
        <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              className="text-gray-100 dark:text-gray-700"
            />
            
            {/* Platform Segments */}
            {segments.map((segment, index) => (
              <circle
                key={segment.name}
                cx="50"
                cy="50"
                r="42"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                className={clsx(segment.color.replace('bg-', 'text-'))}
                strokeDasharray={segment.dashArray}
                strokeDashoffset={-((segment.offset / 100) * circumference)}
                style={{ 
                  opacity: 0, 
                  animation: `fadeIn 0.6s ease-out forwards ${index * 0.15}s`,
                }}
              />
            ))}
          </svg>
          
          {/* Center Text - Total Percentage and Revenue */}
          <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-bold text-text-primary dark:text-text-primary-dark tabular-nums">
              45.3%
            </span>
            <span className="text-xs font-medium text-text-tertiary dark:text-text-tertiary-dark tabular-nums">
              $71,048
            </span>
          </div>
        </div>

        {/* Platform Legend */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {platforms.map(platform => (
            <div 
              key={platform.name} 
              className="flex flex-col p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              {/* Platform Name with Color Indicator */}
              <div className="flex items-center gap-1.5 text-[10px] text-text-secondary dark:text-text-secondary-dark font-medium mb-0.5">
                <span className={clsx("w-2 h-2 rounded-full", platform.color)} />
                {platform.name}
              </div>
              
              {/* Percentage and Revenue */}
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-text-primary dark:text-text-primary-dark text-xs tabular-nums">
                  {platform.percentage}%
                </span>
                <span className="text-[10px] text-text-tertiary dark:text-text-tertiary-dark tabular-nums">
                  ${(platform.revenue / 1000).toFixed(0)}k
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Sales Dynamic Label */}
      <div className="mt-4 pt-3 border-t border-border-subtle/20 dark:border-border-subtle-dark/20">
        <span className="text-xs text-text-tertiary dark:text-text-tertiary-dark">
          Sales dynamic
        </span>
      </div>
    </div>
  );
};

export default PlatformChart;
