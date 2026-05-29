import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, GraduationCap, Building2 } from 'lucide-react';
import collegesData from '../data/colleges.json';

export default function After10th() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const pathways = [
    { title: 'Science Stream (11-12)', subjects: ['Physics', 'Chemistry', 'Biology/Maths'], careers: ['Engineering', 'Medicine', 'Research'], color: 'from-blue-700 to-blue-900', details: 'Best for students interested in technology, engineering, and higher studies' },
    { title: 'Commerce Stream (11-12)', subjects: ['Accounts', 'Economics', 'Business Studies'], careers: ['Accounting', 'Business', 'Finance'], color: 'from-violet-700 to-violet-900', details: 'Perfect for aspiring entrepreneurs, accountants, and business professionals' },
    { title: 'Humanities Stream (11-12)', subjects: ['History', 'Geography', 'Political Science'], careers: ['Law', 'Journalism', 'Civil Services'], color: 'from-rose-600 to-rose-800', details: 'Ideal for TNPSC preparation, law, and public administration careers' },
    { title: 'Polytechnic Diploma (3 Years)', subjects: ['Mechanical', 'Electrical', 'Civil', 'CSE'], careers: ['Technician', 'Supervisor', 'Technical Jobs'], color: 'from-emerald-700 to-teal-900', details: 'Direct admission after 10th with strong placement opportunities' },
  ];

  const tnPolytechnicInfo = [
    { title: 'Lower Entry Requirements', description: 'No need to appear for 12th board exam - admission after 10th', icon: '🎓' },
    { title: 'Shorter Duration', description: '3-year diploma vs 4-year engineering degree', icon: '⏱️' },
    { title: 'Practical Skills', description: 'Hands-on training with laboratory and workshop facilities', icon: '🔧' },
    { title: 'Job-Focused Curriculum', description: 'Directly aligned with industry needs and job market', icon: '💼' },
    { title: 'Government Support', description: 'Scholarships and fee waivers available in TN government polytechnics', icon: '💰' },
    { title: 'Lateral Entry to BE', description: 'Can pursue BE/BTech after diploma completion', icon: '📈' },
  ];

  const tnAilCourses = [
    { name: 'Polytechnic Engineering', duration: '3 Years', fees: '₹5,000 - ₹15,000/year', placement: '₹2 - ₹5 LPA', color: 'from-amber-700 to-orange-900' },
    { name: 'ITI Courses', duration: '1-2 Years', fees: '₹3,000 - ₹8,000/year', placement: '₹1.5 - ₹3 LPA', color: 'from-teal-600 to-teal-800' },
    { name: 'Skill Development', duration: '6-12 Months', fees: 'Free to ₹10,000', placement: '₹1.5 - ₹3 LPA', color: 'from-indigo-700 to-indigo-900' },
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 mb-4">
          <BookOpen size={28} className="text-blue-700 dark:text-blue-400" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Education After 10th in Tamil Nadu</h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">Explore various educational pathways and opportunities available for 10th pass students across Tamil Nadu</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Path Forward</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => (
            <motion.div key={index} whileHover={{ y: -8 }} className={`bg-gradient-to-br ${pathway.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all border border-white/10`}>
              <h3 className="text-2xl font-bold mb-2">{pathway.title}</h3>
              <p className="text-sm opacity-80 mb-4">{pathway.details}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 opacity-80">Core Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pathway.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-white/15 px-3 py-1 rounded-full text-sm backdrop-blur">{subject}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 opacity-80">Career Options:</h4>
                  <ul className="space-y-1">
                    {pathway.careers.map((career, idx) => (
                      <li key={idx} className="flex items-center gap-2"><ArrowRight size={16} />{career}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.button whileHover={{ x: 5 }} className="mt-6 bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors backdrop-blur">
                Learn More <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-emerald-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={32} className="text-emerald-700 dark:text-emerald-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tamil Nadu Polytechnic Counseling</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Polytechnic courses are a popular choice for students seeking shorter, skill-focused education. Many government polytechnics in Tamil Nadu offer excellent placement opportunities.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tnAilCourses.map((course, idx) => (
            <motion.div key={idx} whileHover={{ y: -4 }} className={`bg-gradient-to-br ${course.color} rounded-xl p-6 text-white`}>
              <h3 className="text-lg font-bold mb-3">{course.name}</h3>
              <div className="space-y-2 text-sm">
                <p><span className="opacity-75">Duration:</span> {course.duration}</p>
                <p><span className="opacity-75">Annual Fees:</span> {course.fees}</p>
                <p><span className="opacity-75">Avg Placement:</span> {course.placement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Polytechnic in Tamil Nadu?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tnPolytechnicInfo.map((item, idx) => (
            <motion.div key={idx} whileHover={{ x: 4 }} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 flex gap-4">
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Most Affordable Polytechnic Colleges in TN</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegesData.affordableColleges.filter(c => c.fees.includes('₹5,000') || c.fees.includes('₹15,000')).map((college, idx) => (
            <motion.div key={idx} whileHover={{ y: -4 }} className="bg-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{college.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">📍 {college.district}</p>
                </div>
                <Building2 size={24} className="text-blue-700 dark:text-blue-400" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Fees:</span> {college.fees}</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Avg Placement:</span> {college.placement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">12th + Engineering vs Polytechnic (3-Year Diploma)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Factor</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">12th + Engineering (4 Years)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Polytechnic (3 Years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Total Duration', '6 Years (2+4)', '3 Years'],
                ['Estimated Fees', '₹3,00,000 - ₹20,00,000', '₹15,000 - ₹45,000'],
                ['Entry into Workforce', 'After 6 years', 'After 3 years'],
                ['Avg Starting Salary', '₹4 - ₹6 LPA', '₹2.5 - ₹4 LPA'],
                ['Further Studies', 'ME/MTech, MBA', 'BE via Lateral Entry'],
              ].map(([factor, eng, poly], idx) => (
                <tr key={idx} className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-300">{factor}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-400">{eng}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-400">{poly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gradient-to-r from-indigo-700 to-violet-800 rounded-2xl p-8 border border-indigo-600/40">
        <h3 className="text-2xl font-bold text-white mb-4">Need Help Choosing Your Path?</h3>
        <p className="text-white/80 mb-6">Our career counselors understand the Tamil Nadu education system and can guide you based on your marks, interests, and career aspirations.</p>
        <motion.button whileHover={{ scale: 1.05 }} className="bg-white text-indigo-800 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
          Book a Free Consultation
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
