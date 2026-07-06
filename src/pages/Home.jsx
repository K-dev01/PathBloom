import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Target, Building2,
  Trophy, Brain, TrendingUp, Star, Clock, Users,
} from 'lucide-react';

/* ── Animated counter hook ── */
function useCountUp(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return count;
}

/* ── Data ── */
const stats = [
  { label: 'Experiences Shared', value: 12480, suffix: '+', icon: Star, color: '#f59e0b' },
  { label: 'Total Colleges', value: 31, suffix: '+', icon: Building2, color: '#6366f1' },
  { label: 'Students Helped', value: 50000, suffix: '+', icon: Users, color: '#10b981' },
  { label: 'Success Rate', value: 98, suffix: '%', icon: TrendingUp, color: '#ec4899' },
];

const features = [
  {
    title: 'Career Guidance',
    description: 'Discover your ideal career path with expert guidance tailored for you.',
    icon: Target,
    path: '/careers',
    gradient: 'from-blue-600 to-indigo-700',
    glow: 'rgba(99,102,241,0.35)',
  },
  {
    title: 'College Explorer',
    description: 'Find the best colleges in Tamil Nadu and the Cauvery Delta region.',
    icon: Building2,
    path: '/colleges',
    gradient: 'from-violet-600 to-purple-800',
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    title: 'Scholarship Finder',
    description: 'Unlock financial aid and scholarships suited to your background.',
    icon: Trophy,
    path: '/scholarships',
    gradient: 'from-rose-600 to-pink-800',
    glow: 'rgba(244,63,94,0.35)',
  },
  {
    title: 'Career Quiz',
    description: 'Take our smart quiz to discover the career that fits your personality.',
    icon: Brain,
    path: '/quiz',
    gradient: 'from-emerald-600 to-teal-800',
    glow: 'rgba(16,185,129,0.35)',
  },
];

const trendingCompanies = [
  { name: 'TCS', emoji: '💼' },
  { name: 'Infosys', emoji: '🖥️' },
  { name: 'Wipro', emoji: '🌐' },
  { name: 'Cognizant', emoji: '🧠' },
  { name: 'Google', emoji: '🔍' },
  { name: 'Amazon', emoji: '📦' },
  { name: 'Microsoft', emoji: '🪟' },
  { name: 'Zoho', emoji: '⚡' },
  { name: 'HCL', emoji: '💻' },
  { name: 'Accenture', emoji: '🚀' },
  { name: 'Tech Mahindra', emoji: '📡' },
  { name: 'ISRO', emoji: '🛸' },
];

const topExperiences = [
  {
    id: 1,
    company: 'TCS',
    emoji: '💼',
    college: 'SASTRA University, Thanjavur',
    role: 'System Engineer',
    rating: 5,
    excerpt: 'The interview had 3 rounds — aptitude, technical, and HR. Focus on data structures and be confident in your basics. The TCS NQT score matters a lot.',
    tags: ['On-Campus', '2024', 'CSE'],
    timeAgo: '2 days ago',
  },
  {
    id: 2,
    company: 'Zoho',
    emoji: '⚡',
    college: 'AVC College of Engineering, Nagapattinam',
    role: 'Junior Software Developer',
    rating: 5,
    excerpt: 'Zoho tests your problem-solving skills deeply. Practice coding, and be ready to explain every line you write. 6 rounds in total including written test.',
    tags: ['Off-Campus', '2024', 'CSE'],
    timeAgo: '5 days ago',
  },
  {
    id: 3,
    company: 'Infosys',
    emoji: '🖥️',
    college: 'Government Engineering College, Thanjavur',
    role: 'Systems Engineer',
    rating: 4,
    excerpt: 'Resume shortlist → online aptitude → technical → HR. Very friendly interviewers. Know your projects well and practice aptitude from InfyTQ platform.',
    tags: ['On-Campus', '2024', 'ECE'],
    timeAgo: '1 week ago',
  },
];

const recentFeed = [
  { company: 'Cognizant', emoji: '🧠', college: 'EGS Pillay Engineering', role: 'Programmer Analyst', timeAgo: '3 hrs ago', district: 'Nagapattinam' },
  { company: 'Wipro', emoji: '🌐', college: 'PRIST University', role: 'Project Engineer', timeAgo: '8 hrs ago', district: 'Thanjavur' },
  { company: 'HCL', emoji: '💻', college: 'Central University of TN', role: 'Graduate Engineer', timeAgo: '1 day ago', district: 'Thiruvarur' },
  { company: 'Accenture', emoji: '🚀', college: 'AVC College (Autonomous)', role: 'Associate', timeAgo: '2 days ago', district: 'Mayiladuthurai' },
];

/* ── Stat Card ── */
function StatCard({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCountUp(stat.value, 1800, inView);
  const Icon = stat.icon;
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, scale: 1.03 }}
      className="rounded-2xl p-6 text-center relative overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(16px)',
        boxShadow: `0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)`,
      }}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top, ${stat.color}18, transparent 70%)` }} />
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
        style={{ background: `${stat.color}22`, border: `1px solid ${stat.color}44` }}>
        <Icon size={22} style={{ color: stat.color }} />
      </div>
      <div className="text-3xl font-black tracking-tight" style={{ color: stat.color }}>
        {count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count}{stat.suffix}
      </div>
      <div className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</div>
    </motion.div>
  );
}

/* ── Main ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Home() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-10">

      {/* ── Hero ── */}
      <motion.div variants={itemVariants} className="relative">
        {/* Background glow orbs */}
        <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full pointer-events-none opacity-25"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute -bottom-8 right-0 w-56 h-56 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(40px)' }} />

        <div
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(15,14,40,0.9) 0%, rgba(30,27,75,0.8) 100%)',
            border: '1px solid rgba(99,102,241,0.3)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
          }}
        >
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(139,92,246,0.6), transparent)' }} />

          <div className="max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(99,102,241,0.2)',
                border: '1px solid rgba(99,102,241,0.4)',
                color: '#a5b4fc',
              }}
            >
              <Sparkles size={14} /> Cauvery Delta's #1 Career Platform
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
            >
              Bloom Your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #818cf8, #c084fc, #fb7185)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Path Forward
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 leading-relaxed">
              Your personal guide to discovering the right career, finding the perfect college near you,
              and unlocking your full potential — built for students in Tamil Nadu.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/careers">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-sm"
                >
                  Explore Careers <ArrowRight size={17} />
                </motion.button>
              </Link>
              <Link to="/colleges">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-glass px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-sm"
                >
                  Find Colleges <Building2 size={17} />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative grid pattern */}
          <div className="absolute bottom-0 right-0 w-80 h-64 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 32px)',
              maskImage: 'radial-gradient(ellipse at bottom right, black 0%, transparent 70%)',
            }} />
        </div>
      </motion.div>

      {/* ── Animated Stats ── */}
      <motion.div variants={itemVariants}>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
        </div>
      </motion.div>

      {/* ── Features ── */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">Explore Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link to={feature.path} key={feature.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 text-white relative overflow-hidden h-full cursor-pointer`}
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: `0 8px 32px ${feature.glow}`,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }} />
                  <div className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{feature.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-white/60 text-xs font-medium">
                    Explore <ArrowRight size={12} />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* ── Trending Companies ── */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={20} className="text-indigo-400" />
          <h2 className="text-2xl font-bold dark:text-white text-gray-900">Trending Companies</h2>
        </div>
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="flex flex-wrap gap-3">
            {trendingCompanies.map((co, i) => (
              <motion.button
                key={co.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <span>{co.emoji}</span>
                {co.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Two-column: Top Experiences + Recent Feed ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Top-Rated Experiences */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Star size={18} className="text-amber-400 fill-amber-400" />
            <h2 className="text-xl font-bold dark:text-white text-gray-900">Top-Rated Experiences</h2>
          </div>
          {topExperiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.12 }}
              whileHover={{ x: 4 }}
              className="rounded-2xl p-5 cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(14px)',
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {exp.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white text-sm">{exp.company}</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{exp.role}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5 truncate">{exp.college}</p>
                </div>
                <div className="flex-shrink-0 text-amber-400 text-xs">
                  {'★'.repeat(exp.rating)}
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{exp.excerpt}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {exp.tags.map((t) => (
                  <span key={t} className="badge badge-indigo">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={18} className="text-emerald-400" />
            <h2 className="text-xl font-bold dark:text-white text-gray-900">Recent Experiences</h2>
          </div>
          <div
            className="rounded-2xl p-4 space-y-3"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(14px)',
            }}
          >
            {recentFeed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.1)' }}>
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-semibold truncate">{item.company} — {item.role}</p>
                  <p className="text-gray-500 text-xs truncate">{item.college}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="badge badge-cauvery" style={{ fontSize: '0.6rem' }}>🌊 {item.district}</span>
                  </div>
                </div>
                <span className="text-gray-600 text-xs flex-shrink-0">{item.timeAgo}</span>
              </motion.div>
            ))}
            <Link to="/colleges">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full mt-2 py-2.5 rounded-xl text-xs font-semibold text-indigo-400 transition-colors"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)' }}
              >
                View All Experiences →
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
