/**
 * PlatformValueChart Component
 * 
 * Displays platform-specific revenue analytics with:
 * - Monthly revenue breakdown by platform (Dribbble)
 * - Interactive tab navigation (Revenue/Leads/W/L)
 * - Summary card showing average monthly metrics
 * - Bar chart visualization for 4-month period
 * 
 * @component
 */

import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useDashboard } from '../../context/DashboardContext';

/**
 * Dribbble brand icon component
 * SVG basketball icon representing Dribbble platform
 */
const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm7.934 5.519a10.196 10.196 0 012.256 6.328c-.328-.066-3.607-.733-6.912-.318-.072-.157-.139-.318-.214-.479-.195-.422-.405-.844-.627-1.253 3.65-1.492 5.17-3.596 5.497-4.278zM12 1.812c2.733 0 5.225 1.055 7.088 2.776-.271.625-1.649 2.585-5.12 3.903-1.601-2.94-3.377-5.35-3.647-5.715a10.2 10.2 0 011.679-.964zm-3.395.496c.257.352 2.002 2.767 3.62 5.644-4.572 1.215-8.606 1.196-9.053 1.187a10.236 10.236 0 015.433-6.831zM1.812 12c0-.074.003-.147.004-.221.44.008 5.152.065 10.028-1.385.279.543.543 1.095.781 1.648-.106.03-.213.063-.32.098-5.107 1.649-7.818 6.148-8.141 6.695A10.177 10.177 0 011.812 12zm10.188 10.188c-2.363 0-4.532-.809-6.262-2.158.256-.533 2.364-4.323 7.958-6.311l.065-.021c1.427 3.697 2.015 6.797 2.17 7.711a10.182 10.182 0 01-3.931.779zm5.754-2.023c-.106-.649-.648-3.609-1.986-7.252 3.122-.498 5.852.319 6.203.427a10.184 10.184 0 01-4.217 6.825z"/>
  </svg>
);

const PlatformValueChart = () => {
  const { isLoading } = useDashboard();

  // Show loading skeleton while data is being fetched
  if (isLoading) {
    return (
      <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-6 shadow-card h-[300px] animate-pulse" />
    );
  }

  // Monthly revenue data for Aug-Nov period
  const barData = [
    { month: 'Aug', value: 6901, height: 45, color: 'bg-gray-300 dark:bg-gray-600' },
    { month: 'Sep', value: 11035, height: 72, color: 'bg-accent-pink', highlight: true },
    { month: 'Oct', value: 9288, height: 60, color: 'bg-accent-pink', highlight: true },
    { month: 'Nov', value: 7500, height: 48, color: 'bg-gray-300 dark:bg-gray-600' },
  ];

  // Tab navigation options
  const tabs = ['Revenue', 'Leads', 'W/L'];

  return (
    <div 
      className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-ios animate-fade-in h-full flex flex-col border border-border-subtle/30 dark:border-border-subtle-dark/30" 
      style={{ animationDelay: '350ms' }}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* Dribbble Platform Icon */}
          <div className="w-5 h-5 rounded bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white">
            <DribbbleIcon />
          </div>
          
          <span className="text-sm font-semibold text-text-primary dark:text-text-primary-dark">
            Platform value
          </span>
          
          <span className="text-xs text-text-tertiary">Dribbble</span>
          
          <ChevronDown size={12} className="text-text-tertiary" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={clsx(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
              index === 0 
                ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-sm" 
                : "text-text-secondary dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/10"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Summary Card - Average Monthly Revenue */}
      <div className="bg-accent-pink text-white rounded-xl p-3 mb-4 relative overflow-hidden">
        {/* Decorative blur effect */}
        <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        
        <div className="relative z-10">
          <div className="text-xs opacity-80 mb-1">Average monthly</div>
          <div className="text-lg font-bold mb-2 tabular-nums">Revenue</div>
          <div className="text-2xl font-bold tabular-nums">$18,552</div>
          
          {/* Additional Metrics */}
          <div className="flex gap-4 mt-2 text-xs">
            <div>
              <span className="opacity-80">Leads</span>
              <div className="font-bold tabular-nums">
                373 <span className="opacity-60">97/276</span>
              </div>
            </div>
            
            <div>
              <span className="opacity-80">Win/lose</span>
              <div className="font-bold tabular-nums">
                16% <span className="opacity-60">51/318</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="flex-1 flex items-end justify-between gap-3 px-2 min-h-[100px]">
        {barData.map((bar, index) => (
          <div key={index} className="flex flex-col items-center flex-1 group">
            {/* Hover Value Label */}
            <div className="mb-2 text-[10px] font-bold text-text-primary dark:text-text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity tabular-nums">
              ${bar.value.toLocaleString()}
            </div>
            
            {/* Bar Element */}
            <div 
              style={{ height: `${bar.height}%` }}
              className={clsx(
                "w-full rounded-xl transition-all duration-500 ease-ios cursor-pointer min-h-[24px]",
                bar.color,
                bar.highlight && "shadow-pink-glow hover:shadow-lg"
              )}
            />
            
            {/* Month Label */}
            <div className="mt-2 text-[10px] text-text-tertiary dark:text-text-tertiary-dark font-medium">
              {bar.month}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformValueChart;
