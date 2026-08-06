import React from 'react';

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3.5 py-1.5 text-xs sm:text-sm md:text-base text-white border border-purple-400/50">
      {children}
    </span>
  )
}

export default Chip;