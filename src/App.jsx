import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import PromptList from './components/PromptList';
import SectionRenderer from './components/SectionRenderer';

export default function App() {
  const prompts = useMemo(() => [
    {
      id: 'tech-orbit',
      title: 'Tech Stack Orbit',
      description:
        'Interactive orbit of technology logos around a glowing center titled “My Tech Stack” with hover skill levels and a cosmic gradient.',
      variant: 'tech-orbit',
    },
    {
      id: 'timeline',
      title: 'Timeline Scroll of Growth',
      description:
        'Modern animated timeline showcasing milestones with icons and smooth fade-ins while scrolling.',
      variant: 'timeline',
    },
    {
      id: 'galaxy',
      title: 'Skill Galaxy Map',
      description:
        'Galaxy-like clusters labeled by domain that expand on hover to reveal specific technologies.',
      variant: 'galaxy',
    },
    {
      id: 'code-to-product',
      title: 'Code-to-Product Animation',
      description:
        'Animation where a code snippet morphs into a UI preview with labels “Idea”, “Code”, and “Launch”.',
      variant: 'code-to-product',
    },
    {
      id: 'polaroid',
      title: 'Testimonial Polaroid Wall',
      description:
        'Floating polaroid-style testimonials with names, photos, and soft motion or drag interactions.',
      variant: 'polaroid',
    },
    {
      id: 'split-reveal',
      title: 'Behind the Scenes Split Reveal',
      description:
        'Drag a slider to reveal the difference between the polished UI and the code behind it.',
      variant: 'split-reveal',
    },
    {
      id: 'personality',
      title: 'Personality Snapshot Cards',
      description:
        'Interactive flip cards that show fun facts, favorite tools, and highlights with subtle 3D motion.',
      variant: 'personality',
    },
    {
      id: 'features',
      title: 'Feature Highlights Grid',
      description:
        'Clean grid of core features with icons, short copy, and soft hover accents.',
      variant: 'features',
    },
    {
      id: 'pricing',
      title: 'Pricing Plans',
      description:
        'Three-column pricing with an emphasized middle card, badges, and gentle glow.',
      variant: 'pricing',
    },
    {
      id: 'faq',
      title: 'FAQ Accordion',
      description:
        'Common questions in an elegant accordion with smooth reveal.',
      variant: 'faq',
    },
  ], []);

  const [current, setCurrent] = useState(prompts[0].id);
  const [regenKey, setRegenKey] = useState(0);

  const handleRegenerate = (id) => {
    setCurrent(id);
    setRegenKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#0b1020,transparent_60%)] from-slate-950 to-black text-slate-100">
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        <Hero />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium text-slate-200">Prompts</div>
              <div className="text-xs text-slate-400">Scroll & snap</div>
            </div>
            <PromptList
              items={prompts}
              selectedId={current}
              onSelect={setCurrent}
              onRegenerate={handleRegenerate}
            />
          </div>

          <div className="md:col-span-7 lg:col-span-8 h-[70vh] rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <SectionRenderer current={current} regenKey={regenKey} />
            </motion.div>
          </div>
        </div>

        <footer className="py-6 text-center text-xs text-slate-400">
          Built with smooth motion, glassmorphism, and a subtle neon accent.
        </footer>
      </div>
    </div>
  );
}
