import React, { useState, useEffect } from 'react';
import { X, CreditCard, ShieldCheck, Loader2 } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  price: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  price,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleFakePayment = () => {
    setIsProcessing(true);
    // Simulate network request for payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
      onClose();
    }, 2500);
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={!isProcessing ? onClose : undefined}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">
            Complete Purchase
          </h3>
          {!isProcessing && (
            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center p-4 bg-zinc-950/50 rounded-lg border border-zinc-800/50">
            <div>
              <p className="text-white font-medium">Apex Render License</p>
              <p className="text-sm text-zinc-400">Lifetime access v2.x</p>
            </div>
            <p className="text-2xl font-bold text-white">{price}</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-zinc-300">
              Payment Method (Simulated)
            </p>
            <div className="flex gap-3">
              <button
                className={`flex-1 p-3 rounded-xl border-2 flex items-center justify-center gap-2 transition-all ${
                  !isProcessing
                    ? 'border-brand-500 bg-brand-500/10 text-white'
                    : 'border-zinc-800 bg-zinc-900 opacity-50 cursor-not-allowed'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">Card</span>
              </button>
              <button
                disabled
                className="flex-1 p-3 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-500 flex items-center justify-center gap-2 cursor-not-allowed"
              >
                <span className="font-bold italic">PayPal</span>
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleFakePayment}
              disabled={isProcessing}
              className="w-full py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-zinc-700 disabled:text-zinc-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Pay {price}</>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure 256-bit SSL Encrypted payment.</span>
          </div>
        </div>

        {/* Simulated Env Banner */}
        <div className="py-2 bg-amber-500/10 border-t border-amber-500/20 text-center">
          <p className="text-xs text-amber-500 font-medium">
            DEMO MODE: No actual charge will be made.
          </p>
        </div>
      </div>
    </div>
  );
};
