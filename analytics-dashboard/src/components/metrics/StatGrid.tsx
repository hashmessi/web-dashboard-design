import React from 'react';

interface StatGridProps {
  children: React.ReactNode;
}

const StatGrid: React.FC<StatGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {children}
    </div>
  );
};

export default StatGrid;
