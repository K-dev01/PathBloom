import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Sun, Moon, Menu, Bell, User } from 'lucide-react';

export default function Navbar({ onMenuClick, isDark, setIsDark }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 h-16 md:h-18"
      style={{
        background: isDark
          ? 'rgba(10, 10, 26, 0.82)'
          : 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isDark
          ? '1px solid rgba(255,255,255,0.07)'
          : '1px solid rgba(99,102,241,0.12)',
        boxShadow: scrolled
          ? isDark
            ? '0 4px 32px rgba(0,0,0,0.4)'
            : '0 4px 24px rgba(99,102,241,0.12)'
          : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 h-full gap-4">
        {/* Left — hamburger + search */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onMenuClick}
            id="navbar-menu-btn"
            aria-label="Toggle sidebar"
            className="md:hidden p-2.5 rounded-xl transition-colors"
            style={{
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.07)',
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.15)',
            }}
          >
            <Menu size={19} className="text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Search */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            animate={{ width: isSearchOpen ? 280 : 200 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="flex-1 flex items-center gap-2 px-4 py-2 rounded-xl transition-all"
              style={{
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.07)',
                border: isSearchOpen
                  ? '1px solid rgba(99,102,241,0.5)'
                  : isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.15)',
                boxShadow: isSearchOpen ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
              }}
            >
              <Search size={16} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search courses, colleges..."
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
                className="bg-transparent outline-none flex-1 text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Right — actions */}
        <div className="flex items-center gap-2">
          {/* Mobile search */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Search"
            className="md:hidden p-2.5 rounded-xl transition-colors"
            style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.07)' }}
          >
            <Search size={18} className="text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Notifications */}
          <motion.div className="relative">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Notifications"
              className="p-2.5 rounded-xl transition-colors relative"
              style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.07)' }}
            >
              <Bell size={18} className="text-gray-700 dark:text-gray-300" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"
                style={{ boxShadow: '0 0 6px rgba(239,68,68,0.8)' }}
              />
            </motion.button>
          </motion.div>

          {/* Dark/Light toggle */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            id="theme-toggle"
            className="p-2.5 rounded-xl transition-colors"
            style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.07)' }}
          >
            {isDark
              ? <Sun size={18} className="text-amber-400" />
              : <Moon size={18} className="text-indigo-600" />
            }
          </motion.button>

          {/* Profile */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Profile"
            className="ml-1 rounded-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
              padding: '6px',
            }}
          >
            <User size={18} className="text-white" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
