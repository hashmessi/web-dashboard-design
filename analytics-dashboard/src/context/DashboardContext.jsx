import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { DashboardService, mockData } from '../services/api';

/**
 * @typedef {Object} Toast
 * @property {string} id
 * @property {string} message
 * @property {'success'|'error'|'info'} type
 */

/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {*} [payload]
 */

const initialState = {
  ...mockData,
  isLoading: true, // Start in loading state
};

const DashboardContext = createContext(undefined);

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_DATA':
      return { ...state, ...action.payload, isLoading: false };
    case 'SET_DATE_RANGE':
      return { ...state, dateRange: action.payload, isLoading: true }; // Trigger reload
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'TOGGLE_MOBILE_MENU':
       return state; 
    case 'ADD_TOAST':
      return { ...state }; // We handle toasts with local state in provider to avoid complex reducer types mixing
    case 'REMOVE_TOAST':
      return { ...state };
    case 'SORT_USERS':
      return {
        ...state,
        users: DashboardService.sortUsers(state.users, action.payload.key, action.payload.direction)
      };
    default:
      return state;
  }
};

/**
 * Dashboard Provider Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const [sortConfig, setSortConfig] = React.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const refresh = React.useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const data = await DashboardService.fetchDashboardData(state.dateRange);
      dispatch({ type: 'SET_DATA', payload: data });
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.dateRange]);

  // Initial load
  useEffect(() => {
    refresh();
  }, [refresh]);

  // Theme effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  /**
   * Show a toast notification
   * @param {string} message
   * @param {'success'|'error'|'info'} type
   */
  const showToast = (message, type = 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto remove after 3s
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Handle local sorting side-effect and mobile menu
  const handleDispatch = (action) => {
    if (action.type === 'SORT_USERS') {
      setSortConfig(action.payload);
    }
    if (action.type === 'TOGGLE_MOBILE_MENU') {
      setIsMobileMenuOpen(prev => action.payload !== undefined ? action.payload : !prev);
      return; 
    }
    dispatch(action);
  };

  return (
    <DashboardContext.Provider value={{ ...state, dispatch: handleDispatch, refresh, sortConfig, isMobileMenuOpen, toasts, showToast, theme, toggleTheme }}>
      {children}
    </DashboardContext.Provider>
  );
};

/**
 * Hook to access dashboard context
 * @returns {Object} Dashboard context value
 */
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
