/**
 * RevenueBarChart Component
 * 
 * Pixel-perfect platform revenue visualization
 * Platform list with bar chart section
 */

import { ChevronDown, Filter, BarChart2, List } from 'lucide-react';
import clsx from 'clsx';
import { useDashboard } from '../../context/DashboardContext';

// Platform brand icons
const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm7.934 5.519a10.196 10.196 0 012.256 6.328c-.328-.066-3.607-.733-6.912-.318-.072-.157-.139-.318-.214-.479-.195-.422-.405-.844-.627-1.253 3.65-1.492 5.17-3.596 5.497-4.278zM12 1.812c2.733 0 5.225 1.055 7.088 2.776-.271.625-1.649 2.585-5.12 3.903-1.601-2.94-3.377-5.35-3.647-5.715a10.2 10.2 0 011.679-.964zm-3.395.496c.257.352 2.002 2.767 3.62 5.644-4.572 1.215-8.606 1.196-9.053 1.187a10.236 10.236 0 015.433-6.831zM1.812 12c0-.074.003-.147.004-.221.44.008 5.152.065 10.028-1.385.279.543.543 1.095.781 1.648-.106.03-.213.063-.32.098-5.107 1.649-7.818 6.148-8.141 6.695A10.177 10.177 0 011.812 12zm10.188 10.188c-2.363 0-4.532-.809-6.262-2.158.256-.533 2.364-4.323 7.958-6.311l.065-.021c1.427 3.697 2.015 6.797 2.17 7.711a10.182 10.182 0 01-3.931.779zm5.754-2.023c-.106-.649-.648-3.609-1.986-7.252 3.122-.498 5.852.319 6.203.427a10.184 10.184 0 01-4.217 6.825z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

// Platform icon component
const PlatformIcon = ({ name }) => {
  const icons = {
    'Dribbble': { bg: 'bg-gradient-to-br from-pink-400 to-pink-600', icon: <DribbbleIcon /> },
    'Instagram': { bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400', icon: <InstagramIcon /> },
    'Behance': { bg: 'bg-blue-600', icon: <BehanceIcon /> },
    'Google': { bg: 'bg-white dark:bg-gray-100 border border-gray-200', icon: <GoogleIcon /> },
  };
  
  const { bg, icon } = icons[name] || { bg: 'bg-gray-400', icon: name[0] };
  
  return (
    <div className={clsx(
      "w-7 h-7 rounded-full flex items-center justify-center shadow-sm",
      bg,
      name === 'Google' ? 'text-gray-800' : 'text-white'
    )}>
      {icon}
    </div>
  );
};

// Floating icon for bar chart
const FloatingIcon = ({ type }) => {
  const icons = {
    'Be': <BehanceIcon />,
    'G': <GoogleIcon />,
    'IG': <InstagramIcon />,
  };
  
  return (
    <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-100 shadow-md flex items-center justify-center text-gray-700">
      {icons[type] || <span className="text-[9px] font-bold">{type}</span>}
    </div>
  );
};

const RevenueBarChart = () => {
  const { isLoading } = useDashboard();

  if (isLoading) {
    return <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-6 shadow-card h-[300px] animate-pulse" />;
  }

  // Platform data matching reference
  const platforms = [
    { name: 'Dribbble', revenue: 227459, growth: 43 },
    { name: 'Instagram', revenue: 142823, growth: 27 },
    { name: 'Behance', revenue: 89935, growth: 11 },
    { name: 'Google', revenue: 37028, growth: 7 },
  ];

  // Bar chart data
  const barData = [
    { height: 40, highlight: false },
    { height: 80, highlight: true, icon: 'Be' },
    { height: 60, highlight: false },
    { height: 55, highlight: false, icon: 'G' },
    { height: 50, highlight: false, icon: 'IG' },
  ];

  return (
    <div 
      className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-4 shadow-card hover:shadow-hover transition-all duration-300 ease-ios animate-fade-in border border-border-subtle/30 dark:border-border-subtle-dark/30 h-full" 
      style={{ animationDelay: '200ms' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-full">
        
        {/* Left: Platform List */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors text-text-secondary">
                <List size={14} />
              </button>
              <ChevronDown size={10} className="text-text-tertiary" />
            </div>
            <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 dark:bg-bg-primary-dark text-text-primary dark:text-text-primary-dark text-[10px] font-medium hover:bg-gray-100 transition-colors border border-border-subtle/30">
              Filters <Filter size={9} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-2">
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors -mx-2">
                <div className="flex items-center gap-2.5">
                  <PlatformIcon name={p.name} />
                  <span className="font-semibold text-sm text-text-primary dark:text-text-primary-dark">{p.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text-primary dark:text-text-primary-dark tabular-nums">${p.revenue.toLocaleString()}</span>
                  <span className="bg-gray-100 dark:bg-white/10 text-text-secondary dark:text-text-secondary-dark text-[9px] font-bold px-1.5 py-0.5 rounded tabular-nums">
                    {p.growth}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Bar Chart */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col h-full min-h-[200px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 hover:bg-white dark:hover:bg-white/10 rounded-lg transition-colors text-text-secondary">
                <BarChart2 size={14} />
              </button>
              <ChevronDown size={10} className="text-text-tertiary" />
            </div>
            <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white dark:bg-bg-elevated-dark shadow-sm text-text-primary dark:text-text-primary-dark text-[10px] font-medium hover:shadow-card-hover transition-all border border-border-subtle/30">
              Filters <Filter size={9} />
            </button>
          </div>

          {/* Bars */}
          <div className="flex-1 flex items-end justify-between gap-2 px-1 pb-2">
            {barData.map((bar, i) => (
              <div key={i} className="flex flex-col items-center justify-end h-full flex-1 group">
                {bar.icon && (
                  <div className="mb-1.5">
                    <FloatingIcon type={bar.icon} />
                  </div>
                )}
                <div 
                  style={{ height: `${bar.height}%` }} 
                  className={clsx(
                    "w-full rounded-xl transition-all duration-500 ease-out min-h-[16px] cursor-pointer",
                    bar.highlight 
                      ? "bg-accent-pink shadow-pink-glow hover:shadow-lg" 
                      : "bg-white dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 shadow-sm"
                  )}
                />
              </div>
            ))}
          </div>

          <div className="mt-2 pt-2 border-t border-border-subtle/20">
            <div className="text-[11px] font-semibold text-text-primary dark:text-text-primary-dark">Deals amount</div>
            <div className="text-[9px] text-text-tertiary flex items-center gap-0.5">
              by referrer category <ChevronDown size={8} className="inline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueBarChart;
