'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#000212] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong!</h1>
        <p className="text-xl text-gray-400 mb-8">We apologize for the inconvenience.</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-[#5B4DFB] to-[#8F7BF7] text-white rounded-md hover:opacity-90 transition-opacity mr-4"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
} 