import type { DashboardState, UserRow } from '../types';

const MOCK_DELAY = 800;

export const mockData: DashboardState = {
  dateRange: '30d',
  searchQuery: '',
  isLoading: false,
  metrics: [
    { title: 'Top sales', value: 72, subValue: 'Mikasa', trend: { value: 2.5, isPositive: true, label: 'up' }, avatar: 'https://i.pravatar.cc/100?img=5' },
    { title: 'Best deal', value: 42300, prefix: '$', subValue: 'Rolf Inc.', dark: true },
    { title: 'Deals', value: 256, trend: { value: 5, isPositive: false, label: '' }, pill: true },
    { title: 'Value', value: 528000, prefix: '$', trend: { value: 7.9, isPositive: true, label: '' }, pill: true, formatCompact: true },
    { title: 'Win rate', value: 44, suffix: '%', trend: { value: 1.2, isPositive: true, label: '' }, pill: true },
  ],
  users: [
    { id: '1', name: 'Armin A.', avatar: 'https://i.pravatar.cc/100?img=11', revenue: 209633, leads: 118, kpi: 0.84, winRate: 74, status: 'active' },
    { id: '2', name: 'Mikasa A.', avatar: 'https://i.pravatar.cc/100?img=5', revenue: 156841, leads: 103, kpi: 0.89, winRate: 65, status: 'busy' },
    { id: '3', name: 'Eren Y.', avatar: 'https://i.pravatar.cc/100?img=3', revenue: 117115, leads: 84, kpi: 0.79, winRate: 50, status: 'offline' },
    { id: '4', name: 'Jean K.', avatar: 'https://i.pravatar.cc/100?img=8', revenue: 98200, leads: 72, kpi: 0.75, winRate: 45, status: 'active' },
  ],
  revenueHistory: [
    { label: 'Sep', value: 40 }, { label: '', value: 25 }, { label: '', value: 55 }, 
    { label: '', value: 45 }, { label: 'Oct', value: 75 }, { label: '', value: 35 }, 
    { label: '', value: 60 }, { label: '', value: 30 }, { label: 'Nov', value: 45 }, 
    { label: '', value: 50 }, { label: '', value: 70 }
  ],
  platformStats: [
    { name: 'Dribbble', revenue: 227459, growth: 43, color: 'from-pink-500 to-rose-500', icon: '🏀' },
    { name: 'Instagram', revenue: 142823, growth: 27, color: 'from-purple-500 to-indigo-500', icon: '📸' },
    { name: 'Behance', revenue: 89935, growth: 11, color: 'from-blue-500 to-cyan-500', icon: 'Be' },
    { name: 'Google', revenue: 37028, growth: 7, color: 'from-yellow-400 to-orange-500', icon: 'G' },
  ]
};

export const DashboardService = {
  fetchDashboardData: (dateRange: string = '30d'): Promise<DashboardState> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generate slightly different data based on date range to simulate interactivity
        const multiplier = dateRange === '7d' ? 0.25 : dateRange === '90d' ? 3 : 1;
        
        const dynamicData: DashboardState = {
            ...mockData,
            dateRange,
            metrics: mockData.metrics.map(m => ({
                ...m,
                value: typeof m.value === 'number' ? Math.round(m.value * multiplier) : m.value,
                trend: m.trend ? { ...m.trend, value: Math.round(m.trend.value * (Math.random() * 0.5 + 0.8) * 10) / 10 } : undefined
            })),
            revenueHistory: mockData.revenueHistory.map(h => ({
                ...h,
                value: Math.min(100, Math.max(10, h.value + (Math.random() * 20 - 10)))
            })),
            users: mockData.users.map(u => ({
                ...u,
                revenue: Math.round(u.revenue * multiplier),
                leads: Math.round(u.leads * multiplier)
            })),
            platformStats: mockData.platformStats.map(p => ({
                ...p,
                revenue: Math.round(p.revenue * multiplier),
                growth: Math.round(p.growth * (Math.random() * 0.5 + 0.8))
            }))
        };
        
        resolve(dynamicData);
      }, MOCK_DELAY);
    });
  },

  sortUsers: (users: UserRow[], key: keyof UserRow, direction: 'asc' | 'desc'): UserRow[] => {
    return [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }
};
