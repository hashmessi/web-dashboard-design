/**
 * DataTable Component - Compact responsive implementation
 * 
 * Displays user performance data in a compact, non-overflowing layout
 */

import clsx from 'clsx';
import { useDashboard } from '../../context/DashboardContext';

const DataTable = () => {
  const { isLoading } = useDashboard();

  // User data matching reference exactly
  const users = [
    { 
      name: 'Armin A.', 
      avatar: 'https://i.pravatar.cc/100?img=11', 
      revenue: 209633, 
      sales: 41,
      salesBg: 'bg-gray-900 dark:bg-white text-white dark:text-black',
      leads: 118, 
      kpi: 0.84, 
      winRate: 31,
      wl: { wins: 12, total: 29 }
    },
    { 
      name: 'Mikasa A.', 
      avatar: 'https://i.pravatar.cc/100?img=5', 
      revenue: 156841, 
      sales: '5k',
      salesBg: 'bg-accent-pink text-white',
      leads: 103, 
      kpi: 0.89, 
      winRate: 39,
      wl: { wins: 21, total: 33 }
    },
  ];

  // Tab navigation
  const tabs = ['Sales', 'Revenue', 'Leads', 'KPI', 'W/L'];

  if (isLoading) {
    return (
      <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-6 shadow-card h-[200px] animate-pulse" />
    );
  }

  return (
    <div 
      className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-3 shadow-card hover:shadow-hover transition-all duration-300 ease-ios animate-fade-in border border-border-subtle/30 dark:border-border-subtle-dark/30 h-full overflow-hidden" 
      style={{ animationDelay: '400ms' }}
    >
      {/* Tab Header */}
      <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border-subtle/20 dark:border-border-subtle-dark/20">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={clsx(
              "text-[10px] font-medium transition-colors pb-1",
              index === 0 
                ? "text-text-primary dark:text-text-primary-dark border-b-2 border-accent-pink" 
                : "text-text-tertiary dark:text-text-tertiary-dark hover:text-text-primary dark:hover:text-text-primary-dark"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* User Rows - Scrollable */}
      <div className="space-y-1.5 overflow-x-auto">
        {users.map((user, index) => (
          <div 
            key={index}
            className="flex items-center gap-1.5 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group min-w-max"
          >
            {/* Avatar */}
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-6 h-6 rounded-full border border-white dark:border-gray-700 shadow-sm object-cover flex-shrink-0" 
            />
            
            {/* Name */}
            <span className="font-medium text-[11px] text-text-primary dark:text-text-primary-dark w-[60px] truncate">
              {user.name}
            </span>

            {/* Revenue */}
            <span className="text-[11px] font-bold text-text-primary dark:text-text-primary-dark tabular-nums w-[70px]">
              ${user.revenue.toLocaleString()}
            </span>

            {/* Sales Badge */}
            <div className={clsx(
              "w-6 h-5 rounded flex items-center justify-center text-[9px] font-bold flex-shrink-0",
              user.salesBg
            )}>
              {user.sales}
            </div>

            {/* Leads */}
            <span className="text-[10px] text-text-secondary dark:text-text-secondary-dark tabular-nums w-6 text-center">
              {user.leads}
            </span>

            {/* KPI */}
            <span className="text-[10px] text-text-secondary dark:text-text-secondary-dark tabular-nums w-7 text-center">
              {user.kpi}
            </span>

            {/* Win Rate */}
            <span className="text-[10px] text-text-secondary dark:text-text-secondary-dark tabular-nums w-7 text-center">
              {user.winRate}%
            </span>

            {/* W/L Badges */}
            <div className="flex gap-0.5 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-[8px] font-bold tabular-nums">
                {user.wl.wins}
              </div>
              <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center text-[8px] font-bold tabular-nums">
                {user.wl.total}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
