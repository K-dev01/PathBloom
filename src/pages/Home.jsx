import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Target, Building2,
  Trophy, Brain, TrendingUp, Star, Clock, Users,
  Compass, BadgeCheck,
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
  { label: 'Experiences Shared', value: 250, suffix: '+', icon: Star, color: '#f59e0b' },
  { label: 'Total Colleges', value: 31, suffix: '+', icon: Building2, color: '#6366f1' },
  { label: 'Students Helped', value: 500, suffix: '+', icon: Users, color: '#10b981' },
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
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
      style={{
        boxShadow: '0 12px 40px rgba(15, 23, 42, 0.08)',
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
      <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
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
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[32px] border border-indigo-500/20 bg-white/70 p-8 shadow-[0_24px_80px_rgba(99,102,241,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 md:p-10 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_35%)]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-400/25 dark:bg-indigo-400/10 dark:text-indigo-200">
              <Sparkles size={15} />
              Trusted by students across the Cauvery Delta
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Discover a future that fits your story.
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Find the right career path, shortlist colleges, compare scholarships, and get practical guidance from real student experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              <Link to="/careers">
                <motion.button whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20">
                  Explore careers <ArrowRight size={17} />
                </motion.button>
              </Link>
              <Link to="/colleges">
                <motion.button whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-100">
                  Find colleges <Building2 size={17} />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="rounded-[28px] border border-white/60 bg-slate-950/90 p-6 text-white shadow-2xl shadow-indigo-950/20 dark:border-white/10">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <BadgeCheck size={16} />
              Guided roadmap in 3 simple steps
            </div>
            <div className="mt-5 space-y-3">
              {[
                { title: 'Choose your stream', detail: 'Start with your interests and goals after 10th or 12th.' },
                { title: 'Compare opportunities', detail: 'Explore colleges, careers and scholarships side by side.' },
                { title: 'Move forward confidently', detail: 'Use real experiences to prepare for interviews and admissions.' },
              ].map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/25 text-sm font-semibold text-indigo-200">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="mb-4 flex items-center gap-2">
          <Compass size={18} className="text-indigo-500" />
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Platform Statistics</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Explore our tools</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Everything you need to plan your next step in one place.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <motion.div variants={itemVariants}>
        <div className="mb-5 flex items-center gap-2">
          <TrendingUp size={20} className="text-indigo-400" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trending companies</h2>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
          <div className="flex flex-wrap gap-3">
            {trendingCompanies.map((co, i) => (
              <motion.button
                key={co.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200"
              >
                <span>{co.emoji}</span>
                {co.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6 lg:grid-cols-5">

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
              className="cursor-pointer rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {exp.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{exp.company}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{exp.role}</span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">{exp.college}</p>
                </div>
                <div className="flex-shrink-0 text-amber-400 text-xs">
                  {'★'.repeat(exp.rating)}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">{exp.excerpt}</p>
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
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
            {recentFeed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 3 }}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors dark:border-white/10 dark:bg-slate-800/60"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.1)' }}>
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-900 dark:text-white">{item.company} — {item.role}</p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">{item.college}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="badge badge-cauvery" style={{ fontSize: '0.6rem' }}>🌊 {item.district}</span>
                  </div>
                </div>
                <span className="flex-shrink-0 text-xs text-slate-500 dark:text-slate-400">{item.timeAgo}</span>
              </motion.div>
            ))}
            <Link to="/colleges">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="mt-2 w-full rounded-xl border border-indigo-200 bg-indigo-50 py-2.5 text-xs font-semibold text-indigo-600 transition-colors dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300"
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
