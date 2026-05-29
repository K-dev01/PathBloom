import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  MapPin,
  // IndianRupee removed (use DollarSign for fee display)
  Users,
  BookOpen,
  ArrowRight,
  Search,
  Home,
  GraduationCap,
  Briefcase,
  DollarSign,
} from 'lucide-react';
import collegesData from '../data/colleges.json';

export default function Colleges() {
  const [selectedDistrict, setSelectedDistrict] = useState('Chennai');
  const [searchTerm, setSearchTerm] = useState('');

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

  // Get colleges for selected district
  const selectedDistrictData = collegesData.collegesByDistrict.find(
    (d) => d.district === selectedDistrict
  );

  const collegesInDistrict = selectedDistrictData?.colleges || [];

  // Filter colleges by search term
  const filteredColleges = collegesInDistrict.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colorMap = {
    'Premier Institute': 'from-blue-700 to-blue-900',
    'Government Engineering': 'from-emerald-700 to-teal-900',
    'Private Engineering': 'from-violet-700 to-violet-900',
    'Government Arts & Science': 'from-teal-600 to-teal-800',
    'Private Arts & Science': 'from-rose-600 to-rose-800',
    'Government Diploma': 'from-amber-700 to-orange-900',
    'State University': 'from-indigo-700 to-indigo-900',
    'University': 'from-rose-700 to-red-900',
  };

  const getColor = (type) => {
    return colorMap[type] || 'from-indigo-700 to-indigo-900';
  };

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
          <Building2 size={28} className="text-cyan-500" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Tamil Nadu Colleges
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover {collegesData.collegesByDistrict.reduce((acc, d) => acc + d.colleges.length, 0)}+ colleges across Tamil Nadu with detailed information on courses, fees, and placements
        </p>
      </motion.div>

      {/* District Filter */}
      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Select District
        </h3>
        <div className="flex gap-3 flex-wrap">
          {collegesData.collegesByDistrict.map((district) => (
            <motion.button
              key={district.district}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedDistrict(district.district);
                setSearchTerm('');
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDistrict === district.district
                  ? 'bg-gradient-to-r from-indigo-700 to-violet-800 text-white'
                  : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700'
              }`}
            >
              <MapPin size={16} className="inline mr-2" />
              {district.district}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700">
          <Search size={20} className="text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search colleges by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none flex-1 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div variants={itemVariants} className="text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          Showing {filteredColleges.length} college{filteredColleges.length !== 1 ? 's' : ''} in {selectedDistrict}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </motion.div>

      {/* Colleges Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredColleges.map((college) => (
          <motion.div
            key={college.id}
            whileHover={{ y: -8 }}
            className={`bg-gradient-to-br ${getColor(college.type)} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all border border-white/20 flex flex-col`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold">{college.name}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm opacity-90">
                  <Building2 size={16} />
                  {college.type}
                </div>
              </div>
              <GraduationCap size={24} className="opacity-80 flex-shrink-0" />
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="opacity-80 flex-shrink-0" />
                <span className="text-sm opacity-90">{college.courses.join(', ')}</span>
              </div>

              <div className="flex items-center gap-2">
                  <DollarSign size={18} className="opacity-80 flex-shrink-0" />
                  <span className="text-sm opacity-90">{college.approximateFees}</span>
              </div>

              {college.hostelAvailable && (
                <div className="flex items-center gap-2">
                  <Home size={18} className="opacity-80 flex-shrink-0" />
                  <span className="text-sm opacity-90">Hostel Available</span>
                </div>
              )}

              {college.placementInfo && (
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-xs opacity-80 font-semibold mb-2">Placements</p>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <Briefcase size={14} className="inline mr-1" />
                      Avg: {college.placementInfo.averagePackage}
                    </p>
                    <p className="text-sm">
                      <DollarSign size={14} className="inline mr-1" />
                      Highest: {college.placementInfo.highestPackage}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="mt-4 w-full bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors backdrop-blur"
            >
              View Details
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {filteredColleges.length === 0 && (
        <motion.div
          variants={itemVariants}
          className="text-center py-12 bg-gray-50 dark:bg-slate-800/50 rounded-2xl"
        >
          <Building2 size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            No colleges found matching your search. Try a different search term.
          </p>
        </motion.div>
      )}

      {/* Affordable Colleges Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Most Affordable Government Colleges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegesData.affordableColleges.map((college, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-green-200 dark:border-slate-700"
            >
              <div className="flex items-start gap-3">
                <DollarSign size={24} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white">{college.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    📍 {college.district}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span className="font-semibold">Fees:</span> {college.fees}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Avg Placement:</span> {college.placement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* College Types Info */}
      <motion.div
        variants={itemVariants}
        className="bg-white/50 dark:bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-white/20 dark:border-slate-700/50"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Types of Colleges
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['Government Engineering', 'Private Engineering', 'Arts & Science', 'Diploma'].map(
            (type, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-4 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white font-medium text-center"
              >
                {type}
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
