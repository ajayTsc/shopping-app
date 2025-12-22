

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col animate-pulse border border-gray-300 mt-20">
      <div className="h-48 w-full bg-gray-300 rounded mb-3"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-8 w-16 bg-gray-300 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
