import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Sun,
  Moon,
  Menu,
  Bell,
  User,
} from 'lucide-react';

export default function Navbar({ onMenuClick, isDark, setIsDark }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 shadow-sm h-16 md:h-20"
    >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 h-full">
        {/* Left side - Menu button and search */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMenuClick}
            className="md:hidden p-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Menu size={20} className="text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Search Bar */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            animate={{ width: isSearchOpen ? 300 : 200 }}
          >
            <div className="flex-1 flex items-center gap-2 bg-gray-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
              <Search size={18} className="text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, colleges..."
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
                className="bg-transparent outline-none flex-1 text-sm sm:text-base text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </motion.div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Mobile search button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Search size={20} className="text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Notification bell */}
          <motion.div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative"
            >
              <Bell size={20} className="text-gray-700 dark:text-gray-300" />
              {hasNotifications && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"
                />
              )}
            </motion.button>
          </motion.div>

          {/* Dark/Light mode toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </motion.button>

          {/* Profile button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors ml-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-700 to-violet-800 rounded-lg flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
