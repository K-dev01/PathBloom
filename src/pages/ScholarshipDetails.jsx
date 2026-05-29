import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Calendar,
  FileText,
  Users,
  BookOpen,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Home,
} from 'lucide-react';
import scholarshipsData from '../data/scholarships.json';

export default function ScholarshipDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isApplying, setIsApplying] = useState(false);

  const scholarship = useMemo(
    () => scholarshipsData.scholarships.find((s) => s.id === parseInt(id)),
    [id]
  );

  const relatedScholarships = useMemo(
    () =>
      scholarship
        ? scholarshipsData.scholarships
            .filter((s) => s.category === scholarship.category && s.id !== scholarship.id)
            .slice(0, 3)
        : [],
    [scholarship]
  );

  if (!scholarship) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Scholarship Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The scholarship you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/scholarships')}
            className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Scholarships
          </button>
        </div>
      </motion.div>
    );
  }

  const handleApplyNow = () => {
    if (!scholarship.applyLink) return;
    setIsApplying(true);
    window.open(scholarship.applyLink, '_blank', 'noopener,noreferrer');
    setIsApplying(false);
  };

  const colorMap = {
    'First Graduate': 'from-blue-600 to-blue-800',
    'Girls': 'from-rose-600 to-rose-800',
    'Caste-based': 'from-amber-600 to-orange-800',
    'Engineering': 'from-violet-600 to-violet-800',
    'Diploma': 'from-emerald-600 to-teal-800',
    'Low Income': 'from-rose-600 to-red-800',
    'Government School': 'from-teal-600 to-teal-800',
  };

  const getColor = (category) => colorMap[category] || 'from-indigo-600 to-indigo-800';

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Breadcrumb Navigation */}
      <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-indigo-700 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
        >
          <Home size={16} />
          Home
        </button>
        <span className="text-gray-400">/</span>
        <button
          onClick={() => navigate('/scholarships')}
          className="text-indigo-700 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
        >
          Scholarships
        </button>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">{scholarship.name}</span>
      </motion.div>

      {/* Back Button */}
      <motion.button
        variants={itemVariants}
        onClick={() => navigate('/scholarships')}
        className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Scholarships
      </motion.button>

      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className={`bg-gradient-to-br ${getColor(
          scholarship.category
        )} rounded-2xl p-8 text-white shadow-lg border border-white/20`}
      >
        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">{scholarship.name}</h1>
            <span className="inline-block text-sm bg-white/20 px-4 py-1 rounded-full mb-4">
              {scholarship.category}
            </span>
            <p className="text-white/90 text-lg leading-relaxed">{scholarship.description}</p>
          </div>
          <Award size={48} className="opacity-80 flex-shrink-0" />
        </div>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={20} className="opacity-80" />
              <span className="text-sm opacity-75">Amount Offered</span>
            </div>
            <p className="text-xl font-bold">{scholarship.amount}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={20} className="opacity-80" />
              <span className="text-sm opacity-75">Deadline</span>
            </div>
            <p className="text-xl font-bold">{scholarship.deadline}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <ExternalLink size={20} className="opacity-80" />
              <span className="text-sm opacity-75">Official Portal</span>
            </div>
            <a
              href={`https://${scholarship.officialWebsite}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline truncate"
            >
              {scholarship.officialWebsite}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Apply Now Button */}
      <motion.div variants={itemVariants} className="flex gap-4">
        {scholarship.applyLink ? (
          <button
            onClick={handleApplyNow}
            disabled={isApplying}
            className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-75 disabled:cursor-not-allowed"
          >
            <CheckCircle size={20} />
            {isApplying ? 'Opening Application...' : 'Apply Now on Official Website'}
            <ExternalLink size={20} />
          </button>
        ) : (
          <div className="w-full bg-gray-100 dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle size={24} className="text-gray-500 dark:text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-1">
                Application Link Currently Unavailable
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Please visit the official website to apply or contact your institution for more details.
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Eligibility Section */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Users size={24} className="text-indigo-700 dark:text-indigo-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Eligibility Criteria
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {scholarship.eligibility}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Who Should Apply
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {scholarship.whoShouldApply}
              </p>
            </div>
          </motion.div>

          {/* Required Documents Section */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} className="text-blue-700 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Required Documents
              </h2>
            </div>
            <ul className="space-y-3">
              {scholarship.documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{doc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Application Process Section */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Award size={24} className="text-purple-700 dark:text-purple-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Application Process
              </h2>
            </div>
            <div className="space-y-3">
              {scholarship.applicationProcess.split('\n').map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-700 dark:bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Important Dates */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 rounded-lg p-6 border border-yellow-200 dark:border-slate-700 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={24} className="text-orange-600 dark:text-orange-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Important Dates</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {scholarship.importantDates}
            </p>
          </motion.div>

          {/* Applicable Courses */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 rounded-lg p-6 border border-blue-200 dark:border-slate-700 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Applicable Courses
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {scholarship.applicableCourses.map((course, index) => (
                <span
                  key={index}
                  className="bg-blue-600 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <a
              href={`https://${scholarship.officialWebsite}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg transition-colors mb-3"
            >
              Official Website
              <ExternalLink size={16} />
            </a>
            {scholarship.officialWebsite && (
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {scholarship.officialWebsite}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Related Scholarships */}
      {relatedScholarships.length > 0 && (
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Related Scholarships</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Other {scholarship.category} scholarships you might be interested in
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedScholarships.map((relScholarship) => (
              <motion.div
                key={relScholarship.id}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/scholarships/${relScholarship.id}`)}
                className={`bg-gradient-to-br ${getColor(
                  relScholarship.category
                )} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all border border-white/20 cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold">{relScholarship.name}</h3>
                  <Award size={20} className="opacity-80 flex-shrink-0" />
                </div>
                <p className="text-sm opacity-90 mb-4 line-clamp-2">
                  {relScholarship.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="opacity-80" />
                    <span className="font-semibold text-sm">{relScholarship.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="opacity-80" />
                    <span className="text-xs opacity-90">Deadline: {relScholarship.deadline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-8 border border-slate-700/50 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Not the right scholarship?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Explore more scholarship opportunities and find the perfect financial support for your
          education.
        </p>
        <button
          onClick={() => navigate('/scholarships')}
          className="bg-gradient-to-r from-indigo-700 to-violet-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 inline-block"
        >
          Browse All Scholarships
        </button>
      </motion.div>
    </motion.div>
  );
}
