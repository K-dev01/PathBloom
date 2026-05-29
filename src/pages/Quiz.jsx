import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Brain, ArrowRight, CheckCircle, RotateCcw } from 'lucide-react';
import questionsData from '../data/careerQuizQuestions.json';
import careerMappings from '../data/careerMappings.json';
import careerPathways from '../data/careerPathways.json';
import ResultDashboard from '../components/ResultDashboard';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState(null);

  const questions = questionsData.questions;

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

  const handleAnswer = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setResultData(null);
  };

  const computeResults = () => {
    // initialize trait scores
    const traits = {};
    questionsData.traits.forEach((t) => (traits[t] = 0));

    // accumulate effects from selected answers
    Object.keys(selectedAnswers).forEach((qIdx) => {
      const q = questions.find((qq) => qq.id === questions[Number(qIdx)].id) || questions[Number(qIdx)];
      const sel = selectedAnswers[qIdx];
      if (!q || !sel) return;
      const opt = q.options.find((o) => o.label === sel || o === sel);
      if (!opt) return;
      const effects = opt.effects || {};
      Object.keys(effects).forEach((k) => {
        traits[k] = (traits[k] || 0) + effects[k];
      });
    });

    // compute career match scores
    const careerScores = careerMappings.careers.map((c) => {
      const req = c.requiredTraits || {};
      let score = 0;
      let totalWeight = 0;
      Object.keys(req).forEach((k) => {
        const need = req[k] || 1;
        totalWeight += need;
        const have = traits[k] || 0;
        // partial credit relative to need
        score += Math.min(have / (need * 2), 1) * need;
      });
      let pct = totalWeight ? (score / totalWeight) * 100 : 0;
      // boost for TN relevance strings that mention High
      if (c.tn_relevance && String(c.tn_relevance).toLowerCase().includes('high')) pct = Math.min(100, pct + 6);
      return { id: c.id, title: c.title, score: Math.round(pct * 10) / 10, summary: c.category, raw: c };
    });

    careerScores.sort((a, b) => b.score - a.score);

    // derive recommended stream from dominant traits
    const t = traits;
    let recommendedStream = 'General (explore options)';
    const techScore = (t.technology || 0) + (t.logic || 0);
    const busScore = (t.business || 0) + (t.financeAware || 0);
    const hands = t.handsOn || 0;
    const creative = t.creativity || 0;
    const gov = t.govInterest || 0;

    if (techScore >= 3 && techScore >= busScore && techScore >= creative) recommendedStream = 'Science with Computer Science';
    else if (busScore >= 3 && busScore > techScore) recommendedStream = 'Commerce with Accountancy / Finance focus';
    else if (hands >= 3) recommendedStream = 'Polytechnic Diploma / ITI - Practical trade route';
    else if (creative >= 3) recommendedStream = 'Arts & Design / Creative Media';
    else if (gov >= 3) recommendedStream = 'Public Service / TNPSC Preparation';

    // map pathways and suggestions
    const topCareer = careerScores[0];
    const pathways = [];
    if (topCareer) {
      const pId = topCareer.raw.pathwayId;
      if (pId) {
        const p = careerPathways.pathways.find((pp) => pp.id === pId);
        if (p) pathways.push(p);
      }
    }

    // collect college and scholarship suggestions from top 3 careers
    const colleges = [];
    const scholarships = [];
    careerScores.slice(0, 3).forEach((c) => {
      const raw = c.raw;
      if (raw.budgetTips) raw.budgetTips.forEach((b) => colleges.push(b));
      if (raw.scholarships) raw.scholarships.forEach((s) => scholarships.push(s));
    });

    // prepare trait list for charts
    const traitList = questionsData.traits.map((k) => ({ key: k, value: traits[k] || 0 }));
    const maxTrait = Math.max(...traitList.map((t2) => t2.value), 4);

    const result = {
      topMatches: careerScores.slice(0, 6),
      traits: traitList,
      maxTrait,
      recommendedStream,
      pathways,
      colleges: colleges.slice(0, 6),
      scholarships: scholarships.slice(0, 6),
    };

    setResultData(result);
    setShowResults(true);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 mb-4">
          <Brain size={28} className="text-purple-500" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Career Path Quiz
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Find your perfect career match based on your interests and preferences
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="quiz"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-lg"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-indigo-700 to-violet-800 h-2 rounded-full"
                  animate={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question */}
            <motion.h2
              key={currentQuestion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              {questions[currentQuestion].question}
            </motion.h2>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {questions[currentQuestion].options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option)}
                  className={`p-6 rounded-lg border-2 transition-all font-medium ${
                    (selectedAnswers[currentQuestion] && ((selectedAnswers[currentQuestion].label && selectedAnswers[currentQuestion].label === (option.label || option)) || selectedAnswers[currentQuestion] === option))
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-600/10 text-indigo-700 dark:text-indigo-400'
                      : 'border-gray-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        (selectedAnswers[currentQuestion] && ((selectedAnswers[currentQuestion].label && selectedAnswers[currentQuestion].label === (option.label || option)) || selectedAnswers[currentQuestion] === option))
                          ? 'border-indigo-600 bg-indigo-600'
                          : 'border-gray-300 dark:border-slate-600'
                      }`}
                    >
                      {(selectedAnswers[currentQuestion] && ((selectedAnswers[currentQuestion].label && selectedAnswers[currentQuestion].label === (option.label || option)) || selectedAnswers[currentQuestion] === option)) && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    {option.label || option}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (currentQuestion === questions.length - 1) computeResults();
                  else handleNext();
                }}
                disabled={!selectedAnswers[currentQuestion]}
                className="px-8 py-3 bg-gradient-to-r from-indigo-700 to-violet-800 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-indigo-700 to-violet-800 rounded-2xl p-6 text-white text-center">
              <div className="mx-auto mb-2">
                <CheckCircle size={56} className="mx-auto" />
              </div>
              <h2 className="text-3xl font-bold mb-1">Quiz Complete!</h2>
              <p className="text-white/90">Here is a tailored roadmap and matching careers for you</p>
            </div>

            {/* Rich Result Dashboard */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow">
              <ResultDashboard result={resultData} />
            </div>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-700 dark:text-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-600/10 transition-colors flex items-center gap-2"
              >
                <RotateCcw size={18} />
                Retake Quiz
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
