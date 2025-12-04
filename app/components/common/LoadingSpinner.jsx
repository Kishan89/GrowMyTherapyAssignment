"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-[#1d3c2f]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#1d3c2f] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
