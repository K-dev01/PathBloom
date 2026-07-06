import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function FilterPanel({ filters, activeFilters, onFilterChange, searchQuery, onSearchChange, searchPlaceholder = 'Search...' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (filterKey, value) => {
    const current = activeFilters[filterKey] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...activeFilters, [filterKey]: updated });
  };

  const clearAll = () => {
    const cleared = {};
    Object.keys(filters).forEach((k) => (cleared[k] = []));
    onFilterChange(cleared);
    if (onSearchChange) onSearchChange('');
  };

  const activeCount = Object.values(activeFilters).flat().length;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
      {/* Search + Toggle */}
      <div className="p-4 flex flex-col sm:flex-row gap-3">
        {onSearchChange && (
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          >
            <Filter size={14} />
            Filters
            {activeCount > 0 && (
              <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{activeCount}</span>
            )}
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {activeCount > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
            >
              <X size={14} />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter Groups */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-gray-200 dark:border-slate-700 p-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(filters).map(([key, options]) => (
              <div key={key}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {options.map((option) => {
                    const isActive = (activeFilters[key] || []).includes(option);
                    return (
                      <button
                        key={option}
                        onClick={() => handleToggle(key, option)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
