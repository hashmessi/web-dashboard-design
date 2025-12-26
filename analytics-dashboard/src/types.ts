export interface Metric {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trend?: {
    value: number;
    isPositive: boolean;
    label: string;
  };
  subValue?: string;
  avatar?: string;
  dark?: boolean;
  pill?: boolean;
  formatCompact?: boolean;
}

export interface UserRow {
  id: string;
  name: string;
  avatar: string;
  revenue: number;
  leads: number;
  kpi: number; // 0-1
  winRate: number; // 0-100
  status: 'active' | 'offline' | 'busy';
}

export interface ChartDataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
}

export interface PlatformStat {
  name: string;
  revenue: number;
  growth: number; // percentage
  color: string;
  icon: string;
}

export interface DashboardState {
  dateRange: string; // '7d' | '30d' | '90d' | 'all'
  searchQuery: string;
  isLoading: boolean;
  metrics: Metric[];
  users: UserRow[];
  revenueHistory: ChartDataPoint[];
  platformStats: PlatformStat[];
}
