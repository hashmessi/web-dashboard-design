/**
 * DataTable Component
 * 
 * Displays user performance data in a tabular format with:
 * - Tab navigation for different metrics (Sales/Revenue/Leads/KPI/W/L)
 * - User rows with avatars, revenue, and performance indicators
 * - Interactive badges and hover effects
 * - Delete action for specific rows
 * 
 * @component
 */

import { ChevronRight, X } from 'lucide-react';
import clsx from 'clsx';
import { useDashboard } from '../../context/DashboardContext';

const DataTable = () => {
  const { isLoading } = useDashboard();

  // User performance data matching reference design
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
      wl: { wins: 21, total: 33 },
      hasDelete: true // Shows delete button on hover
    },
  ];

  // Tab navigation options
  const tabs = ['Sales', 'Revenue', 'Leads', 'KPI', 'W/L'];

  // Loading state
  if (isLoading) {
    return (
      <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-6 shadow-card h-[280px] flex items-center justify-center animate-pulse">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 rounded-full border-2 border-accent-pink border-t-transparent animate-spin" />
          <span className="text-text-tertiary dark:text-text-tertiary-dark text-xs">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-ios animate-fade-in border border-border-subtle/30 dark:border-border-subtle-dark/30" 
      style={{ animationDelay: '400ms' }}
    >
      {/* Tab Navigation Header */}
      <div className="flex items-center gap-4 mb-4 pb-2 border-b border-border-subtle/20 dark:border-border-subtle-dark/20">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={clsx(
              "text-xs font-medium transition-colors pb-1",
              index === 0 
                ? "text-text-primary dark:text-text-primary-dark border-b-2 border-accent-pink" 
                : "text-text-tertiary dark:text-text-tertiary-dark hover:text-text-primary dark:hover:text-text-primary-dark"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* User Data Rows */}
      <div className="space-y-3">
        {users.map((user, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group -mx-2"
          >
            {/* User Avatar & Name */}
            <div className="flex items-center gap-2.5 min-w-[100px]">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700 shadow-sm object-cover" 
              />
              <span className="font-medium text-sm text-text-primary dark:text-text-primary-dark truncate">
                {user.name}
              </span>
            </div>

            {/* Revenue */}
            <div className="flex-1 text-sm font-semibold text-text-primary dark:text-text-primary-dark tabular-nums">
              ${user.revenue.toLocaleString()}
            </div>

            {/* Sales Count Badge */}
            <div className={clsx(
              "min-w-[32px] h-6 rounded-lg flex items-center justify-center text-[10px] font-bold px-2",
              user.salesBg
            )}>
              {user.sales}
            </div>

            {/* Leads Count */}
            <div className="w-10 text-sm text-text-primary dark:text-text-primary-dark tabular-nums text-center">
              {user.leads}
            </div>

            {/* KPI Score */}
            <div className="w-10 text-sm text-text-secondary dark:text-text-secondary-dark tabular-nums text-center">
              {user.kpi}
            </div>

            {/* Win Rate Percentage */}
            <div className="w-12 text-sm text-text-secondary dark:text-text-secondary-dark tabular-nums text-center">
              {user.winRate}%
            </div>

            {/* Win/Loss Circular Badges */}
            <div className="flex gap-1.5">
              {/* Wins Badge */}
              <div className="w-6 h-6 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-[9px] font-bold tabular-nums">
                {user.wl.wins}
              </div>
              
              {/* Total Badge */}
              <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center text-[9px] font-bold tabular-nums">
                {user.wl.total}
              </div>
            </div>

            {/* Action Buttons (Delete or Expand) */}
            {user.hasDelete ? (
              <button 
                className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Delete user"
              >
                <X size={14} />
              </button>
            ) : (
              <ChevronRight 
                size={14} 
                className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
