import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import clsx from 'clsx';

const ToastContainer = () => {
  const { toasts } = useDashboard();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className={clsx(
            "flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border animate-slide-up bg-white min-w-[300px]",
            toast.type === 'success' && "border-green-100",
            toast.type === 'error' && "border-red-100",
            toast.type === 'info' && "border-blue-100",
          )}
        >
          {toast.type === 'success' && <CheckCircle size={20} className="text-green-500" />}
          {toast.type === 'error' && <AlertCircle size={20} className="text-red-500" />}
          {toast.type === 'info' && <Info size={20} className="text-blue-500" />}
          
          <div className="flex-1">
             <p className="text-sm font-medium text-gray-800">{toast.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
