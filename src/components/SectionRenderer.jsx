import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Globe2, Check } from 'lucide-react';

const containerVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 },
};

function TechOrbit() {
  const logos = ['React', 'Node', 'Python', 'Tailwind', 'FastAPI', 'Vite'];
  return (
    <div className="relative h-full w-full rounded-3xl overflow-hidden bg-[radial-gradient(100%_100%_at_50%_0%,#0b1020_0%,#060913_100%)] p-6">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-fuchsia-600/20 blur-3xl rounded-full" />
      </div>

      <div className="relative h-full grid place-items-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-semibold">My Tech Stack</h2>
          <p className="text-slate-300 mt-1">Hover logos to see skill level</p>
        </div>

        <div className="relative mt-8">
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-6 h-6 rounded-full bg-white/80 shadow-[0_0_40px_10px_rgba(167,139,250,.35)]" />
          </div>
          <div className="relative w-56 h-56 rounded-full border border-white/15 animate-[spin_18s_linear_infinite]" />
          <div className="absolute inset-0">
            {logos.map((label, i) => (
              <motion.div
                key={label}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${(360 / logos.length) * i}deg) translateY(-110px)`,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-xs text-white shadow hover:shadow-indigo-500/20">
                  {label}
                  <span className="ml-2 text-[10px] text-indigo-300/90">{Math.round(70 + Math.random() * 30)}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const items = useMemo(() => [
    { year: '2019', title: 'Started coding', desc: 'Built my first website' },
    { year: '2021', title: 'Internship', desc: 'Frontend at a startup' },
    { year: '2023', title: 'AI Projects', desc: 'Shipped ML-backed features' },
    { year: '2024', title: 'Lead Dev', desc: 'Mentoring and architecture' },
  ], []);
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-8">
      <div className="max-h-full overflow-y-auto pr-2">
        <ol className="relative border-s border-white/10 ml-4">
          {items.map((it, idx) => (
            <motion.li
              key={it.year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="mb-8 ms-6"
            >
              <span className="absolute -start-3.5 flex items-center justify-center w-7 h-7 rounded-full ring-2 ring-white/10 bg-indigo-500/20 text-indigo-200 text-xs font-medium">{it.year}</span>
              <h3 className="text-white font-medium">{it.title}</h3>
              <p className="text-slate-300 text-sm">{it.desc}</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[0,1,2].map((i) => (
                  <div key={i} className="h-12 rounded-lg bg-white/5 border border-white/10" />
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function SkillGalaxy() {
  const clusters = [
    { name: 'Frontend', color: 'from-indigo-400/40', dots: 6 },
    { name: 'Backend', color: 'from-fuchsia-400/40', dots: 5 },
    { name: 'AI', color: 'from-cyan-400/40', dots: 4 },
  ];
  return (
    <div className="relative h-full w-full rounded-3xl overflow-hidden bg-[radial-gradient(60%_80%_at_50%_50%,rgba(40,40,80,.4)_0%,rgba(10,10,20,.9)_100%)]">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-white/50 rounded-full" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, opacity: Math.random() }} />
        ))}
      </div>
      <div className="relative p-6 grid md:grid-cols-3 gap-6">
        {clusters.map((c) => (
          <div key={c.name} className="relative group rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur">
            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${c.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            <h3 className="relative text-white font-medium">{c.name}</h3>
            <div className="relative mt-4 flex flex-wrap gap-2">
              {Array.from({ length: c.dots }).map((_, i) => (
                <motion.span key={i} whileHover={{ scale: 1.1 }} className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-slate-200">
                  Tech {i+1}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeToProduct() {
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-tr from-indigo-950 via-slate-950 to-fuchsia-950 p-6 grid md:grid-cols-2 gap-6">
      <motion.pre
        initial={{ filter: 'blur(2px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-56 md:h-full rounded-2xl border border-white/10 bg-black/50 p-4 text-xs text-indigo-200 overflow-auto"
      >
        {`const idea = "Make something great"\nconst code = build(idea)\nconst product = launch(code)\n`}
      </motion.pre>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
      >
        <div className="text-white font-medium">UI Preview</div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-16 rounded-lg bg-white/10 border border-white/10" />
          ))}
        </div>
        <div className="mt-6 flex gap-2 text-xs text-slate-300">
          <span className="px-2 py-1 rounded bg-white/10 border border-white/10">Idea</span>
          <span className="px-2 py-1 rounded bg-white/10 border border-white/10">Code</span>
          <span className="px-2 py-1 rounded bg-white/10 border border-white/10">Launch</span>
        </div>
      </motion.div>
    </div>
  );
}

function PolaroidWall() {
  const testimonials = [
    { name: 'Ava', quote: 'A joy to use!', tilt: '-6' },
    { name: 'Liam', quote: 'Beautiful and fast.', tilt: '4' },
    { name: 'Mia', quote: 'Feels magical.', tilt: '-2' },
  ];
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-6 grid place-items-center">
      <div className="relative w-full max-w-3xl h-72">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            drag
            dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
            initial={{ rotate: Number(t.tilt) }}
            whileHover={{ scale: 1.05 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 bg-white text-slate-900 rounded-md shadow-xl"
            style={{ zIndex: i + 1, transform: `translate(-50%, -50%) rotate(${t.tilt}deg)` }}
          >
            <div className="h-28 bg-gradient-to-br from-indigo-200 to-fuchsia-200" />
            <div className="p-4">
              <p className="text-sm">“{t.quote}”</p>
              <div className="mt-2 text-xs text-slate-500">— {t.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SplitReveal() {
  return (
    <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5">
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">UI Design</div>
        <div className="relative bg-gradient-to-bl from-[#0b1020] to-[#0a0f1c] p-6 text-indigo-200">Code</div>
      </div>
      <input type="range" min="0" max="100" defaultValue="50" onInput={(e) => {
        const val = e.currentTarget.value;
        const left = e.currentTarget.parentElement.querySelector('.left-pane');
        if (left) left.style.width = `${val}%`;
      }} className="absolute inset-x-0 bottom-4 mx-auto w-1/2" />
      <div className="left-pane absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white mix-blend-normal" />
    </div>
  );
}

function PersonalityCards() {
  const cards = [
    { title: 'Hobbies', emoji: '🎧', info: 'Lo-fi + code' },
    { title: 'Fav Tool', emoji: '🛠️', info: 'VS Code' },
    { title: 'Wins', emoji: '🏆', info: 'Hackathon x2' },
    { title: 'Mood', emoji: '✨', info: 'Builder' },
  ];
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((c) => (
          <motion.div
            key={c.title}
            whileHover={{ rotateY: 180 }}
            className="relative [transform-style:preserve-3d] h-28 rounded-2xl border border-white/10 bg-white/5 p-3"
          >
            <div className="absolute inset-0 grid place-items-center backface-hidden">
              <div className="text-2xl">{c.emoji}</div>
              <div className="text-white text-sm mt-1">{c.title}</div>
            </div>
            <div className="absolute inset-0 grid place-items-center rotate-y-180 backface-hidden">
              <div className="text-slate-200 text-sm">{c.info}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FeaturesGrid() {
  const features = [
    { title: 'Fast', desc: 'Optimized performance' },
    { title: 'Responsive', desc: 'Looks great on any device' },
    { title: 'Accessible', desc: 'Built with a11y in mind' },
    { title: 'Theming', desc: 'Easy to customize' },
    { title: 'Animations', desc: 'Fluid motion by default' },
    { title: 'Secure', desc: 'Best practices baked in' },
  ];
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-white"><Check className="w-4 h-4 text-indigo-300"/>{f.title}</div>
            <div className="text-slate-300 text-sm mt-1">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingTable() {
  const tiers = [
    { name: 'Starter', price: '$0', features: ['1 project', 'Community support'] },
    { name: 'Pro', price: '$12', features: ['Unlimited', 'Priority support'], highlight: true },
    { name: 'Team', price: '$29', features: ['Team seats', 'SLA'] },
  ];
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-6 grid place-items-center">
      <div className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-2xl border p-5 ${t.highlight ? 'border-indigo-400/50 bg-indigo-400/10 shadow-[0_0_0_1px_rgba(99,102,241,.2)]' : 'border-white/10 bg-white/5'}`}>
            <div className="text-white text-lg font-medium">{t.name}</div>
            <div className="text-3xl font-semibold text-white mt-2">{t.price}<span className="text-sm text-slate-300 font-normal">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-300"/>{f}</li>
              ))}
            </ul>
            <button className={`mt-5 w-full py-2 rounded-lg border ${t.highlight ? 'bg-indigo-500/20 border-indigo-400/60 text-white' : 'bg-white/5 border-white/10 text-slate-200'} hover:bg-white/10`}>Get started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  const faqs = [
    { q: 'How does this work?', a: 'Pick a prompt; the right panel renders a live section demo with smooth motion.' },
    { q: 'Can I customize it?', a: 'Yes — styles and content are easily adjustable to fit your brand.' },
    { q: 'Is it responsive?', a: 'Absolutely. Everything is built with mobile-first responsive design.' },
  ];
  return (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-6">
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((item, idx) => (
          <details key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer list-none text-white font-medium">{item.q}</summary>
            <p className="mt-2 text-slate-300 text-sm">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function SectionRenderer({ current, regenKey }) {
  return (
    <div className="h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${current}-${regenKey}`}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="h-full"
        >
          {current === 'tech-orbit' && <TechOrbit />}
          {current === 'timeline' && <Timeline />}
          {current === 'galaxy' && <SkillGalaxy />}
          {current === 'code-to-product' && <CodeToProduct />}
          {current === 'polaroid' && <PolaroidWall />}
          {current === 'split-reveal' && <SplitReveal />}
          {current === 'personality' && <PersonalityCards />}
          {current === 'features' && <FeaturesGrid />}
          {current === 'pricing' && <PricingTable />}
          {current === 'faq' && <FAQAccordion />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
