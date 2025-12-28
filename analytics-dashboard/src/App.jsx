import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import StatGrid from './components/metrics/StatGrid';
import MetricCard from './components/metrics/MetricCard';
import RevenueHero from './components/metrics/RevenueHero';
import UserStatsRow from './components/metrics/UserStatsRow';
import UserAvatarRow from './components/metrics/UserAvatarRow';
import RevenueBarChart from './components/charts/RevenueBarChart';
import PlatformChart from './components/charts/PlatformChart';
import PlatformValueChart from './components/charts/PlatformValueChart';
import SalesDynamicChart from './components/charts/SalesDynamicChart';
import DataTable from './components/data/DataTable';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  return (
    <div className="flex h-screen bg-bg-primary dark:bg-bg-primary-dark overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-3">
          <div className="max-w-[1600px] mx-auto space-y-2">
            
            {/* User Avatar Row */}
            <UserAvatarRow />
            
            {/* Top Metrics Row */}
            <StatGrid>
              <RevenueHero />
              <MetricCard 
                title="Top sales" 
                value={72}
                subValue="Mikasa"
                avatar="https://i.pravatar.cc/100?img=5"
              />
              <MetricCard 
                title="Best deal" 
                value={42300}
                prefix="$"
                subValue="Rolf Inc."
                isDark={true}
              />
              <MetricCard 
                title="Deals" 
                value={9.5}
                trend={{ value: 5, isPositive: true }}
                variant="pill"
              />
              <MetricCard 
                title="Value" 
                value={0.0}
                suffix="M"
                trend={{ value: 7.9, isPositive: true }}
                variant="pill"
              />
              <MetricCard 
                title="Win rate" 
                value={6.12}
                suffix="%"
                trend={{ value: 1.2, isPositive: true }}
                variant="pill"
              />
            </StatGrid>

            {/* Middle Row: Charts and Table */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 min-h-[300px]">
              <div className="lg:col-span-2 h-full">
                <RevenueBarChart />
              </div>
              <div className="lg:col-span-1 h-full">
                <DataTable />
              </div>
              <div className="lg:col-span-1 h-full">
                <PlatformChart />
              </div>
            </div>

            {/* Bottom Row: Platform Value + Sales Dynamic */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-[320px]">
              <div className="h-full">
                <PlatformValueChart />
              </div>
              <div className="h-full flex flex-col gap-2">
                <div className="flex-1">
                  <SalesDynamicChart />
                </div>
                <UserStatsRow />
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
