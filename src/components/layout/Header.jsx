import React from 'react';
import { NavLink } from 'react-router-dom';
import GauravResume from '../../Gaurav_oli_resume.pdf';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'education', label: 'Education', path: '/education' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export default function Header({ mobileOpen, setMobileOpen }) {
  return (
    <>
      <header className="sticky top-0 z-50 mb-4 flex items-center justify-between rounded-3xl bg-slate-950/80 border border-purple-500/40 px-4 py-3 backdrop-blur sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-xl font-bold">
            &lt;/&gt;
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-textLightPurple">
              GAURAV OLI
            </p>
            <p className="text-xs text-textGray">Full Stack Developer</p>
          </div>
        </div>
        <nav className="hidden md:flex flex-1 justify-end items-center gap-1.5 text-xs sm:text-sm ml-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 font-medium transition border text-xs sm:text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent'
                    : 'bg-slate-900/60 text-textGray border-purple-500/30 hover:border-purple-400/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={GauravResume}
            download="Gaurav_Oli_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-medium text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-green-500 text-white border border-transparent shadow-md shadow-emerald-500/40 hover:opacity-90 transition"
          >
            <i className="fa-solid fa-file-arrow-down text-sm" aria-hidden="true"></i>
            Download Resume
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white focus:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md max-h-[calc(100vh-6rem)] overflow-y-auto flex flex-col gap-1 rounded-2xl bg-slate-950/95 border border-purple-500/30 p-4 backdrop-blur-lg">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-900/70 text-textGray hover:border-purple-400/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={GauravResume}
              download="Gaurav_Oli_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md shadow-emerald-500/40 hover:opacity-90 transition mt-1"
              onClick={() => setMobileOpen(false)}
            >
              <i className="fa-solid fa-file-arrow-down text-sm" aria-hidden="true"></i>
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
