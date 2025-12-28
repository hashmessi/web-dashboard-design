/**
 * PlatformValueChart Component
 * 
 * Pixel-perfect platform revenue breakdown
 * Monthly revenue with summary card
 */

import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useDashboard } from '../../context/DashboardContext';

// Dribbble icon
const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm7.934 5.519a10.196 10.196 0 012.256 6.328c-.328-.066-3.607-.733-6.912-.318-.072-.157-.139-.318-.214-.479-.195-.422-.405-.844-.627-1.253 3.65-1.492 5.17-3.596 5.497-4.278zM12 1.812c2.733 0 5.225 1.055 7.088 2.776-.271.625-1.649 2.585-5.12 3.903-1.601-2.94-3.377-5.35-3.647-5.715a10.2 10.2 0 011.679-.964z"/>
  </svg>
);

const PlatformValueChart = () => {
  const { isLoading } = useDashboard();

  if (isLoading) {
    return <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-6 shadow-card h-full animate-pulse" />;
  }

  // Monthly bar data matching reference
  const barData = [
    { month: 'Aug', value: 6901, height: 45 },
    { month: 'Sep', value: 11035, height: 75, highlight: true },
    { month: 'Oct', value: 9288, height: 62, highlight: true },
    { month: 'Nov', value: 7500, height: 50 },
  ];

  // Y-axis labels
  const yLabels = ['$16,000', '$11,000', '$7,500', '$4,000'];

  // Tabs
  const tabs = ['Revenue', 'Leads', 'W/L'];

  return (
    <div 
      className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-3 sm:p-4 shadow-card hover:shadow-hover transition-all duration-300 ease-ios animate-fade-in h-full flex flex-col border border-border-subtle/30 dark:border-border-subtle-dark/30" 
      style={{ animationDelay: '350ms' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-3 flex-shrink-0">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white flex-shrink-0">
            <DribbbleIcon />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-text-primary dark:text-text-primary-dark">Platform value</span>
          <span className="text-[10px] text-text-tertiary hidden sm:inline">Dribbble</span>
          <ChevronDown size={10} className="text-text-tertiary hidden sm:inline" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-2 sm:mb-3 flex-shrink-0">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={clsx(
              "px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-medium transition-all",
              index === 0 
                ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-sm" 
                : "text-text-secondary dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/10"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Summary Card */}
      <div className="bg-accent-pink text-white rounded-xl p-2.5 sm:p-3 mb-2 sm:mb-3 relative overflow-hidden flex-shrink-0">
        <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
        
        <div className="relative z-10">
          <div className="text-[8px] sm:text-[9px] opacity-80 mb-0.5">Average monthly</div>
          <div className="text-xs sm:text-sm font-bold mb-1">Revenue</div>
          <div className="text-lg sm:text-xl font-bold tabular-nums">$18,552</div>
          
          <div className="flex gap-3 sm:gap-4 mt-1.5 sm:mt-2 text-[8px] sm:text-[9px]">
            <div>
              <span className="opacity-80">Leads</span>
              <div className="font-bold tabular-nums">373 <span className="opacity-60">97/276</span></div>
            </div>
            <div>
              <span className="opacity-80">Win/lose</span>
              <div className="font-bold tabular-nums">16% <span className="opacity-60">51/318</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart with Y-axis - Takes remaining space */}
      <div className="flex-1 flex gap-2 min-h-[120px] sm:min-h-[150px]">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between text-[7px] sm:text-[8px] text-text-tertiary tabular-nums py-1 flex-shrink-0">
          {yLabels.map(label => (
            <span key={label} className="whitespace-nowrap">{label}</span>
          ))}
        </div>
        
        {/* Bars - Fill remaining width */}
        <div className="flex-1 flex items-end justify-between gap-1 sm:gap-2">
          {barData.map((bar, index) => (
            <div key={index} className="flex flex-col items-center flex-1 group h-full justify-end">
              {/* Value tooltip on hover */}
              <div className="mb-1 text-[8px] sm:text-[9px] font-bold text-text-primary dark:text-text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity tabular-nums">
                ${bar.value.toLocaleString()}
              </div>
              
              {/* Bar */}
              <div 
                style={{ height: `${bar.height}%` }}
                className={clsx(
                  "w-full rounded-md sm:rounded-lg transition-all duration-500 ease-ios cursor-pointer min-h-[16px]",
                  bar.highlight 
                    ? "bg-accent-pink shadow-pink-glow hover:shadow-lg" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                )}
              />
              
              {/* Month label */}
              <div className="mt-1 sm:mt-1.5 text-[8px] sm:text-[9px] text-text-tertiary dark:text-text-tertiary-dark font-medium">
                {bar.month}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformValueChart;
