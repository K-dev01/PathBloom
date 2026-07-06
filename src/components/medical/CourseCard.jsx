import { motion } from 'framer-motion';
import { ArrowRight, Clock, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course, index = 0 }) {
  const gradients = [
    'from-emerald-700 to-teal-900',
    'from-cyan-700 to-blue-900',
    'from-violet-700 to-purple-900',
    'from-rose-700 to-pink-900',
    'from-amber-700 to-orange-900',
    'from-indigo-700 to-blue-900',
    'from-teal-700 to-emerald-900',
    'from-fuchsia-700 to-purple-900',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all border border-white/20 flex flex-col`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold leading-tight">{course.title}</h3>
          {course.fullName && (
            <p className="text-white/60 text-xs mt-1">{course.fullName}</p>
          )}
        </div>
        <GraduationCap size={20} className="text-white/40 flex-shrink-0 ml-2" />
      </div>

      <p className="text-white/85 text-sm mb-4 line-clamp-2 flex-grow">{course.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-xs">
          <Clock size={12} className="text-white/60" />
          <span className="text-white/80">Duration: {course.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Briefcase size={12} className="text-white/60" />
          <span className="text-white/80">
            {Array.isArray(course.careerOpportunities)
              ? course.careerOpportunities.slice(0, 2).join(', ')
              : course.careerScope || 'Multiple career paths'}
          </span>
        </div>
      </div>

      {course.eligibility && (
        <div className="bg-white/15 rounded-lg p-2.5 mb-4 backdrop-blur">
          <p className="text-xs text-white/70 font-semibold mb-0.5">Eligibility</p>
          <p className="text-xs text-white/90">
            {typeof course.eligibility === 'string'
              ? course.eligibility
              : `PCB ${course.eligibility.minPCBPercent || 50}%${course.eligibility.neetRequired ? ' + NEET' : ''}`}
          </p>
        </div>
      )}

      <Link
        to={`/medical/course/${course.id}`}
        className="mt-auto w-full bg-white/20 hover:bg-white/30 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors backdrop-blur text-sm font-medium"
      >
        Explore Course
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
