import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Filter, ArrowRight, Award, Calendar, Users, Globe, FileText, CheckCircle } from 'lucide-react';
import scholarshipsData from '../data/scholarships.json';

export default function Scholarships() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const navigate = useNavigate();

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

  // Filter scholarships based on selected category
  const filteredScholarships = 
    selectedFilter === 'All'
      ? scholarshipsData.scholarships
      : scholarshipsData.scholarships.filter(s =>
          s.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
          s.applicableCourses.some(c => c.toLowerCase().includes(selectedFilter.toLowerCase()))
        );

  const colorMap = {
    'First Graduate': 'from-blue-700 to-blue-900',
    'Girls': 'from-rose-600 to-rose-800',
    'Caste-based': 'from-amber-700 to-orange-900',
    'Engineering': 'from-violet-700 to-violet-900',
    'Diploma': 'from-emerald-700 to-teal-900',
    'Low Income': 'from-rose-700 to-red-900',
    'Government School': 'from-teal-600 to-teal-800',
  };

  const getColor = (category) => {
    return colorMap[category] || 'from-indigo-700 to-indigo-900';
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
          <Trophy size={28} className="text-yellow-500" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Scholarships for Tamil Nadu Students
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover {scholarshipsData.scholarships.length}+ scholarship opportunities from government and private organizations
        </p>
      </motion.div>

      {/* Filter Section */}
      <motion.div variants={itemVariants} className="flex gap-3 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedFilter('All')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedFilter === 'All'
              ? 'bg-gradient-to-r from-indigo-700 to-violet-800 text-white'
              : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700'
          }`}
        >
          <Filter size={16} className="inline mr-2" />
          All Scholarships
        </motion.button>
        
        {scholarshipsData.filters.map((filter) => (
          <motion.button
            key={filter.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFilter(filter.name)}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              selectedFilter === filter.name
                ? 'bg-gradient-to-r from-indigo-700 to-violet-800 text-white'
                : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700'
            }`}
            title={filter.description}
          >
            {filter.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Results Count */}
      <motion.div variants={itemVariants} className="text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          Showing {filteredScholarships.length} scholarship{filteredScholarships.length !== 1 ? 's' : ''}
          {selectedFilter !== 'All' && ` for "${selectedFilter}"`}
        </p>
      </motion.div>

      {/* Scholarships Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredScholarships.map((scholarship) => (
          <motion.div
            key={scholarship.id}
            whileHover={{ y: -8 }}
            className={`bg-gradient-to-br ${getColor(scholarship.category)} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all border border-white/20 flex flex-col`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold">{scholarship.name}</h3>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full mt-2 inline-block">
                  {scholarship.category}
                </span>
              </div>
              <Award size={24} className="opacity-80 flex-shrink-0" />
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <Trophy size={18} className="opacity-80 flex-shrink-0" />
                <span className="font-semibold">{scholarship.amount}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={18} className="opacity-80 flex-shrink-0" />
                <span className="text-sm opacity-90">Deadline: {scholarship.deadline}</span>
              </div>

              <div className="flex items-start gap-3">
                <Users size={18} className="opacity-80 flex-shrink-0 mt-1" />
                <span className="text-sm opacity-90">{scholarship.whoShouldApply}</span>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/20">
                <CheckCircle size={18} className="opacity-80 flex-shrink-0 mt-1" />
                <div className="text-sm opacity-90">
                  <p className="font-semibold mb-1">Applicable Courses:</p>
                  <p>{scholarship.applicableCourses.join(', ')}</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => navigate(`/scholarships/${scholarship.id}`)}
              className="mt-4 w-full bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors backdrop-blur"
            >
              View More
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Scholarship Benefits Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 border border-blue-200 dark:border-slate-700">
          <Globe size={28} className="text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Multiple Categories
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Scholarships for girls, first-generation learners, caste-based categories, and low-income students
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-slate-800 rounded-xl p-6 border border-purple-200 dark:border-slate-700">
          <FileText size={28} className="text-purple-600 dark:text-purple-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Easy Application
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Simple online applications with clear documentation requirements and reasonable deadlines
          </p>
        </div>

        <div className="bg-green-50 dark:bg-slate-800 rounded-xl p-6 border border-green-200 dark:border-slate-700">
          <Award size={28} className="text-green-600 dark:text-green-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Substantial Support
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Financial aid ranging from ₹6,000 to full course fees to support your education
          </p>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-8 border border-slate-700/50 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Apply for Scholarships Today
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Don't let finances stop your education. Explore government scholarships, AICTE schemes, and NGO support programs available for students across Tamil Nadu.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-700 to-violet-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Start Your Application
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
