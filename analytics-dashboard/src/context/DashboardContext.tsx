import React, { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { DashboardState, UserRow } from '../types';
import { DashboardService, mockData } from '../services/api';

type Action = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_DATA'; payload: DashboardState }
  | { type: 'SET_DATE_RANGE'; payload: string }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'TOGGLE_MOBILE_MENU'; payload?: boolean }
  | { type: 'ADD_TOAST'; payload: { id: string; message: string; type: 'success' | 'error' | 'info' } }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'SORT_USERS'; payload: { key: keyof UserRow; direction: 'asc' | 'desc' } };

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface DashboardContextType extends DashboardState {
  dispatch: React.Dispatch<Action>;
  refresh: () => void;
  sortConfig: { key: keyof UserRow; direction: 'asc' | 'desc' } | null;
  isMobileMenuOpen: boolean;
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const initialState: DashboardState = {
  ...mockData,
  isLoading: true, // Start in loading state
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const dashboardReducer = (state: DashboardState, action: Action): DashboardState & { isMobileMenuOpen?: boolean; toasts?: Toast[] } => {
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

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const [sortConfig, setSortConfig] = React.useState<{ key: keyof UserRow; direction: 'asc' | 'desc' } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
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

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto remove after 3s
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Handle local sorting side-effect and mobile menu
  const handleDispatch = (action: Action) => {
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

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
