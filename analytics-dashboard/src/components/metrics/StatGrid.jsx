

const StatGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 auto-rows-fr">
      {children}
    </div>
  );
};

export default StatGrid;
