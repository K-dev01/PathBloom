import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Star, Building2, Zap, Users, Trophy, CheckCircle, Clock, DollarSign } from 'lucide-react';
import careersData from '../data/careers.json';
import collegesData from '../data/colleges.json';

export default function After12th() {
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

  const programs = [
    {
      title: 'Engineering (BE/BTech)',
      duration: '4 Years',
      description: 'TNEA / JEE Main & Advanced entrance exams',
      opportunities: ['Computer Science', 'ECE', 'Mechanical', 'Civil'],
      color: 'from-blue-700 to-blue-900',
      exam: 'TNEA / JEE',
    },
    {
      title: 'Medical Courses',
      duration: '5.5-6 Years',
      description: 'NEET entrance examination required',
      opportunities: ['MBBS', 'BDS', 'BHMS', 'BAMS'],
      color: 'from-emerald-700 to-teal-900',
      exam: 'NEET',
    },
    {
      title: 'Commerce & Management',
      duration: '3-5 Years',
      description: 'Accounting, business, and management careers',
      opportunities: ['BBA', 'BCom', 'CA', 'CMA'],
      color: 'from-violet-700 to-violet-900',
      exam: 'Cut-off based',
    },
    {
      title: 'Arts & Science',
      duration: '3 Years',
      description: 'Traditional degree programs with flexibility',
      opportunities: ['BA', 'BSc', 'Teaching', 'Research'],
      color: 'from-rose-600 to-rose-800',
      exam: 'Merit based',
    },
  ];

  const tnCounselingSteps = [
    {
      step: 1,
      title: 'Register for TNEA',
      description: 'Apply online on the TNEA website after 12th board results',
      timeline: 'June-July',
    },
    {
      step: 2,
      title: 'Merit List Released',
      description: 'Government releases merit list based on 12th marks',
      timeline: 'July-August',
    },
    {
      step: 3,
      title: 'Counseling Round',
      description: 'Attend counseling, enter college and course preferences',
      timeline: 'August-September',
    },
    {
      step: 4,
      title: 'Seat Allotment',
      description: 'Receive college allocation based on preferences and merit',
      timeline: 'September',
    },
    {
      step: 5,
      title: 'Admission Process',
      description: 'Complete document verification and fee payment',
      timeline: 'September-October',
    },
  ];

  const governmentVsPrivate = [
    {
      aspect: 'Annual Fees',
      government: '₹10,000 - ₹30,000',
      private: '₹150,000 - ₹250,000',
    },
    {
      aspect: 'Admission Process',
      government: 'TNEA Counseling (Merit-based)',
      private: 'Separate counseling or entrance',
    },
    {
      aspect: 'Quality',
      government: 'Excellent - Govt regulation',
      private: 'Variable - depends on institute',
    },
    {
      aspect: 'Placement Average',
      government: '₹4-5 LPA',
      private: '₹5-7 LPA',
    },
    {
      aspect: 'Facilities',
      government: 'Basic but improving',
      private: 'Modern facilities',
    },
  ];

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
          <GraduationCap size={28} className="text-purple-500" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Higher Education After 12th in Tamil Nadu
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore engineering, medical, commerce, and arts options with TNEA counseling process and entrance exams
        </p>
      </motion.div>

      {/* Programs Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {programs.map((program, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className={`bg-gradient-to-br ${program.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all border border-white/20`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="text-white/80 text-sm mt-1">Duration: {program.duration}</p>
              </div>
              <Star size={24} className="text-yellow-300" />
            </div>

            <p className="text-white/90 mb-4">{program.description}</p>

            <div className="mb-4 bg-white/20 rounded-lg p-3">
              <p className="text-xs opacity-80 font-semibold mb-1">Entrance Exam:</p>
              <p className="text-sm font-bold">{program.exam}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 opacity-90">Top Opportunities:</h4>
              <div className="grid grid-cols-2 gap-2">
                {program.opportunities.map((opp, idx) => (
                  <div
                    key={idx}
                    className="bg-white/20 px-3 py-2 rounded-lg text-sm backdrop-blur text-center"
                  >
                    {opp}
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="mt-6 w-full bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors backdrop-blur"
            >
              Explore Programs
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* TNEA Counseling Process */}
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <Zap size={32} className="text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            TNEA Engineering Counseling Process
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          TNEA (Tamil Nadu Engineering Admissions) is the primary counseling process for engineering college admissions across Tamil Nadu government and affiliated colleges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tnCounselingSteps.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-800 rounded-xl p-6 border border-blue-200 dark:border-slate-600 min-h-48 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow mb-3">{item.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                  <Clock size={14} />
                  {item.timeline}
                </div>
              </div>
              {idx < tnCounselingSteps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-4 h-0.5 bg-blue-400 translate-x-full" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Government vs Private Colleges Comparison */}
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Government Engineering Colleges vs Private Colleges
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-slate-600">
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Aspect</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Government Colleges</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Private Colleges</th>
              </tr>
            </thead>
            <tbody>
              {governmentVsPrivate.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                  <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-300">{row.aspect}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-400">✅ {row.government}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-400">✅ {row.private}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Featured Government Colleges */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Top Government Engineering Colleges in Tamil Nadu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegesData.collegesByDistrict
            .flatMap(d => d.colleges)
            .filter(c => c.type.includes('Government'))
            .slice(0, 4)
            .map((college, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-green-200 dark:border-slate-700"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{college.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Building2 size={14} className="inline mr-1" />
                  Specializations: {college.courses.slice(0, 3).join(', ')}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Fees:</span> {college.approximateFees}
                  </p>
                  {college.placementInfo && (
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Avg Placement:</span> {college.placementInfo.averagePackage}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Government Jobs & TNPSC Info */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-orange-200 dark:border-slate-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <Trophy size={32} className="text-orange-600 dark:text-orange-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Government Jobs Through TNPSC
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          After completing your 12th or bachelor's degree, you can appear for TNPSC (Tamil Nadu Public Service Commission) examinations to secure stable government positions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Users size={20} className="text-blue-600" />
              Group I & II
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Administrative and supervisory positions in government
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>Salary:</strong> ₹56,100 - ₹1,50,000/month
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Zap size={20} className="text-yellow-600" />
              Group IV
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Clerical and supportive staff in government departments
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>Salary:</strong> ₹22,000 - ₹50,000/month
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-600" />
              Other Services
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Police, forest, and other specialized services
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>Varied salaries:</strong> By department
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tips Section */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-8 border border-slate-700/50"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Tips for Choosing Your Path After 12th</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: 'Assess Your Interests', 
              desc: 'Identify your strengths: Engineering, Medicine, Commerce, Arts, or Government Jobs?',
              icon: '🎯'
            },
            { 
              title: 'Prepare for Exams', 
              desc: 'TNEA (Engineering), NEET (Medical), or TNPSC (Government Jobs)',
              icon: '📚'
            },
            { 
              title: 'Research Colleges', 
              desc: 'Compare government colleges (affordable) vs private colleges (facilities)',
              icon: '🏫'
            },
          ].map((tip, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-3xl flex-shrink-0">{tip.icon}</div>
              <div>
                <h4 className="font-bold text-white mb-2">{tip.title}</h4>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Consultation CTA */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-violet-700 to-rose-700 rounded-2xl p-8 border border-violet-600/40 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Confused About Your Next Step?
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Get personalized guidance from our career counselors who understand the Tamil Nadu education system, TNEA process, and career opportunities.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-violet-800 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Schedule Free Consultation
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
