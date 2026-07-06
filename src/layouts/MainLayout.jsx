import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex h-screen min-h-0 overflow-hidden overflow-x-hidden ${isDark ? 'dark' : ''}`}>
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-32 w-80 h-80 rounded-full opacity-15 animate-float-delayed"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full opacity-10 animate-float"
          style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)', animationDelay: '2s' }}
        />
      </div>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col w-full relative z-10">
        <Navbar
          onMenuClick={() => setIsSidebarOpen((v) => !v)}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <motion.main
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 min-h-0 overflow-y-auto dark:bg-[#0a0a1a] bg-[#f0f2ff]"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(ellipse 80% 60% at 10% 0%, rgba(99,102,241,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(139,92,246,0.1) 0%, transparent 60%)'
              : 'radial-gradient(ellipse 80% 60% at 10% 0%, rgba(99,102,241,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(139,92,246,0.05) 0%, transparent 60%)',
          }}
        >
          <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
}
