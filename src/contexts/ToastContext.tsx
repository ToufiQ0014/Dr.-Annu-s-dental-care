import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';
import * as motion from 'motion/react-client';

interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info';
}

interface ToastContextType {
  toast: (message: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: Toast['type'] = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[200] flex flex-col space-y-3 pointer-events-none w-[90%] max-w-sm">
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`pointer-events-auto flex items-center justify-between p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border ${
              t.type === 'error' ? 'bg-white border-red-100' :
              t.type === 'info' ? 'bg-white border-blue-100' :
              'bg-white border-[#00a8c6]/20'
            }`}
          >
            <div className="flex items-center space-x-3">
              {t.type === 'success' ? (
                <div className="w-8 h-8 rounded-full bg-[#00a8c6]/10 flex items-center justify-center text-[#00a8c6] flex-shrink-0">
                  <CheckCircle2 size={18} />
                </div>
              ) : t.type === 'error' ? (
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                   <AlertCircle size={18} />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                   <AlertCircle size={18} />
                </div>
              )}
              <p className="font-medium text-sm text-gray-800">{t.message}</p>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none ml-4 transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
