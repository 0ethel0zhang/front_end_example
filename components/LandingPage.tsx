import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { PaymentModal } from './PaymentModal';
import { CheckCircle2, Zap, Layers, Cpu } from 'lucide-react';
import { FeatureItem } from '../types';

interface LandingPageProps {
  onUnlock: () => void;
}

const features: FeatureItem[] = [
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: 'Lightning Fast',
    description: 'Render scenes up to 8x faster than traditional engines.',
  },
  {
    icon: <Layers className="w-5 h-5 text-brand-400" />,
    title: 'Smart Layering',
    description: 'Non-destructive workflow with intelligent layer management.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    title: 'GPU Accelerated',
    description: 'Full utilization of modern CUDA and Metal cores.',
  },
];

export const LandingPage: React.FC<LandingPageProps> = ({ onUnlock }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const PRICE = '$49.99';

  return (
    <div className="flex-grow flex flex-col animate-fade-in">
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={onUnlock}
        price={PRICE}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-4 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Now Available for macOS & Windows
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white max-w-4xl mx-auto leading-[1.1]">
            Render your dreams,
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-400 bg-clip-text text-transparent">
              faster than reality.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Apex Render is the next-generation engine designed for speed,
            precision, and seamless integration into your existing pipeline.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="min-w-[200px] px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold rounded-full text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              Get Instant Access - {PRICE}
            </button>
            <p className="text-sm text-zinc-500 sm:hidden">
              One-time payment. Lifetime access.
            </p>
          </div>
        </div>

        {/* Teaser Video */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="p-2 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
            <VideoPlayer
              title="Watch the Teaser"
              thumbnailUrl="https://picsum.photos/id/14/1920/1080" // Scenic placeholder
            />
          </div>
          <p className="text-center text-sm text-zinc-500 mt-4">
            See Apex Render in action (1:45)
          </p>
        </div>
      </section>

      {/* Social Proof / Trust Banner */}
      <section className="w-full bg-zinc-950 border-y border-zinc-900 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-500 font-medium mb-6 uppercase tracking-widest text-sm">
            Trusted by artists from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {/* Fake Logos */}
            <span className="text-2xl font-black text-zinc-300">PIXELAR</span>
            <span className="text-2xl font-black text-zinc-300">NEXUS Studio</span>
            <span className="text-2xl font-black text-zinc-300">VORTEX</span>
            <span className="text-2xl font-black text-zinc-300">CHROMATIC</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-zinc-800">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white mb-2">
                30-Day Money Back Guarantee
              </h4>
              <p className="text-zinc-400">
                If you're not rendering faster within the first month, we'll
                refund every cent. No questions asked.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="whitespace-nowrap px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-colors"
            >
              Buy Now &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
