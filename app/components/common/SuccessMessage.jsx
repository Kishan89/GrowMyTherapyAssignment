"use client";

import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export default function SuccessMessage({ message, onClose, autoClose = true }) {
  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slideIn">
      <div className="bg-white border-2 border-green-500 rounded-lg shadow-2xl p-6 max-w-md flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#1d3c2f] mb-1">
            Success!
          </h3>
          <p className="text-[#1d3c2f]/80 text-sm">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[#1d3c2f]/60 hover:text-[#1d3c2f] transition"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
