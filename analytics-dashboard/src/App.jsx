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
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-5">
          <div className="max-w-[1800px] mx-auto space-y-3 sm:space-y-4">
            
            {/* User Avatar Row - Hidden on mobile */}
            <div className="hidden sm:block">
              <UserAvatarRow />
            </div>
            
            {/* Top Metrics Row - Revenue gets more space, all cards in one row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 auto-rows-fr">
              {/* Revenue takes 2 columns on larger screens */}
              <div className="col-span-2">
                <RevenueHero />
              </div>
              {/* Other 5 cards take 1 column each = 5 remaining columns */}
              <div className="col-span-1">
                <MetricCard 
                  title="Top sales" 
                  value={72}
                  subValue="Mikasa"
                  avatar="https://i.pravatar.cc/100?img=5"
                />
              </div>
              <div className="col-span-1">
                <MetricCard 
                  title="Best deal" 
                  value={42300}
                  prefix="$"
                  subValue="Rolf Inc."
                  isDark={true}
                />
              </div>
              <div className="col-span-1">
                <MetricCard 
                  title="Deals" 
                  value={9.5}
                  trend={{ value: 5, isPositive: true }}
                  variant="pill"
                />
              </div>
              <div className="col-span-1">
                <MetricCard 
                  title="Value" 
                  value={0.0}
                  suffix="M"
                  trend={{ value: 7.9, isPositive: true }}
                  variant="pill"
                />
              </div>
              <div className="col-span-1">
                <MetricCard 
                  title="Win rate" 
                  value={6.12}
                  suffix="%"
                  trend={{ value: 1.2, isPositive: true }}
                  variant="pill"
                />
              </div>
            </div>

            {/* Middle Row: Charts and Table - Responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr">
              <div className="md:col-span-2 xl:col-span-2">
                <RevenueBarChart />
              </div>
              <div className="md:col-span-1 xl:col-span-1">
                <DataTable />
              </div>
              <div className="md:col-span-1 xl:col-span-1">
                <PlatformChart />
              </div>
            </div>

            {/* Bottom Row: Platform Value + Sales Dynamic - Responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 auto-rows-fr">
              <div>
                <PlatformValueChart />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex-1 min-h-[200px]">
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
