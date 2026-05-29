import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const features = [
    {
      title: 'Career Guidance',
      description: 'Discover your perfect career path with our expert guidance',
      icon: '🎯',
      gradient: 'from-blue-700 to-blue-900',
    },
    {
      title: 'College Explorer',
      description: 'Find the best colleges suited for your goals',
      icon: '🏫',
      gradient: 'from-violet-700 to-violet-900',
    },
    {
      title: 'Scholarship Finder',
      description: 'Discover scholarships and financial aid opportunities',
      icon: '🎓',
      gradient: 'from-rose-600 to-rose-800',
    },
    {
      title: 'Career Quiz',
      description: 'Take our quiz to find your ideal career',
      icon: '🧠',
      gradient: 'from-emerald-700 to-teal-900',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 via-violet-800/10 to-rose-800/10 rounded-3xl blur-3xl -z-10" />
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <div className="max-w-2xl">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 flex items-center gap-3"
            >
              <Sparkles className="text-amber-400" size={40} />
              Welcome to PathBloom
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 mb-6"
            >
              Your personal guide to discovering the right career path, finding the perfect college,
              and unlocking your full potential.
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all border border-white/10`}
            >
              <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Students Guided', value: '50K+' },
          { label: 'Colleges Listed', value: '5K+' },
          { label: 'Career Paths', value: '500+' },
          { label: 'Success Rate', value: '98%' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur rounded-xl p-6 text-center border border-white/20 dark:border-slate-700/50"
          >
            <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
