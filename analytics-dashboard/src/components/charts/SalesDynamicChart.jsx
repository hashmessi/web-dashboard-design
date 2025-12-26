import { ArrowUpRight } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

// Platform icons as small SVG components
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM6.545 9.85c.56 0 1.01-.13 1.36-.403.345-.272.53-.68.53-1.22 0-.3-.05-.553-.155-.76-.104-.204-.25-.37-.435-.48-.19-.11-.42-.19-.69-.24-.26-.044-.56-.066-.89-.066H3.025v3.18h3.52zm.187 5.86c.37 0 .7-.04 1.01-.114.31-.078.58-.198.81-.36.23-.16.41-.376.54-.647.13-.27.19-.6.19-1 0-.79-.23-1.36-.688-1.72-.46-.356-1.08-.534-1.86-.534H3.024v4.37h3.708zM21.37 16.23c-.38.404-.95.606-1.71.606-.55 0-1-.12-1.36-.362-.36-.24-.6-.56-.72-.96h5.34c.04-.3.06-.59.06-.86 0-.73-.12-1.38-.36-1.95-.24-.58-.57-1.07-.99-1.48-.42-.4-.92-.71-1.5-.93-.58-.22-1.21-.33-1.9-.33-.66 0-1.28.12-1.85.36-.58.24-1.08.58-1.5 1.01-.43.44-.77.96-1.01 1.57-.24.61-.36 1.28-.36 2.01 0 .75.12 1.43.37 2.04.24.61.58 1.13 1.01 1.56.43.43.95.76 1.55.99.6.23 1.26.35 1.98.35.92 0 1.73-.19 2.41-.56.68-.37 1.22-.93 1.61-1.68l-1.73-.64c-.1.23-.29.45-.56.66zm-1.79-5.04c.509 0 .928.14 1.26.42.33.28.54.68.63 1.19h-3.91c.1-.51.33-.9.68-1.19.35-.28.79-.42 1.34-.42zM17.13 4.15h5.34v1.4h-5.34v-1.4z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const SalesDynamicChart = () => {
  const { isLoading } = useDashboard();

  if (isLoading) return <div className="bg-bg-elevated dark:bg-bg-elevated-dark rounded-2xl p-6 shadow-card h-full animate-pulse min-h-[240px]" />;

  // SVG path for the line chart
  const mainPath = "M 0 75 C 30 70, 50 80, 80 72 S 120 55, 150 50 S 200 60, 230 55 S 280 35, 310 30 S 340 40, 360 35";
  const comparisonPath = "M 0 85 Q 60 78 120 80 T 240 70 T 360 60";

  // Platform icon positions on chart
  const iconPositions = [
    { x: 100, y: 65, Icon: InstagramIcon },
    { x: 200, y: 50, Icon: BehanceIcon },
    { x: 300, y: 32, Icon: GoogleIcon },
  ];

  return (
    <div className="bg-white dark:bg-bg-elevated-dark rounded-2xl p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-ios relative overflow-hidden h-full flex flex-col animate-fade-in border border-border-subtle/30 dark:border-border-subtle-dark/30" style={{ animationDelay: '300ms' }}>
      {/* Header */}
      <div className="flex justify-between items-start mb-3 relative z-10">
         <div>
            <h4 className="font-semibold text-text-primary dark:text-text-primary-dark text-sm mb-1">Sales dynamic</h4>
            <div className="flex gap-3 text-[10px] text-text-tertiary dark:text-text-tertiary-dark tabular-nums">
               {['W 1', 'W 3', 'W 5', 'W 7', 'W 9', 'W 11'].map(w => (
                 <span key={w} className="hover:text-text-primary dark:hover:text-text-primary-dark cursor-pointer transition-colors">{w}</span>
               ))}
            </div>
         </div>
         <button className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
           <ArrowUpRight size={16} className="text-text-tertiary dark:text-text-tertiary-dark" />
         </button>
      </div>

      {/* Chart */}
      <div className="flex-1 flex items-center justify-center relative min-h-[100px]">
         <svg viewBox="0 0 360 100" className="w-full h-full max-h-28" preserveAspectRatio="none">
            <defs>
               <linearGradient id="sales-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
               </linearGradient>
            </defs>
            {/* Area fill */}
            <path 
              d={`${mainPath} L 360 100 L 0 100 Z`} 
              fill="url(#sales-gradient)" 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: '0.4s' }} 
            />
            {/* Comparison dashed line */}
            <path 
              d={comparisonPath} 
              fill="none" 
              stroke="#EF4444" 
              strokeWidth="1.5" 
              strokeDasharray="4 4" 
              className="opacity-40" 
            />
            {/* Main line */}
            <path 
              d={mainPath} 
              fill="none" 
              stroke="#EC4899" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              className="animate-slide-in-right"
            />
            
            {/* Platform icons on data points */}
            {iconPositions.map((pos, i) => (
              <g key={i}>
                <circle 
                  cx={pos.x} 
                  cy={pos.y} 
                  r="8" 
                  fill="white" 
                  className="dark:fill-gray-100 animate-scale-in" 
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }} 
                />
                <foreignObject x={pos.x - 6} y={pos.y - 6} width="12" height="12">
                  <div className="flex items-center justify-center w-full h-full text-gray-700">
                    <pos.Icon />
                  </div>
                </foreignObject>
              </g>
            ))}
         </svg>
      </div>

      {/* Footer - User Stats */}
      <div className="flex items-center gap-3 pt-3 border-t border-border-subtle/30 dark:border-border-subtle-dark/30">
         <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-white dark:border-bg-elevated-dark shadow-sm object-cover" alt="Eren Y." />
         <div className="min-w-0">
            <div className="font-semibold text-text-primary dark:text-text-primary-dark text-sm truncate">Eren Y.</div>
            <div className="text-xs text-text-tertiary dark:text-text-tertiary-dark tabular-nums">$117,115</div>
         </div>
         
         <div className="ml-auto flex items-center gap-2 flex-wrap">
             {/* Badges */}
             <div className="flex gap-1.5">
                 <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] font-bold tabular-nums">22</span>
                 <span className="px-2 h-6 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center text-[10px] font-bold">8x</span>
             </div>
             
             {/* KPI stats */}
             <div className="flex gap-2 text-xs font-semibold text-text-primary dark:text-text-primary-dark tabular-nums">
                 <span>0.79</span>
                 <span>32%</span>
             </div>
             
             {/* Rating with icon */}
             <div className="flex gap-1 items-center">
                 <span className="w-5 h-5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] font-bold tabular-nums">15</span>
                 <span className="text-xs">⭐</span>
             </div>
         </div>
      </div>
    </div>
  );
};

export default SalesDynamicChart;
