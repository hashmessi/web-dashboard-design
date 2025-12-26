/**
 * UserStatsRow Component
 * 
 * Displays user performance summary with:
 * - Top 3 user avatars with revenue and percentage
 * - Performance metrics (revenue, growth percentage)
 * - Achievement badges (Top sales, Sales streak, Top review)
 * - Details action button
 * 
 * @component
 */

import { useDashboard } from '../../context/DashboardContext';

/**
 * User stats interface
 */
interface UserStats {
  avatar: string;
  revenue: string;
  percent: string;
}

/**
 * Achievement badge interface
 */
interface Badge {
  label: string;
  emoji: string;
}

const UserStatsRow = () => {
  const { isLoading } = useDashboard();

  // Loading state
  if (isLoading) {
    return (
      <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-4 shadow-card h-16 animate-pulse" />
    );
  }

  // Top 3 users by revenue
  const users: UserStats[] = [
    { avatar: 'https://i.pravatar.cc/100?img=11', revenue: '$209,633', percent: '39.63%' },
    { avatar: 'https://i.pravatar.cc/100?img=5', revenue: '$156,841', percent: '29.65%' },
    { avatar: 'https://i.pravatar.cc/100?img=3', revenue: '$117,115', percent: '22.14%' },
  ];

  // Achievement badges
  const badges: Badge[] = [
    { label: 'Top sales', emoji: '🔥' },
    { label: 'Sales streak', emoji: '🔥' },
    { label: 'Top review', emoji: '👍' },
  ];

  return (
    <div 
      className="flex flex-col lg:flex-row gap-3 animate-fade-in" 
      style={{ animationDelay: '150ms' }}
    >
      {/* Main User Stats Card */}
      <div className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-4 shadow-card hover:shadow-hover transition-all duration-300 ease-ios flex-1 border border-border-subtle/30 dark:border-border-subtle-dark/30">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          
          {/* User Revenue List */}
          <div className="flex items-center gap-4 md:gap-6">
            {users.map((user, index) => (
              <div key={index} className="flex items-center gap-2 group cursor-pointer">
                {/* User Avatar */}
                <img 
                  src={user.avatar} 
                  alt={`User ${index + 1}`}
                  className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-700 shadow-sm object-cover group-hover:scale-110 transition-transform"
                />
                
                {/* Revenue and Percentage */}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-primary dark:text-text-primary-dark tabular-nums">
                    {user.revenue}
                  </span>
                  <span className="text-[10px] text-text-tertiary dark:text-text-tertiary-dark tabular-nums">
                    {user.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Performance Metrics and Action */}
          <div className="flex items-center gap-4">
            {/* Performance Metric with Fire Icon */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-sm">
                <span className="text-xs">🔥</span>
              </div>
              
              <span className="text-sm font-semibold text-text-primary dark:text-text-primary-dark tabular-nums">
                $45,386
              </span>
              
              <span className="text-xs text-accent-success font-medium tabular-nums">
                8.58%
              </span>
            </div>
            
            {/* Details Button */}
            <button className="px-4 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm">
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-bg-elevated-dark rounded-full px-3 py-2 shadow-card hover:shadow-hover transition-all duration-300 ease-ios flex items-center gap-1.5 cursor-pointer border border-border-subtle/30 dark:border-border-subtle-dark/30 hover:border-accent-pink/30"
          >
            <span className="text-xs font-medium text-text-primary dark:text-text-primary-dark">
              {badge.label}
            </span>
            <span className="text-xs">{badge.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatsRow;
