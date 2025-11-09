import React from 'react';
import { Cuboid } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-zinc-800/50 backdrop-blur-md sticky top-0 z-50 bg-zinc-950/80">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-brand-600 rounded-lg shadow-lg shadow-brand-500/20">
          <Cuboid className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          Apex<span className="text-zinc-400">Render</span>
        </span>
      </div>
      <div>
        <a
          href="#features"
          className="text-sm text-zinc-400 hover:text-white transition-colors mr-6 hidden md:inline-block"
        >
          Features
        </a>
        <span className="text-xs font-mono text-brand-400 py-1 px-3 bg-brand-400/10 rounded-full border border-brand-400/20">
          v2.4.1 BETA
        </span>
      </div>
    </nav>
  );
};
