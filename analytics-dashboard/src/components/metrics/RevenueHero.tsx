import { ArrowDownRight } from 'lucide-react';
import { useAnimatedNumber } from '../../hooks/useAnimatedNumber';
import { useDashboard } from '../../context/DashboardContext';

const RevenueHero = () => {
  const { isLoading } = useDashboard();
  
  const revenue = useAnimatedNumber(528976.82, 2000);

  if (isLoading) return <div className="h-full bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl animate-pulse min-h-[200px]" />;

  // Format revenue with proper decimal
  const formattedRevenue = revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-ios relative overflow-hidden h-full animate-fade-in border border-border-subtle/30 dark:border-border-subtle-dark/30">
      {/* Background Gradient Blur */}
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-accent-pink/5 dark:bg-accent-pink/10 rounded-full blur-3xl transition-colors duration-500" />

      <h3 className="text-xs font-medium text-text-tertiary dark:text-text-tertiary-dark uppercase tracking-wide mb-3 relative z-10">Revenue</h3>
      
      <div className="flex items-baseline gap-2 mb-1 relative z-10 flex-wrap">
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary dark:text-text-primary-dark tabular-nums">
          ${formattedRevenue}
        </span>
        
        <div className="flex items-center gap-1.5">
          <span className="bg-accent-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
            ↑ 7.9%
          </span>
          <span className="bg-accent-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm tabular-nums">
            $27,335.00
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-text-tertiary dark:text-text-tertiary-dark mb-4 relative z-10">
        <span>vs prev. $501,641.73</span>
        <span className="text-text-tertiary/50">•</span>
        <span>Jun 1 - Aug 31, 2023</span>
        <ArrowDownRight size={10} />
      </div>

      {/* Mini Bar Chart */}
      <div className="h-16 flex items-end gap-[3px] relative z-10">
        {[40, 65, 55, 80, 70, 90, 85, 100, 95, 80, 110, 100].map((h, i) => (
          <div 
            key={i} 
            style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
            className="flex-1 bg-gradient-to-t from-accent-pink/20 to-accent-pink/60 rounded-t hover:from-accent-pink/40 hover:to-accent-pink transition-all duration-300 cursor-pointer min-w-[4px]"
          />
        ))}
      </div>
    </div>
  );
};

export default RevenueHero;
