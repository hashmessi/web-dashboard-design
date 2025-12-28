/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in child component tree
 * and displays a fallback UI instead of crashing the whole app
 */

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-lg">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <details className="text-sm text-gray-500">
              <summary className="cursor-pointer mb-2">Error Details</summary>
              <pre className="bg-gray-50 p-4 rounded overflow-auto text-xs">
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-accent-pink text-white rounded-lg hover:opacity-90"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
