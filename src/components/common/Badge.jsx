import React from 'react';

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs sm:text-sm font-medium text-textLightPurple border border-purple-500/40">
      {children}
    </span>
  )
}

export default Badge;