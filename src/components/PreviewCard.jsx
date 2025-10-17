import React from 'react';
import { motion } from 'framer-motion';

export default function PreviewCard({ title, variant }) {
  // Small hover preview visuals per variant (simplified, lightweight)
  const renderPreview = () => {
    switch (variant) {
      case 'tech-orbit':
        return (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-900/50 to-violet-900/30" />
            <div className="absolute inset-2 grid place-items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-300 shadow-[0_0_30px_6px_rgba(99,102,241,.6)]" />
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-20 h-20 rounded-full border border-white/20 animate-[spin_8s_linear_infinite]" />
            </div>
          </div>
        );
      case 'timeline':
        return (
          <div className="p-2">
            <div className="h-full w-1 bg-white/20 rounded mx-auto" />
          </div>
        );
      case 'galaxy':
        return (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-slate-800/40 to-slate-900/40" />
            <div className="absolute inset-0">
              <div className="absolute left-4 top-4 w-2 h-2 bg-violet-300 rounded-full" />
              <div className="absolute right-6 bottom-5 w-3 h-3 bg-indigo-300 rounded-full" />
              <div className="absolute left-10 bottom-3 w-2 h-2 bg-fuchsia-300 rounded-full" />
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full rounded-xl bg-white/5" />
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.2 }}
      className="w-40 h-24 rounded-xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur"
    >
      {renderPreview()}
      <div className="absolute bottom-0 left-0 right-0 p-2 text-[10px] text-center text-slate-300/80 line-clamp-2">
        {title}
      </div>
    </motion.div>
  );
}
