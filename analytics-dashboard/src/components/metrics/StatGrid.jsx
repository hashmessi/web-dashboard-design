import React from 'react';

const StatGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
      {children}
    </div>
  );
};

export default StatGrid;
