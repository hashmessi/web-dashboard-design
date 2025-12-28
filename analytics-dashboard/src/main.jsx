/**
 * Analytics Dashboard - Main Entry Point
 * 
 * This file initializes the React application with:
 * - React StrictMode for development warnings
 * - DashboardProvider for global state management
 * - ErrorBoundary for graceful error handling
 * - Root component mounting
 * 
 * @module main
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { DashboardProvider } from './context/DashboardContext';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Mount the React application to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </ErrorBoundary>
  </StrictMode>,
);
