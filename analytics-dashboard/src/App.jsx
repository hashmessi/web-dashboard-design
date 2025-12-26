import { useState } from 'react';
import Sidebar from './components/layout/Sidebar.jsx';
import Header from './components/layout/Header.jsx';
import MetricCard from './components/metrics/MetricCard.jsx';
import RevenueHero from './components/metrics/RevenueHero.jsx';
import DataTable from './components/data/DataTable.jsx';
import RevenueBarChart from './components/charts/RevenueBarChart.jsx';
import PlatformChart from './components/charts/PlatformChart.jsx';
import SalesDynamicChart from './components/charts/SalesDynamicChart.jsx';
import ToastContainer from './components/ui/ToastContainer.jsx';
import UserStatsRow from './components/metrics/UserStatsRow.jsx';
import { Share2, Download, Upload, ChevronDown, Plus } from 'lucide-react';
import { useDashboard } from './context/DashboardContext.jsx';
import PlatformValueChart from './components/charts/PlatformValueChart.jsx';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { isLoading, dispatch, dateRange, showToast } = useDashboard();

  const getRangeLabel = (range) => {
    switch(range) {
      case '7d': return 'Last 7 Days';
      case '30d': return 'Last 30 Days';
      case '90d': return 'Last 3 Months';
      case 'all': return 'All Time';
      default: return 'Sep 1 - Nov 30, 2023';
    }
  };

  const handleAction = (action) => {
    showToast(`${action} action triggered successfully`, 'success');
  };

  // Team members for avatar row
  const teamMembers = [
    { name: 'Armin A.', avatar: 'https://i.pravatar.cc/100?img=11' },
    { name: 'Eren Y.', avatar: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Mikasa A.', avatar: 'https://i.pravatar.cc/100?img=5' },
  ];

  return (
    <div className="flex h-screen bg-bg-primary dark:bg-bg-primary-dark overflow-hidden font-sans text-text-primary dark:text-text-primary-dark transition-colors duration-300">
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        
        <main className="flex-1 overflow-y-auto px-6 py-5 bg-bg-primary dark:bg-bg-primary-dark">
          <div className="max-w-[1800px] mx-auto space-y-5">
            {/* Team Avatars Row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center -space-x-2">
                {teamMembers.map((member, i) => (
                  <img 
                    key={i}
                    src={member.avatar} 
                    alt={member.name}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-bg-primary-dark object-cover hover:scale-110 transition-transform cursor-pointer"
                    title={member.name}
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-bg-primary-dark flex items-center justify-center text-xs font-semibold text-text-secondary dark:text-text-secondary-dark hover:scale-110 transition-transform cursor-pointer">
                  C
                </div>
              </div>
            </div>

            {/* Title & Actions Bar */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-accent-pink text-white rounded-full hover:opacity-90 transition-opacity shadow-sm font-medium text-sm">
                <Plus size={16} />
                New report
              </button>
              
              <div className="flex items-center gap-3 flex-wrap">
                {/* Timeframe Toggle */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-bg-elevated-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50">
                  <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
                  Timeframe
                </div>
                
                {/* Date Range Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-bg-elevated-dark text-text-primary dark:text-text-primary-dark rounded-full shadow-sm hover:shadow-card-hover transition-all border border-border-subtle/50 dark:border-border-subtle-dark/50 text-sm font-medium">
                    {isLoading ? 'Loading...' : getRangeLabel(dateRange)}
                    <ChevronDown size={14} />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-bg-elevated-dark rounded-xl shadow-lg border border-border-subtle/50 dark:border-border-subtle-dark/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    {['7d', '30d', '90d', 'all'].map(range => (
                      <button 
                        key={range}
                        onClick={() => dispatch({ type: 'SET_DATE_RANGE', payload: range })}
                        className="w-full text-left px-4 py-2.5 text-sm text-text-primary dark:text-text-primary-dark hover:bg-bg-primary/50 dark:hover:bg-white/5 transition-colors"
                      >
                        {getRangeLabel(range)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-px h-6 bg-border-subtle dark:bg-border-subtle-dark" />

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button onClick={() => handleAction('Share')} aria-label="Share report" className="p-2 bg-white dark:bg-bg-elevated-dark text-text-secondary dark:text-text-secondary-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 hover:text-accent-pink hover:shadow-card-hover transition-all">
                    <Share2 size={16} />
                  </button>
                  <button onClick={() => handleAction('Download')} aria-label="Download report" className="p-2 bg-white dark:bg-bg-elevated-dark text-text-secondary dark:text-text-secondary-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 hover:text-accent-pink hover:shadow-card-hover transition-all">
                    <Download size={16} />
                  </button>
                  <button onClick={() => handleAction('Upload')} aria-label="Upload report" className="p-2 bg-white dark:bg-bg-elevated-dark text-text-secondary dark:text-text-secondary-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 hover:text-accent-pink hover:shadow-card-hover transition-all">
                    <Upload size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Core Dashboard Content */}
            <div className="space-y-5">
              {/* Row 1: Revenue Hero & Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Left: Revenue Hero */}
                <div className="lg:col-span-1">
                  <RevenueHero />
                </div>

                {/* Right: Metric Cards Grid */}
                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {isLoading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl h-32 animate-pulse" />
                    ))
                  ) : (
                    <>
                      {/* Top Sales */}
                      <MetricCard title="Top sales" value={72} icon="trophy" trend={{ value: 12, isPositive: true }} />

                      {/* Best Deal */}
                      <MetricCard title="Best deal" value="$42,300" icon="dollar" trend={{ value: 8, isPositive: true }} />

                      {/* Deals */}
                      <MetricCard title="Deals" value={256} icon="briefcase" trend={{ value: 5, isPositive: false }} />

                      {/* Value */}
                      <MetricCard title="Value" value="$1.2M" icon="trending" trend={{ value: 15, isPositive: true }} />

                      {/* Win Rate */}
                      <MetricCard title="Win rate" value="68%" icon="target" trend={{ value: 3, isPositive: true }} />
                    </>
                  )}
                </div>
              </div>

              {/* Row 2: User Stats */}
              <UserStatsRow />

              {/* Row 3: Charts & Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Left Column (2/3) */}
                <div className="lg:col-span-2 space-y-5">
                  {/* Platform Stats + Bar Chart */}
                  <RevenueBarChart />
                  
                  {/* Data Table + Platform Value */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <DataTable />
                    <PlatformValueChart />
                  </div>
                </div>

                {/* Right Column (1/3) */}
                <div className="space-y-5">
                  <PlatformChart />
                  <SalesDynamicChart />
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
