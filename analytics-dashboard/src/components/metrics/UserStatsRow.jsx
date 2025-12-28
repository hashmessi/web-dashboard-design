/**
 * UserStatsRow Component
 * 
 * Pixel-perfect implementation matching reference design
 * Shows user performance summary with achievements
 */

import { useDashboard } from '../../context/DashboardContext';

const UserStatsRow = () => {
  const { isLoading } = useDashboard();

  if (isLoading) {
    return (
      <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-4 shadow-card h-16 animate-pulse" />
    );
  }

  // User data matching reference exactly
  const users = [
    { avatar: 'https://i.pravatar.cc/100?img=11', revenue: '$209,633', percent: '39.63%' },
    { avatar: 'https://i.pravatar.cc/100?img=5', revenue: '$156,841', percent: '29.65%' },
    { avatar: 'https://i.pravatar.cc/100?img=3', revenue: '$117,115', percent: '22.14%' },
  ];

  // Achievement badges
  const badges = [
    { label: 'Top sales', emoji: '🔥' },
    { label: 'Sales streak', emoji: '🔥' },
    { label: 'Top review', emoji: '👍' },
  ];

  return (
    <div 
      className="bg-white dark:bg-bg-elevated-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-card hover:shadow-hover transition-all duration-300 ease-ios border border-border-subtle/30 dark:border-border-subtle-dark/30 animate-fade-in" 
      style={{ animationDelay: '150ms' }}
    >
      {/* Top Section: User Revenue + Fire Metric + Details */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        
        {/* User Revenue List */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {users.map((user, index) => (
            <div key={index} className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
              <img 
                src={user.avatar} 
                alt={`User ${index + 1}`}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white dark:border-gray-700 shadow-sm object-cover group-hover:scale-110 transition-transform flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-text-primary dark:text-text-primary-dark tabular-nums whitespace-nowrap">
                  {user.revenue}
                </span>
                <span className="text-[9px] sm:text-[10px] text-text-tertiary dark:text-text-tertiary-dark tabular-nums">
                  {user.percent}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metric & Action */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Fire Metric */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-[10px] sm:text-xs">🔥</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-text-primary dark:text-text-primary-dark tabular-nums whitespace-nowrap">
              $45,386
            </span>
            <span className="text-[10px] sm:text-xs text-accent-success font-semibold tabular-nums">
              8.58%
            </span>
          </div>
          
          {/* Details Button */}
          <button className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] sm:text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap">
            Details
          </button>
        </div>
      </div>

      {/* Bottom Section: Achievement Badges - integrated in same card */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pt-3 border-t border-border-subtle/20 dark:border-border-subtle-dark/20">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-white/5 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            <span className="text-[10px] sm:text-xs font-medium text-text-primary dark:text-text-primary-dark">
              {badge.label}
            </span>
            <span className="text-[10px] sm:text-xs">{badge.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatsRow;
