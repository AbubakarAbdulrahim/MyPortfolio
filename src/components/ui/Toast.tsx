"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Toast Render Portal */}
      <div className="fixed bottom-6 inset-x-0 z-50 flex flex-col items-center pointer-events-none gap-2 px-4">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface border border-surface-border text-foreground shadow-lg backdrop-blur-md max-w-md text-xs font-mono"
            >
              {t.type === "success" && <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />}
              {t.type === "error" && <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />}
              {t.type === "info" && <Info className="w-3.5 h-3.5 text-accent shrink-0" />}
              <span className="truncate">{t.message}</span>
              <button
                onClick={() => removeToast(t.id)}
                className="ml-1 p-0.5 rounded-full text-muted hover:text-foreground transition-colors"
                aria-label="Dismiss toast"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    // Fallback so SSR prerendering never throws
    return {
      toast: () => {},
    };
  }
  return context;
}
