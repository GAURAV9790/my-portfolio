import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-700/80 py-6 text-center text-sm sm:text-base text-slate-100">
      <p>
        Built with{' '}
        <span className="inline-block text-pink-400 text-lg sm:text-xl animate-pulse">❤</span>{' '}
        by <span className="text-textLightPurple">Gaurav Oli</span>
      </p>
      <p className="mt-2 text-slate-300">{'Copyright '}{new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
}
