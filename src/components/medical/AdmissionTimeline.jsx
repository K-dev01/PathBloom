import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';

export default function AdmissionTimeline({ steps, title, color = 'emerald' }) {
  const colors = {
    emerald: { bg: 'bg-emerald-600', ring: 'ring-emerald-500/30', gradient: 'from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-800', border: 'border-emerald-200 dark:border-slate-600', line: 'bg-emerald-400' },
    blue: { bg: 'bg-blue-600', ring: 'ring-blue-500/30', gradient: 'from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-800', border: 'border-blue-200 dark:border-slate-600', line: 'bg-blue-400' },
    violet: { bg: 'bg-violet-600', ring: 'ring-violet-500/30', gradient: 'from-violet-50 to-violet-100 dark:from-slate-700 dark:to-slate-800', border: 'border-violet-200 dark:border-slate-600', line: 'bg-violet-400' },
  };
  const c = colors[color] || colors.emerald;

  return (
    <div className="relative">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">{title}</h3>
      )}
      <div className="space-y-0">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            {/* Vertical line */}
            {idx < steps.length - 1 && (
              <div className={`absolute left-5 top-12 w-0.5 h-[calc(100%-2rem)] ${c.line} opacity-40`} />
            )}

            {/* Step number circle */}
            <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full ${c.bg} text-white font-bold flex items-center justify-center text-sm ring-4 ${c.ring}`}>
              {step.step || idx + 1}
            </div>

            {/* Content card */}
            <motion.div
              whileHover={{ y: -2 }}
              className={`flex-1 bg-gradient-to-br ${c.gradient} rounded-xl p-5 border ${c.border}`}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{step.description}</p>
              {step.timeline && (
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock size={12} />
                  {step.timeline}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
