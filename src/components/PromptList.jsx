import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';
import PreviewCard from './PreviewCard';

export default function PromptList({ items, selectedId, onSelect, onRegenerate }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="h-full overflow-y-auto pr-2 snap-y snap-mandatory">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="snap-start">
            <motion.button
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelect(item.id)}
              className={`group relative w-full text-left p-4 rounded-2xl border backdrop-blur transition-all ${
                selectedId === item.id
                  ? 'border-indigo-400/50 bg-indigo-400/10 shadow-[0_0_0_1px_rgba(99,102,241,.2)]'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 w-2 h-2 rounded-full transition-colors ${
                  selectedId === item.id ? 'bg-indigo-400' : 'bg-white/30 group-hover:bg-white/60'
                }`} />
                <div className="flex-1">
                  <h3 className="text-sm md:text-base text-white font-medium leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-slate-300/90 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRegenerate(item.id);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                      Generate with AI
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(item.id);
                      }}
                      className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-violet-300" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {hovered === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute -right-2 top-1/2 -translate-y-1/2 hidden lg:block"
                  >
                    <PreviewCard title={item.title} variant={item.variant} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </li>
        ))}
      </ul>
    </div>
  );
}
