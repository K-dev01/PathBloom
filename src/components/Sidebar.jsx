import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  BookOpen,
  Briefcase,
  Trophy,
  Building2,
  Brain,
} from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'After 10th', path: '/after-10th', icon: BookOpen },
    { name: 'After 12th', path: '/after-12th', icon: GraduationCap },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Scholarships', path: '/scholarships', icon: Trophy },
    { name: 'Colleges', path: '/colleges', icon: Building2 },
    { name: 'Quiz', path: '/quiz', icon: Brain },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop sidebar - visible on md+ */}
      <aside className="hidden md:flex h-screen w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-r border-slate-700/50 dark:border-slate-800/50 flex-col shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-violet-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PB</span>
            </div>
            <h1 className="text-xl font-bold text-white">PathBloom</h1>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <motion.li key={item.path} whileHover="hover" onMouseEnter={() => setHoveredItem(item.path)} onMouseLeave={() => setHoveredItem(null)}>
                  <Link to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${active ? 'bg-gradient-to-r from-indigo-700 to-violet-800 text-white shadow-lg shadow-indigo-900/40' : 'text-gray-300 hover:text-white hover:bg-slate-700/50'}`}>
                    <Icon size={20} className={active ? 'text-white' : 'text-gray-400'} />
                    <span className="font-medium">{item.name}</span>
                    {hoveredItem === item.path && !active && <motion.div layoutId="sidebar-indicator" className="ml-auto w-1 h-6 bg-indigo-400 rounded-full" transition={{ duration: 0.2 }} />}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-slate-700/50">
          <div className="bg-slate-700/30 rounded-lg p-4">
            <p className="text-xs text-gray-400 text-center">PathBloom v1.0 - Your Career Guide</p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-violet-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PB</span>
                </div>
                <h1 className="text-xl font-bold text-white">PathBloom</h1>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-md text-white">Close</button>
            </div>
            <nav className="py-2">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <li key={item.path}>
                      <a href={item.path} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${active ? 'bg-indigo-700 text-white' : 'text-gray-300'}`}>
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
