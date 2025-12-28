/**
 * UserAvatarRow Component
 * 
 * Displays team member avatars at top of dashboard
 */

const UserAvatarRow = () => {
  const users = [
    { name: 'Armin A.', avatar: 'https://i.pravatar.cc/100?img=11' },
    { name: 'Eren Y.', avatar: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Mikasa A.', avatar: 'https://i.pravatar.cc/100?img=5' },
  ];

  return (
    <div className="flex items-center gap-2 mb-2">
      {/* Add Button */}
      <button className="w-8 h-8 rounded-full border-2 border-dashed border-border-subtle dark:border-border-subtle-dark flex items-center justify-center text-text-tertiary hover:border-accent-pink hover:text-accent-pink transition-colors">
        <span className="text-lg font-light">+</span>
      </button>
      
      {/* User Avatars */}
      {users.map((user, i) => (
        <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-6 h-6 rounded-full border border-white dark:border-gray-700 object-cover"
          />
          <span className="text-xs font-medium text-text-primary dark:text-text-primary-dark">
            {user.name}
          </span>
        </div>
      ))}
      
      {/* Company Badge */}
      <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-xs font-bold">
        C
      </div>
    </div>
  );
};

export default UserAvatarRow;
