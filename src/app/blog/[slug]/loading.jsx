export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">

      <div className="flex flex-col items-center gap-4">

        {/* 🔥 SPINNER */}
        <div className="w-14 h-14 border-4 border-blue-200 border-t-[#0d2f72] rounded-full animate-spin"></div>

        {/* TEXT */}
        <p className="text-gray-600 text-sm">Loading blog...</p>

      </div>

    </div>
  );
}