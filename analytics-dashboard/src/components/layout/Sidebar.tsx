import { useState } from 'react';
import { 
  LayoutDashboard, 
  Target, 
  List, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Star,
  Clock,
  Plus,
  X
} from 'lucide-react';
import clsx from 'clsx';
import { useDashboard } from '../../context/DashboardContext';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [expandedFolders, setExpandedFolders] = useState(['Codename']);
  const { isMobileMenuOpen, dispatch } = useDashboard();

  const toggleFolder = (name: string) => {
    setExpandedFolders(prev => 
      prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]
    );
  };

  const navItems = [
    { name: 'Sales list', icon: List },
    { name: 'Goals', icon: Target },
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
  ];

  const folders = [
    { name: 'Shared with me', expandable: true },
    { name: 'Cargo2go' },
    { name: 'Cloud3r', badge: 2 },
    { name: 'Idioma' },
    { name: 'Syllables' },
    { name: 'x-0b' },
  ];

  const reports = ['Share with me', 'Deals by user', 'Deal duration'];
  
  const myReports = [
    { name: 'Emails received' },
    { name: 'Deal duration' },
    { name: 'New report', highlight: true },
    { name: 'Analytics', badge: 7 },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-20 transition-opacity animate-fade-in"
          onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU', payload: false })}
        />
      )}

      <aside 
        className={clsx(
          "h-screen bg-bg-primary dark:bg-bg-primary-dark border-r border-border-subtle/50 dark:border-border-subtle-dark/50 flex flex-col py-4",
          "transition-all duration-300 ease-ios",
          "fixed lg:static z-30 lg:z-auto inset-y-0 left-0",
          isMobileMenuOpen ? "translate-x-0 w-[260px]" : "-translate-x-full lg:translate-x-0",
          (!isMobileMenuOpen && isCollapsed) ? "lg:w-[72px]" : "lg:w-[260px]"
        )}
      >
        {/* Logo */}
        <div className="px-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black font-bold shrink-0 transition-colors shadow-sm text-sm">
              C
            </div>
            {!isCollapsed && (
              <div className="flex items-center gap-1">
                <span className="font-semibold text-text-primary dark:text-text-primary-dark text-sm">Codename.com</span>
                <ChevronDown size={14} className="text-text-tertiary cursor-pointer hover:text-text-primary transition-colors" />
              </div>
            )}
          </div>
          {!isCollapsed && (
            <button 
              className="lg:hidden text-text-tertiary dark:text-text-tertiary-dark hover:text-text-primary dark:hover:text-text-primary-dark p-1"
              onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU', payload: false })}
            >
              <X size={18} />
            </button>
          )}
        </div>

        <nav className="flex-1 px-3 space-y-5 overflow-y-auto custom-scrollbar">
          {/* Quick Actions */}
          <div className="space-y-0.5">
             <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-white/60 dark:hover:bg-white/5 transition-all">
                <Star size={16} strokeWidth={1.5} />
                {!isCollapsed && <span className="font-medium">Starred</span>}
             </button>
             <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-white/60 dark:hover:bg-white/5 transition-all">
                <Clock size={16} strokeWidth={1.5} />
                {!isCollapsed && <span className="font-medium">Recent</span>}
             </button>
          </div>

          {/* Main Nav */}
          <div className="space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={clsx(
                  "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  activeItem === item.name
                    ? "bg-white dark:bg-bg-elevated-dark shadow-card text-text-primary dark:text-text-primary-dark"
                    : "text-text-secondary dark:text-text-secondary-dark hover:bg-white/60 dark:hover:bg-white/5 hover:text-text-primary dark:hover:text-text-primary-dark"
                )}
              >
                {item.name === 'Dashboard' ? (
                  <div className="w-7 h-7 rounded-lg bg-accent-pink/10 flex items-center justify-center">
                    <item.icon size={16} className="text-accent-pink" />
                  </div>
                ) : (
                  <item.icon size={18} strokeWidth={1.5} />
                )}
                {!isCollapsed && <span>{item.name}</span>}
                {item.name === 'Dashboard' && activeItem === 'Dashboard' && !isCollapsed && (
                  <Plus size={14} className="ml-auto text-text-tertiary hover:text-accent-pink cursor-pointer transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Folders Section */}
          {!isCollapsed && (
            <div className="animate-fade-in">
              {/* Codename Folder */}
              <div>
                <button 
                  onClick={() => toggleFolder('Codename')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-text-primary dark:text-text-primary-dark hover:bg-white/60 dark:hover:bg-white/5 rounded-xl transition-all"
                >
                  <span>Codename</span>
                  <ChevronDown size={14} className={clsx("text-text-tertiary transition-transform", expandedFolders.includes('Codename') && "rotate-180")} />
                </button>
                
                {expandedFolders.includes('Codename') && (
                  <div className="ml-3 pl-3 border-l border-border-subtle/50 dark:border-border-subtle-dark/50 mt-1 space-y-0.5">
                    {folders.map(folder => (
                      <button 
                        key={folder.name} 
                        className="flex items-center justify-between w-full text-left text-sm text-text-secondary dark:text-text-secondary-dark py-1.5 px-3 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 hover:text-text-primary dark:hover:text-text-primary-dark transition-all"
                      >
                        <span>{folder.name}</span>
                        {folder.badge && (
                          <span className="bg-accent-red text-white text-[9px] font-bold px-1.5 min-w-[16px] h-4 flex items-center justify-center rounded-full">{folder.badge}</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Reports Section */}
          {!isCollapsed && (
             <div className="animate-fade-in">
                <div className="px-3 mb-1.5 flex items-center justify-between group cursor-pointer">
                   <span className="text-[11px] font-semibold text-text-tertiary dark:text-text-tertiary-dark uppercase tracking-wider">Reports</span>
                   <Plus size={12} className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="ml-3 pl-3 border-l border-border-subtle/50 dark:border-border-subtle-dark/50 space-y-0.5">
                   {reports.map(item => (
                      <button key={item} className="w-full text-left text-sm text-text-secondary dark:text-text-secondary-dark py-1.5 px-3 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 hover:text-text-primary dark:hover:text-text-primary-dark transition-all">
                         {item}
                      </button>
                   ))}
                </div>
             </div>
          )}

          {/* My Reports Section */}
          {!isCollapsed && (
             <div className="animate-fade-in">
                <div className="px-3 mb-1.5 flex items-center justify-between">
                   <span className="text-[11px] font-semibold text-text-tertiary dark:text-text-tertiary-dark uppercase tracking-wider">My reports</span>
                   <ChevronDown size={12} className="text-text-tertiary" />
                </div>
                <div className="ml-3 pl-3 border-l border-border-subtle/50 dark:border-border-subtle-dark/50 space-y-0.5">
                   {myReports.map(item => (
                      <button 
                        key={item.name} 
                        className={clsx(
                          "w-full flex items-center justify-between text-left text-sm py-1.5 px-3 rounded-lg transition-all",
                          item.highlight
                            ? "text-accent-pink font-medium bg-accent-pink/5 hover:bg-accent-pink/10"
                            : "text-text-secondary dark:text-text-secondary-dark hover:bg-white/60 dark:hover:bg-white/5 hover:text-text-primary dark:hover:text-text-primary-dark"
                        )}
                      >
                         <span>{item.name}</span>
                         {item.badge && (
                            <span className="bg-accent-pink text-white text-[9px] font-bold px-1.5 min-w-[16px] h-4 flex items-center justify-center rounded-full">{item.badge}</span>
                         )}
                      </button>
                   ))}
                </div>
             </div>
          )}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
           <div className="px-4 py-3 border-t border-border-subtle/30 dark:border-border-subtle-dark/30 mt-2">
              <button className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark transition-colors">
                 <Settings size={16} strokeWidth={1.5} />
                 <span className="font-medium">Manage folders</span>
              </button>
           </div>
        )}

        {/* Collapse Toggle & Settings */}
        <div className="px-3 mt-auto pt-2">
          <button
            onClick={onToggle}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-text-secondary dark:text-text-secondary-dark hover:bg-white/60 dark:hover:bg-white/5 transition-all"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!isCollapsed && <span className="font-medium">Collapse</span>}
          </button>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-text-secondary dark:text-text-secondary-dark hover:bg-white/60 dark:hover:bg-white/5 transition-all">
            <Settings size={18} strokeWidth={1.5} />
            {!isCollapsed && <span className="font-medium">Settings</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
