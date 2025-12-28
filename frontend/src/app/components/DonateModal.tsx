import { useState } from 'react';
import { X, Heart } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];
  const selectedAmount = customAmount ? parseFloat(customAmount) : parseFloat(amount);

  const handleDonate = async () => {
    if (!selectedAmount || selectedAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setIsProcessing(true);

    try {
      // Replace with your Stripe/PayPal integration
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedAmount,
          type: donationType,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to payment gateway
        if (data.redirectUrl) {
          window.location.href = data.redirectUrl;
        }
      }
    } catch (error) {
      console.log('Donation initiated:', { amount: selectedAmount, type: donationType });
      alert(`Thank you for your generous donation of $${selectedAmount.toFixed(2)}! Payment processing to be integrated.`);
      onClose();
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 mb-6">
          <Heart className="w-6 h-6" style={{ color: 'var(--primary-orange)' }} fill="currentColor" />
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem' }} className="font-bold">
            Make a Donation
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your generous donation helps us continue our mission to support orphans and vulnerable children across Africa.
        </p>

        {/* Donation Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Donation Type
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setDonationType('once')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                donationType === 'once'
                  ? 'text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              style={{
                backgroundColor: donationType === 'once' ? 'var(--primary-blue)' : undefined,
              }}
            >
              One-time
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                donationType === 'monthly'
                  ? 'text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              style={{
                backgroundColor: donationType === 'monthly' ? 'var(--primary-blue)' : undefined,
              }}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Preset Amounts */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Select Amount
          </label>
          <div className="grid grid-cols-3 gap-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => {
                  setAmount(preset.toString());
                  setCustomAmount('');
                }}
                className={`py-2 px-3 rounded-lg transition-colors ${
                  amount === preset.toString() && !customAmount
                    ? 'text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                style={{
                  backgroundColor:
                    amount === preset.toString() && !customAmount ? 'var(--primary-blue)' : undefined,
                }}
              >
                ${preset}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="mb-6">
          <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Custom Amount (USD)
          </label>
          <div className="flex items-center">
            <span className="text-gray-500 dark:text-gray-400 mr-2">$</span>
            <input
              type="number"
              id="customAmount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                if (e.target.value) {
                  setAmount('');
                }
              }}
              placeholder="Enter amount"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
              step="0.01"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">
              {donationType === 'monthly' ? 'Monthly Donation' : 'One-time Donation'}
            </span>
            <span
              style={{ color: 'var(--primary-blue)' }}
              className="font-bold text-lg"
            >
              ${selectedAmount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDonate}
            disabled={isProcessing || !selectedAmount || selectedAmount <= 0}
            className="flex-1 px-4 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: 'var(--primary-green)' }}
          >
            {isProcessing ? 'Processing...' : 'Donate Now'}
          </button>
        </div>
      </div>
    </div>
  );
}
