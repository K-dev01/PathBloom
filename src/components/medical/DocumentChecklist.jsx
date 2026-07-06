import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Square, FileText } from 'lucide-react';

const defaultDocuments = [
  { id: 'class10', label: 'Class 10 Marksheet', required: true },
  { id: 'class12', label: 'Class 12 Marksheet', required: true },
  { id: 'tc', label: 'Transfer Certificate (TC)', required: true },
  { id: 'community', label: 'Community Certificate', required: true },
  { id: 'nativity', label: 'Nativity Certificate', required: true },
  { id: 'aadhaar', label: 'Aadhaar Card', required: true },
  { id: 'income', label: 'Income Certificate', required: true },
  { id: 'photos', label: 'Passport Size Photographs (6 copies)', required: true },
  { id: 'neet', label: 'NEET Score Card', required: false },
  { id: 'allotment', label: 'Counselling Allotment Order', required: false },
  { id: 'medical', label: 'Medical Fitness Certificate', required: false },
  { id: 'migration', label: 'Migration Certificate', required: false },
];

export default function DocumentChecklist({ documents = defaultDocuments, title = 'Required Documents' }) {
  const [checked, setChecked] = useState({});

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const total = documents.length;
  const done = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((done / total) * 100);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <FileText size={24} className="text-emerald-500" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">{done} of {total} documents ready</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">{progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {documents.map((doc) => (
          <motion.button
            key={doc.id}
            onClick={() => toggle(doc.id)}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
              checked[doc.id]
                ? 'bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30'
                : 'bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-500/30'
            }`}
          >
            {checked[doc.id] ? (
              <CheckSquare size={18} className="text-emerald-500 flex-shrink-0" />
            ) : (
              <Square size={18} className="text-gray-400 flex-shrink-0" />
            )}
            <span className={`text-sm ${checked[doc.id] ? 'text-emerald-700 dark:text-emerald-300 line-through' : 'text-gray-800 dark:text-gray-200'}`}>
              {doc.label}
            </span>
            {doc.required && !checked[doc.id] && (
              <span className="ml-auto text-xs text-red-500 font-medium">Required</span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
