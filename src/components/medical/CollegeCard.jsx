import { motion } from 'framer-motion';
import { Building2, MapPin, ExternalLink, Home, Award, TrendingUp } from 'lucide-react';

export default function CollegeCard({ college, index = 0 }) {
  const typeColors = {
    Government: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30',
    'Government Aided': 'from-blue-500/20 to-cyan-500/10 border-blue-500/30',
    'Self Financing': 'from-violet-500/20 to-purple-500/10 border-violet-500/30',
  };
  const colorClass = typeColors[college.type] || typeColors['Self Financing'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`bg-gradient-to-br ${colorClass} backdrop-blur rounded-2xl p-6 border transition-all hover:shadow-xl dark:bg-slate-800/50`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">{college.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <MapPin size={12} className="text-gray-500" />
            <span className="text-xs text-gray-600 dark:text-gray-400">{college.district}</span>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
          college.type === 'Government'
            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
            : college.type === 'Government Aided'
            ? 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
            : 'bg-violet-500/20 text-violet-700 dark:text-violet-400'
        }`}>
          {college.type}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {college.courses.slice(0, 4).map((course, i) => (
          <span key={i} className="text-xs bg-white/60 dark:bg-white/10 px-2 py-0.5 rounded-full text-gray-700 dark:text-gray-300">
            {course}
          </span>
        ))}
        {college.courses.length > 4 && (
          <span className="text-xs text-gray-500">+{college.courses.length - 4} more</span>
        )}
      </div>

      <div className="space-y-2 text-sm mb-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1"><TrendingUp size={12} /> Fees</span>
          <span className="font-medium text-gray-900 dark:text-white text-xs">{college.approximateFees}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1"><Home size={12} /> Hostel</span>
          <span className={`text-xs font-medium ${college.hostelAvailable ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
            {college.hostelAvailable ? 'Available' : 'Not Available'}
          </span>
        </div>
        {college.accreditation && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1"><Award size={12} /> Accreditation</span>
            <span className="font-medium text-gray-900 dark:text-white text-xs">{college.accreditation}</span>
          </div>
        )}
        {college.placementSupport && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Placement</span>
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">✓ Supported</span>
          </div>
        )}
      </div>

      {college.website && (
        <a
          href={`https://${college.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm font-medium text-gray-800 dark:text-white"
        >
          Visit Website
          <ExternalLink size={12} />
        </a>
      )}
    </motion.div>
  );
}
