import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import MetricCard from './components/metrics/MetricCard';
import RevenueHero from './components/metrics/RevenueHero';
import DataTable from './components/data/DataTable';
import RevenueBarChart from './components/charts/RevenueBarChart';
import PlatformChart from './components/charts/PlatformChart';
import SalesDynamicChart from './components/charts/SalesDynamicChart';
import ToastContainer from './components/ui/ToastContainer';
import UserStatsRow from './components/metrics/UserStatsRow';
import { Share2, Download, Upload, ChevronDown, Plus } from 'lucide-react';
import { useDashboard } from './context/DashboardContext';
import PlatformValueChart from './components/charts/PlatformValueChart';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { isLoading, dispatch, dateRange, showToast } = useDashboard();

  const getRangeLabel = (range: string) => {
    switch(range) {
      case '7d': return 'Last 7 Days';
      case '30d': return 'Last 30 Days';
      case '90d': return 'Last 3 Months';
      case 'all': return 'All Time';
      default: return 'Sep 1 - Nov 30, 2023';
    }
  };

  const handleAction = (action: string) => {
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
        
        <main className="flex-1 overflow-y-auto custom-scrollbar px-4 md:px-6 lg:px-8 py-4 md:py-6">
          {/* Team Avatars Row */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <button className="w-8 h-8 rounded-full border-2 border-dashed border-border-subtle dark:border-border-subtle-dark flex items-center justify-center text-text-tertiary dark:text-text-tertiary-dark hover:border-accent-pink hover:text-accent-pink transition-colors">
              <Plus size={14} />
            </button>
            <div className="flex items-center gap-2">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-bg-elevated-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 hover:shadow-card-hover transition-all cursor-pointer group">
                  <img src={member.avatar} alt={member.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark hidden sm:inline">{member.name}</span>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-xs shadow-sm">
                C
              </div>
            </div>
          </div>

          {/* Title & Actions Bar */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 animate-fade-in" style={{ animationDelay: '50ms' }}>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-text-primary-dark">
              New report
            </h1>
            
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {/* Timeframe Toggle */}
              <div className="flex items-center gap-2 bg-white dark:bg-bg-elevated-dark rounded-full px-3 py-1.5 shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 cursor-pointer hover:shadow-card-hover transition-all">
                <div className="w-8 h-4 rounded-full bg-text-primary dark:bg-white relative">
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white dark:bg-black rounded-full transition-transform" />
                </div>
                <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark">Timeframe</span>
              </div>
              
              {/* Date Range Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 bg-white dark:bg-bg-elevated-dark rounded-full px-4 py-1.5 shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 text-sm font-medium hover:shadow-card-hover transition-all text-text-primary dark:text-text-primary-dark">
                  {isLoading ? 'Loading...' : getRangeLabel(dateRange)}
                  <ChevronDown size={14} className="text-text-tertiary" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-bg-elevated-dark rounded-2xl shadow-hover border border-border-subtle/50 dark:border-border-subtle-dark/50 py-2 hidden group-hover:block z-50 animate-scale-in">
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

              <div className="hidden sm:block h-6 w-px bg-border-subtle dark:bg-border-subtle-dark" />

              {/* Action Buttons */}
              <div className="flex gap-1.5">
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
          <div className="space-y-4 max-w-[1600px]">
            {/* Row 1: Revenue Hero & Metrics */}
            <div className="flex flex-col xl:flex-row gap-4">
              {/* Left: Revenue Hero */}
              <div className="xl:w-[340px] xl:min-w-[340px]">
                 <RevenueHero />
              </div>

              {/* Right: Metric Cards Grid */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                 {isLoading ? (
                   Array.from({ length: 5 }).map((_, i) => (
                     <div key={i} className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-3xl p-6 shadow-card animate-pulse h-32" />
                   ))
                 ) : (
                   <>
                     {/* Top Sales */}
                     <MetricCard 
                        title="Top sales" 
                        value="72" 
                        subValue="Mikasa"
                        avatar="https://i.pravatar.cc/100?img=5"
                        delay={100} 
                     />

                     {/* Best Deal */}
                     <MetricCard 
                        title="Best deal" 
                        value="42300" 
                        subValue="Rolf Inc."
                        prefix="$"
                        isDark={true}
                        delay={150} 
                     />

                     {/* Deals */}
                     <MetricCard 
                        title="Deals" 
                        value="256" 
                        trend={{ value: 5, isPositive: false }}
                        variant="pill"
                        delay={200} 
                     />

                     {/* Value */}
                     <MetricCard 
                        title="Value" 
                        value="528000" 
                        prefix="$"
                        trend={{ value: 7.9, isPositive: true }}
                        variant="pill-highlight"
                        formatCompact={true}
                        delay={250} 
                     />

                     {/* Win Rate */}
                     <MetricCard 
                        title="Win rate" 
                        value="44" 
                        suffix="%"
                        trend={{ value: 1.2, isPositive: true }}
                        variant="pill"
                        delay={300} 
                     />
                   </>
                 )}
              </div>
            </div>

            {/* Row 2: User Stats */}
            <UserStatsRow />

            {/* Row 3: Charts & Tables */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
               {/* Left Column (2/3) */}
               <div className="xl:col-span-2 space-y-4">
                  {/* Platform Stats + Bar Chart */}
                  <RevenueBarChart />
                  
                  {/* Data Table + Platform Value */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <PlatformValueChart />
                    <DataTable />
                  </div>
               </div>

               {/* Right Column (1/3) */}
               <div className="flex flex-col gap-4">
                  <PlatformChart />
                  <SalesDynamicChart />
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
