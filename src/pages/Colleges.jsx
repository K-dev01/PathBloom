import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, BookOpen, ArrowRight,
  Search, Home, Briefcase, DollarSign,
  MessageSquare, Star, Filter,
} from 'lucide-react';
import collegesData from '../data/colleges.json';

const colorMap = {
  'Premier Institute': { from: '#1d4ed8', to: '#1e3a8a' },
  'Government Engineering': { from: '#047857', to: '#064e3b' },
  'Private Engineering': { from: '#6d28d9', to: '#4c1d95' },
  'Government Arts & Science': { from: '#0f766e', to: '#134e4a' },
  'Private Arts & Science': { from: '#be123c', to: '#881337' },
  'Government Diploma': { from: '#b45309', to: '#78350f' },
  'State University': { from: '#3730a3', to: '#1e1b4b' },
  'University': { from: '#9d174d', to: '#500724' },
};

const getGradient = (type) => {
  const c = colorMap[type] || { from: '#4338ca', to: '#312e81' };
  return `linear-gradient(135deg, ${c.from}, ${c.to})`;
};

const typeEmoji = {
  'Premier Institute': '⭐',
  'Government Engineering': '🏗️',
  'Private Engineering': '⚙️',
  'Government Arts & Science': '📖',
  'Private Arts & Science': '🎨',
  'Government Diploma': '📜',
  'State University': '🏛️',
  'University': '🎓',
};

const cauveryDistricts = collegesData.cauveryDeltaDistricts || [];

export default function Colleges() {
  const [selectedDistrict, setSelectedDistrict] = useState(
    collegesData.collegesByDistrict[0]?.district || ''
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [showCauveryOnly, setShowCauveryOnly] = useState(false);

  const allCollegeCount = useMemo(
    () => collegesData.collegesByDistrict.reduce((a, d) => a + d.colleges.length, 0),
    []
  );
  const cauveryColleges = useMemo(
    () =>
      collegesData.collegesByDistrict
        .filter((d) => cauveryDistricts.includes(d.district))
        .flatMap((d) => d.colleges.map((c) => ({ ...c, district: d.district }))),
    []
  );

  const districtData = collegesData.collegesByDistrict.find((d) => d.district === selectedDistrict);
  const filteredColleges = (districtData?.colleges || []).filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">

      {/* ── Header ── */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)' }}>
            <Building2 size={20} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900">Tamil Nadu Colleges</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          Discover <span className="text-indigo-500 font-semibold">{allCollegeCount}+</span> colleges across Tamil Nadu — courses, fees, placements & more.
        </p>
      </motion.div>

      {/* ── Cauvery Delta Featured Section ── */}
      <motion.div variants={itemVariants}>
        <div
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))',
            border: '1px solid rgba(16,185,129,0.3)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Decorative orb */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)' }} />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🌊</span>
            <div>
              <h2 className="text-xl font-bold text-emerald-400">Nearby Colleges — Cauvery Delta Region</h2>
              <p className="text-sm text-emerald-300/70">Nagapattinam · Thiruvarur · Thanjavur · Mayiladuthurai</p>
            </div>
            <span className="ml-auto badge badge-cauvery">{cauveryColleges.length} colleges</span>
          </div>

          {/* Cauvery district quick-jump pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {cauveryDistricts.map((d) => (
              <button
                key={d}
                onClick={() => { setSelectedDistrict(d); setShowCauveryOnly(false); }}
                className="district-tag"
                style={selectedDistrict === d ? {
                  background: 'linear-gradient(135deg,#10b981,#06b6d4)',
                  color: 'white',
                  border: '1px solid transparent',
                  boxShadow: '0 4px 14px rgba(16,185,129,0.4)',
                } : {}}
              >
                📍 {d}
              </button>
            ))}
          </div>

          {/* Top 4 Cauvery Delta cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cauveryColleges.slice(0, 4).map((college) => (
              <motion.div
                key={college.id}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-xl p-4 flex flex-col gap-2 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{college.emoji || '🏫'}</span>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{college.district}</span>
                </div>
                <p className="text-white font-semibold text-sm leading-tight">{college.name}</p>
                <div className="flex gap-2 mt-auto flex-wrap">
                  <span className="badge badge-indigo">
                    <Users size={10} /> {(college.studentCount || 0).toLocaleString()} students
                  </span>
                  <span className="badge badge-emerald">
                    <MessageSquare size={10} /> {college.interviewExperienceCount || 0} exp
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Controls Row ── */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Search */}
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-xl flex-1 min-w-0"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Search size={18} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search colleges by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-500"
          />
        </div>

        {/* Cauvery filter toggle */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowCauveryOnly((v) => !v)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold flex-shrink-0 transition-all"
          style={showCauveryOnly ? {
            background: 'linear-gradient(135deg,#10b981,#06b6d4)',
            color: 'white',
            border: '1px solid transparent',
            boxShadow: '0 4px 16px rgba(16,185,129,0.4)',
          } : {
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.14)',
            color: '#9ca3af',
          }}
        >
          <Filter size={16} />
          Cauvery Delta Only
        </motion.button>
      </motion.div>

      {/* ── District Pills ── */}
      <motion.div variants={itemVariants}>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Browse by District</p>
        <div className="flex gap-2 flex-wrap">
          {collegesData.collegesByDistrict.map((d) => {
            const isCauvery = cauveryDistricts.includes(d.district);
            return (
              <motion.button
                key={d.district}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setSelectedDistrict(d.district); setShowCauveryOnly(false); }}
                className="district-tag flex items-center gap-1"
                style={selectedDistrict === d.district && !showCauveryOnly ? {
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  color: 'white',
                  border: '1px solid transparent',
                  boxShadow: '0 4px 14px rgba(99,102,241,0.4)',
                } : {}}
              >
                {isCauvery && <span className="text-emerald-400 text-xs">●</span>}
                {d.district}
                <span className="opacity-50 text-xs">({d.colleges.length})</span>
              </motion.button>
            );
          })}
        </div>
        {!showCauveryOnly && (
          <p className="text-xs text-gray-600 dark:text-gray-500 mt-2">
            <span className="text-emerald-400">●</span> = Cauvery Delta district
          </p>
        )}
      </motion.div>

      {/* ── College Grid ── */}
      <AnimatePresence mode="wait">
        {showCauveryOnly ? (
          <motion.div
            key="cauvery-grid"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cauveryColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </motion.div>
        ) : (
          <motion.div key="district-grid" variants={itemVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {filteredColleges.length} college{filteredColleges.length !== 1 ? 's' : ''} in{' '}
                <span className="text-indigo-400">{selectedDistrict}</span>
                {searchTerm && <span className="text-gray-400 font-normal"> matching "{searchTerm}"</span>}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredColleges.length > 0
                ? filteredColleges.map((college) => <CollegeCard key={college.id} college={college} />)
                : (
                  <div className="col-span-full text-center py-16 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Building2 size={44} className="mx-auto text-gray-600 mb-3" />
                    <p className="text-gray-400">No colleges match your search. Try a different term.</p>
                  </div>
                )
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Affordable Section ── */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-5 flex items-center gap-2">
          <DollarSign size={22} className="text-emerald-400" /> Most Affordable Government Colleges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collegesData.affordableColleges.map((college, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="rounded-xl p-5 flex flex-col gap-2"
              style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p className="font-bold text-white text-sm">{college.name}</p>
              <p className="text-xs text-emerald-400">📍 {college.district}</p>
              <p className="text-xs text-gray-400"><span className="font-semibold text-gray-300">Fees:</span> {college.fees}</p>
              <p className="text-xs text-gray-400"><span className="font-semibold text-gray-300">Avg Package:</span> {college.placement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
}

function CollegeCard({ college }) {
  const isCauvery = college.isCauveryDelta;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl p-6 text-white flex flex-col relative overflow-hidden"
      style={{
        background: getGradient(college.type),
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Glass shimmer overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />

      {/* Cauvery badge */}
      {isCauvery && (
        <div className="absolute top-3 right-3">
          <span className="badge badge-cauvery">🌊 Cauvery</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
          {college.emoji || typeEmoji[college.type] || '🏫'}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base leading-tight">{college.name}</h3>
          <p className="text-xs opacity-70 mt-1 flex items-center gap-1">
            <Building2 size={11} /> {college.type}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2 flex-1">
        <div className="flex items-start gap-2 text-sm opacity-85">
          <BookOpen size={15} className="flex-shrink-0 mt-0.5" />
          <span className="text-xs">{college.courses.join(', ')}</span>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-85">
          <DollarSign size={15} className="flex-shrink-0" />
          <span className="text-xs">{college.approximateFees}</span>
        </div>
        {college.hostelAvailable && (
          <div className="flex items-center gap-2 text-xs opacity-75">
            <Home size={13} className="flex-shrink-0" /> Hostel Available
          </div>
        )}

        {/* Student & experience counts */}
        {(college.studentCount || college.interviewExperienceCount) && (
          <div className="flex gap-2 flex-wrap mt-2">
            {college.studentCount && (
              <span className="badge" style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', fontSize: '0.65rem' }}>
                <Users size={10} /> {college.studentCount.toLocaleString()} students
              </span>
            )}
            {college.interviewExperienceCount && (
              <span className="badge" style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', fontSize: '0.65rem' }}>
                <MessageSquare size={10} /> {college.interviewExperienceCount} experiences
              </span>
            )}
          </div>
        )}

        {/* Placement info */}
        {college.placementInfo && (
          <div className="rounded-lg p-3 mt-2" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-xs opacity-60 font-semibold mb-1 uppercase tracking-wider">Placements</p>
            <p className="text-xs"><Briefcase size={11} className="inline mr-1" />Avg: {college.placementInfo.averagePackage}</p>
            <p className="text-xs mt-0.5"><Star size={11} className="inline mr-1" />Highest: {college.placementInfo.highestPackage}</p>
          </div>
        )}
      </div>

      <motion.button
        whileHover={{ x: 4 }}
        className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)' }}
      >
        View Details <ArrowRight size={15} />
      </motion.button>
    </motion.div>
  );
}
