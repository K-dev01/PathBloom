import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle size={24} className="text-violet-500" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-xl border transition-all ${
              openIndex === idx
                ? 'border-emerald-300 dark:border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-500/5'
                : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="font-medium text-sm text-gray-900 dark:text-white pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown size={16} className="text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
