import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

function MiniBar({ label, value, color = 'from-indigo-600 to-violet-700' }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
        <span>{label}</span>
        <span className="font-semibold">{Math.round(value)}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Radar({ traits }) {
  // Simple SVG radar-like spider chart approximation
  const size = 160;
  const cx = size / 2;
  const cy = size / 2;
  const max = 6; // approximate max score per trait
  const angle = (i, tot) => (Math.PI * 2 * i) / tot - Math.PI / 2;
  const points = traits.map((t, i) => {
    const r = (Math.min(t.value, max) / max) * (size / 2 - 16);
    return `${cx + r * Math.cos(angle(i, traits.length))},${cy + r * Math.sin(angle(i, traits.length))}`;
  });

  return (
    <svg width={size} height={size} className="mx-auto">
      <polygon points={points.join(' ')} fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1" />
      {traits.map((t, i) => (
        <g key={t.key}>
          <line
            x1={cx}
            y1={cy}
            x2={cx + (size / 2 - 12) * Math.cos(angle(i, traits.length))}
            y2={cy + (size / 2 - 12) * Math.sin(angle(i, traits.length))}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <text
            x={cx + (size / 2 - 4) * Math.cos(angle(i, traits.length))}
            y={cy + (size / 2 - 4) * Math.sin(angle(i, traits.length))}
            fontSize="9"
            textAnchor="middle"
            fill="#374151"
          >
            {t.key}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function ResultDashboard({ result }) {
  const confettiRef = useRef(null);

  useEffect(() => {
    const el = confettiRef.current;
    if (!el) return;
    // small decorative confetti animation using CSS classes
    el.classList.add('animate-confetti');
    const t = setTimeout(() => el.classList.remove('animate-confetti'), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!result) return null;

  const { topMatches, traits, recommendedStream, pathways, colleges, scholarships } = result;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-indigo-100 text-indigo-700">
            <Sparkles />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Recommended Stream</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{recommendedStream}</p>
          </div>
        </div>
        <div ref={confettiRef} className="mt-4 h-10 relative overflow-hidden" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
          <h4 className="font-bold mb-4">Top Career Matches</h4>
          <div className="space-y-4">
            {topMatches.map((m) => (
              <div key={m.id}>
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-gray-900 dark:text-white">{m.title}</div>
                  <div className="text-indigo-700 font-bold">{Math.round(m.score)}%</div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                  <div className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-700" style={{ width: `${m.score}%` }} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{m.summary}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 md:col-span-2">
          <h4 className="font-bold mb-4">Skills & Trait Profile</h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              {traits.slice(0, 6).map((t) => (
                <div className="mb-3" key={t.key}>
                  <MiniBar label={t.key} value={(t.value / result.maxTrait) * 100} />
                </div>
              ))}
            </div>
            <div className="w-48">
              <Radar traits={traits.slice(0, 6)} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
        <h4 className="font-bold mb-4">Suggested Roadmap</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pathways.slice(0, 3).map((p) => (
            <div key={p.id} className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700">
              <div className="font-semibold">{p.title}</div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                {p.steps.slice(0, 4).map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
          <h4 className="font-bold mb-3">Recommended Colleges & Local Opportunities</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {colleges.map((c, i) => (
              <li key={i}>• {c}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
          <h4 className="font-bold mb-3">Scholarships & Budget Tips</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {scholarships.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-700 to-violet-800 text-white">Save Plan</button>
        <button className="px-6 py-2 rounded-lg border border-gray-300">Discuss with an expert</button>
      </div>
    </div>
  );
}
