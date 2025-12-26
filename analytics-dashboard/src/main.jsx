/**
 * Analytics Dashboard - Main Entry Point
 * 
 * This file initializes the React application with:
 * - React StrictMode for development warnings
 * - DashboardProvider for global state management
 * - Root component mounting
 * 
 * @module main
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { DashboardProvider } from './context/DashboardContext';

// Mount the React application to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </StrictMode>,
);
