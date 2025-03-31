import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#000212] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-[#5B4DFB] to-[#8F7BF7] text-white rounded-md hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 