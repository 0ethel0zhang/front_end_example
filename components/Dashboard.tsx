import React from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Download, FileTerminal, BookOpen, Star } from 'lucide-react';

export const Dashboard: React.FC = () => {
  // In a real app, this would be a real file URL
  // Using a data URI to simulate a download for the demo without external dependencies
  const handleDownload = () => {
    const element = document.createElement('a');
    const fileContent = `
APEX RENDER - LICENSE KEY
-------------------------
KEY: XXXX-YYYY-ZZZZ-AAAA
VERSION: 2.4.1

Installation Instructions:
1. Run the installer.
2. Enter the key above when prompted.
3. Enjoy faster rendering!

Thank you for your purchase!
`;
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent)
    );
    element.setAttribute('download', 'ApexRender_License_ReadMe.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex-grow px-6 py-12 max-w-6xl mx-auto w-full animate-fade-in">
      {/* Welcome Banner */}
      <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-brand-900/50 to-zinc-900 border border-brand-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-brand-500/20 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Apex Pro.
          </h1>
          <p className="text-brand-200 max-w-xl text-lg">
            Your license has been successfully activated. Download your software
            below and watch the deep-dive tutorial to get started.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content - Left Col */}
        <div className="lg:col-span-2 space-y-10">
          {/* Download Section */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FileTerminal className="w-6 h-6 text-brand-400" />
              Installation Files
            </h2>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="w-10 h-10 bg-brand-500 rounded-lg shadow-lg shadow-brand-500/30"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Apex Render v2.4.1 Installer
                </h3>
                <p className="text-zinc-400 text-sm mb-1">
                  macOS (Universal) & Windows 10/11 • 2.4 GB
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Star className="w-3 h-3 fill-zinc-500" />
                  <span>Latest stable build</span>
                </div>
              </div>
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          </section>

          {/* Full Tutorial Video */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-400" />
              Getting Started Masterclass
            </h2>
            <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-800 bg-black">
              <VideoPlayer
                title="Masterclass: From Zero to Render"
                thumbnailUrl="https://picsum.photos/id/180/1920/1080" // Different placeholder for paid content
                isLocked={false}
              />
            </div>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              In this 45-minute deep dive, we cover everything from initial
              setup, importing your first scene, optimizing light paths, and
              using the new AI-denoising features exclusive to Pro users.
            </p>
          </section>
        </div>

        {/* Sidebar - Right Col */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="block px-4 py-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 transition-colors text-sm"
                >
                  Documentation Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 transition-colors text-sm"
                >
                  Community Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 transition-colors text-sm"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-brand-500/5 border border-brand-500/10">
            <h3 className="font-semibold text-brand-300 mb-2">
              Need Support?
            </h3>
            <p className="text-sm text-brand-200/70 mb-4">
              Pro users get priority email support.
            </p>
            <a
              href="mailto:support@example.com"
              className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
            >
              Contact Priority Support &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
