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
    
       setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      
        
        
        
          {/* Team Avatars Row */}
          
            
              
            
            
              {teamMembers.map((member, i) => (
                
                  
                  {member.name}
                
              ))}
              
                C
              
            
          

          {/* Title & Actions Bar */}
          
            
              New report
            
            
            
              {/* Timeframe Toggle */}
              
                
                  
                
                Timeframe
              
              
              {/* Date Range Dropdown */}
              
                
                  {isLoading ? 'Loading...' : getRangeLabel(dateRange)}
                  
                
                
                   {['7d', '30d', '90d', 'all'].map(range => (
                      dispatch({ type: 'SET_DATE_RANGE', payload: range })}
                       className="w-full text-left px-4 py-2.5 text-sm text-text-primary dark:text-text-primary-dark hover:bg-bg-primary/50 dark:hover:bg-white/5 transition-colors"
                     >
                       {getRangeLabel(range)}
                     
                   ))}
                
              

              

              {/* Action Buttons */}
              
                  handleAction('Share')} aria-label="Share report" className="p-2 bg-white dark:bg-bg-elevated-dark text-text-secondary dark:text-text-secondary-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 hover:text-accent-pink hover:shadow-card-hover transition-all">
                   
                 
                  handleAction('Download')} aria-label="Download report" className="p-2 bg-white dark:bg-bg-elevated-dark text-text-secondary dark:text-text-secondary-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 hover:text-accent-pink hover:shadow-card-hover transition-all">
                   
                 
                  handleAction('Upload')} aria-label="Upload report" className="p-2 bg-white dark:bg-bg-elevated-dark text-text-secondary dark:text-text-secondary-dark rounded-full shadow-sm border border-border-subtle/50 dark:border-border-subtle-dark/50 hover:text-accent-pink hover:shadow-card-hover transition-all">
                   
                 
              
            
          

          {/* Core Dashboard Content */}
          
            {/* Row 1: Revenue Hero & Metrics */}
            
              {/* Left: Revenue Hero */}
              
                 
              

              {/* Right: Metric Cards Grid */}
              
                 {isLoading ? (
                   Array.from({ length: 5 }).map((_, i) => (
                     
                   ))
                 ) : (
                   <>
                     {/* Top Sales */}
                     

                     {/* Best Deal */}
                     

                     {/* Deals */}
                     

                     {/* Value */}
                     

                     {/* Win Rate */}
                     
                   
                 )}
              
            

            {/* Row 2: User Stats */}
            

            {/* Row 3: Charts & Tables */}
            
               {/* Left Column (2/3) */}
               
                  {/* Platform Stats + Bar Chart */}
                  
                  
                  {/* Data Table + Platform Value */}
                  
                    
                    
                  
               

               {/* Right Column (1/3) */}
               
                  
                  
               
            
          
        
        
        
      
    
  );
}

export default App;

