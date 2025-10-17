import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[40vh] md:h-[48vh] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="p-6 md:p-10 w-full flex items-end md:items-center justify-between gap-6">
          <div>
            <h1 className="text-white text-2xl md:text-4xl font-semibold tracking-tight">
              Prompt to UI — Visual Playground
            </h1>
            <p className="mt-2 text-slate-300 max-w-xl text-sm md:text-base">
              Explore how AI can turn ideas into beautiful, interactive sections. Pick a prompt, watch the right panel come alive.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-slate-200">
            <Rocket className="w-4 h-4 text-indigo-300" />
            <span className="text-sm">Smooth. Minimal. Animated.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
