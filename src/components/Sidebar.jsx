import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, GraduationCap, BookOpen, Briefcase,
  Trophy, Building2, Brain, X, Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'After 10th', path: '/after-10th', icon: BookOpen },
  { name: 'After 12th', path: '/after-12th', icon: GraduationCap },
  { name: 'Careers', path: '/careers', icon: Briefcase },
  { name: 'Scholarships', path: '/scholarships', icon: Trophy },
  { name: 'Colleges', path: '/colleges', icon: Building2 },
  { name: 'Quiz', path: '/quiz', icon: Brain },
];

function NavList({ items, isActive, onClick, isDark }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.path);
        return (
          <li key={item.path}>
            <Link
              to={item.path}
              onClick={onClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 group relative ${
                active
                  ? 'text-white'
                  : isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
              style={active ? {
                background: 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.8))',
                boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
                border: '1px solid rgba(255,255,255,0.15)',
              } : {
                background: 'transparent',
              }}
            >
              {/* Hover bg */}
              {!active && (
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
              )}
              <Icon
                size={18}
                className={active ? 'text-white' : isDark ? 'text-slate-400 group-hover:text-indigo-400 transition-colors' : 'text-slate-500 group-hover:text-indigo-500 transition-colors'}
              />
              <span className="relative z-10">{item.name}</span>
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white opacity-80"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const { isDark } = useTheme();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex h-screen w-64 flex-col flex-shrink-0"
        style={{
          background: isDark ? 'rgba(8, 7, 24, 0.92)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRight: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(99,102,241,0.12)',
          boxShadow: isDark ? '4px 0 32px rgba(0,0,0,0.3)' : '4px 0 24px rgba(99,102,241,0.12)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 pb-5" style={{ borderBottom: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(99,102,241,0.12)' }}>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 4px 16px rgba(99,102,241,0.5)',
            }}
          >
            <Sparkles size={18} className="text-white" />
          </div>
          <div>
            <h1 className={`font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>PathBloom</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Career Guide</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <p className={`text-xs font-semibold uppercase tracking-widest px-4 mb-3 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Navigation</p>
          <NavList items={navItems} isActive={isActive} onClick={() => {}} isDark={isDark} />
        </nav>

        {/* Footer */}
        <div className="p-4" style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(99,102,241,0.12)' }}>
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.08)', border: isDark ? '1px solid rgba(99,102,241,0.2)' : '1px solid rgba(99,102,241,0.16)' }}
          >
            <p className={`text-xs font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>PathBloom v1.0</p>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Cauvery Delta Edition</p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60"
              style={{ backdropFilter: 'blur(4px)' }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute left-0 top-0 bottom-0 w-72 flex flex-col"
              style={{
                background: isDark ? 'rgba(8, 7, 24, 0.97)' : 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(20px)',
                borderRight: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.12)',
              }}
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between p-5" style={{ borderBottom: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(99,102,241,0.12)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                  >
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <h1 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>PathBloom</h1>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-xl transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                  style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)' }}
                  aria-label="Close sidebar"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4 px-3">
                <NavList items={navItems} isActive={isActive} onClick={() => setIsOpen(false)} isDark={isDark} />
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
