import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Loader2 } from 'lucide-react';

const STORAGE_KEY = 'apex_render_license_v1';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    // Check local storage on mount to see if user already paid
    const checkLicense = () => {
      try {
        const hasLicense = localStorage.getItem(STORAGE_KEY) === 'true';
        setIsPaid(hasLicense);
      } catch (e) {
        console.error('Error reading from localStorage', e);
      } finally {
        // Slight artificial delay to prevent flickering if it loads too fast
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    checkLicense();
  }, []);

  const handleUnlock = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsPaid(true);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <Loader2 className="w-8 h-8 text-brand-500 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col">
        {isPaid ? <Dashboard /> : <LandingPage onUnlock={handleUnlock} />}
      </main>
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Apex Render Technologies. All rights reserved.</p>
        {!isPaid && (
          <p className="mt-2 text-xs">
            This is a demo. Payments are simulated.
          </p>
        )}
      </footer>
    </>
  );
};

export default App;
