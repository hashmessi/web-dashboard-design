import { Search, Menu, Plus, Sun, Moon } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

const Header = () => {
  const { searchQuery, dispatch, theme, toggleTheme } = useDashboard();

  return (
    <header className="h-14 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-bg-primary dark:bg-bg-primary-dark sticky top-0 z-10 transition-colors duration-300 border-b border-border-subtle/30 dark:border-border-subtle-dark/30">
      {/* Left Side - Logo visible on mobile */}
      <div className="flex items-center gap-3 lg:hidden">
        <div className="w-8 h-8 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black font-bold shrink-0 transition-colors shadow-sm">
          C
        </div>
        <span className="font-semibold text-text-primary dark:text-text-primary-dark">Codename</span>
      </div>

      {/* Search */}
      <div className="hidden md:block relative group max-w-sm w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={14} className="text-text-tertiary dark:text-text-tertiary-dark group-focus-within:text-accent-pink transition-colors" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
          className="block w-full pl-9 pr-4 py-2 border-none rounded-full bg-white dark:bg-bg-elevated-dark text-sm text-text-primary dark:text-text-primary-dark leading-5 placeholder-text-tertiary dark:placeholder-text-tertiary-dark focus:outline-none focus:ring-2 focus:ring-accent-pink/20 transition-all duration-200 shadow-sm border border-border-subtle/30 dark:border-border-subtle-dark/30"
          placeholder="Try searching &quot;insights&quot;"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme} 
          className="p-2 text-text-secondary dark:text-text-secondary-dark hover:bg-white dark:hover:bg-bg-elevated-dark rounded-full transition-all hover:shadow-sm"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-bg-elevated-dark shadow-sm">
          <img 
            src="https://i.pravatar.cc/100?img=68" 
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Menu */}
        <button 
          onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
          className="p-2 text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-white hover:bg-white dark:hover:bg-bg-elevated-dark rounded-full transition-all lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
        
        {/* Create Button */}
        <button 
          className="w-8 h-8 rounded-full bg-accent-pink text-white flex items-center justify-center hover:bg-accent-pink/90 transition-all shadow-lg hover:shadow-pink-glow hover:scale-105"
          aria-label="Create new"
        >
          <Plus size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
