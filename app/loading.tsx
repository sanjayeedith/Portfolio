export default function Loading() {
  return (
    <div className="min-h-screen bg-[#000212] flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#5B4DFB] border-t-transparent rounded-full animate-spin"></div>
        <div className="mt-4 text-white text-center">Loading...</div>
      </div>
    </div>
  );
} 