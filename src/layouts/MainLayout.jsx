import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex h-screen min-h-0 overflow-hidden overflow-x-hidden ${isDark ? 'dark' : ''}`}>
      {/* Sidebar - responsive; visible on md+, overlay on mobile */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col w-full">
        {/* Navbar */}
        <Navbar
          onMenuClick={() => setIsSidebarOpen((v) => !v)}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {/* Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 min-h-0 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900"
        >
          <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
}
