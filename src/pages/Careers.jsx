import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
  MapPin,
  Zap,
  BookOpen,
  CheckCircle,
  Building,
  Trophy,
} from 'lucide-react';
import careersData from '../data/careers.json';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const colorMap = {
    0: 'from-blue-700 to-blue-900',
    1: 'from-violet-700 to-violet-900',
    2: 'from-amber-700 to-orange-900',
    3: 'from-emerald-700 to-teal-900',
    4: 'from-rose-600 to-rose-800',
    5: 'from-teal-600 to-teal-800',
    6: 'from-indigo-700 to-indigo-900',
  };

  const selectedCareerPath = careersData.careerPaths[selectedCategory];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 mb-4">
          <Briefcase size={28} className="text-orange-500" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Career Opportunities in Tamil Nadu
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore {careersData.careerPaths.length}+ career paths with detailed opportunities, salary ranges, and growth potential
        </p>
      </motion.div>

      {/* Career Categories */}
      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Select Career Category
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {careersData.careerPaths.map((career, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(idx)}
              className={`p-4 rounded-lg text-left transition-all ${
                selectedCategory === idx
                  ? 'bg-gradient-to-r from-indigo-700 to-violet-800 text-white'
                  : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-700'
              }`}
            >
              <p className="font-semibold">{career.title}</p>
              <p className="text-sm opacity-75 mt-1">{career.description.substring(0, 50)}...</p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Selected Career Details */}
      {selectedCareerPath && (
        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedCareerPath.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {selectedCareerPath.description}
            </p>

            {/* Opportunities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCareerPath.opportunities.map((opp, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${colorMap[idx % 7]} rounded-xl p-6 text-white`}
                >
                  <h3 className="text-xl font-bold mb-4">{opp.role}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} className="opacity-80" />
                      <span className="text-sm opacity-90">{opp.salaryRange}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="opacity-80" />
                      <span className="text-sm opacity-90">{opp.growthProspects}</span>
                    </div>

                    <div>
                      <p className="text-xs opacity-80 font-semibold mb-2">Top Companies:</p>
                      <div className="flex flex-wrap gap-2">
                        {opp.topCompanies.slice(0, 3).map((company, cidx) => (
                          <span
                            key={cidx}
                            className="bg-white/20 px-2 py-1 rounded text-xs backdrop-blur"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/20">
                      <p className="text-xs opacity-80 font-semibold mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {opp.skillsRequired.slice(0, 3).map((skill, sidx) => (
                          <span
                            key={sidx}
                            className="bg-white/10 px-2 py-1 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Path */}
            <div className="mt-8 bg-blue-50 dark:bg-slate-700/50 rounded-xl p-6 border border-blue-200 dark:border-slate-600">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                <BookOpen size={20} />
                Required Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedCareerPath.requiredEducation}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedCareerPath.entranceExams.map((exam, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-200 dark:bg-slate-600 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-white"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tamil Nadu Education Pathways */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Tamil Nadu Education Pathways
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersData.tnEducationPathways.map((pathway, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-2 mb-4">
                {idx === 0 && <Building size={24} className="text-blue-500" />}
                {idx === 1 && <Trophy size={24} className="text-orange-500" />}
                {idx === 2 && <Zap size={24} className="text-purple-500" />}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {pathway.name}
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {pathway.description}
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Steps:</p>
                {pathway.steps.map((step, sidx) => (
                  <div key={sidx} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{step}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400">
                <p><strong>Colleges:</strong> {pathway.colleges}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Top Employers */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Top Employers in Tamil Nadu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersData.topEmployers.map((employer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 4 }}
              className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Building size={20} className="text-cyan-400" />
                {employer.name}
              </h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><span className="font-semibold">Headquarters:</span> {employer.headquarters}</p>
                <p><span className="font-semibold">Employees:</span> {employer.employees}</p>
                <p><span className="font-semibold">Roles:</span> {employer.primaryRoles.join(', ')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* High Growth Sectors */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          High-Growth Sectors (25-35% annual growth)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersData.highGrowthSectors.map((sector, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-green-50 dark:bg-slate-800 rounded-xl p-6 border border-green-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {sector.sector}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Growth Rate: <span className="font-semibold text-green-600 dark:text-green-400">{sector.growthRate}</span>
              </p>
              <div className="space-y-2">
                <p className="text-sm"><span className="font-semibold text-gray-900 dark:text-white">Salary Range:</span> {sector.salaryRange}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.skillsNeeded.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="bg-green-200 dark:bg-slate-700 px-2 py-1 rounded text-xs text-gray-800 dark:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
