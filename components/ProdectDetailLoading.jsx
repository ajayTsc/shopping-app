

export default function LoadingSkeleton() {
  return (
    <div className="max-w-5xl mx-auto  px-4 animate-pulse mt-24">
      <div className="h-10 bg-gray-300 rounded mb-6 w-48 mx-auto md:mx-0"></div>
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row gap-10 border border-gray-300">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="h-80 w-full bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="space-y-2 mt-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div className="mt-6 flex gap-4">
            <div className="h-10 w-20 bg-gray-300 rounded"></div>
            <div className="h-10 w-20 bg-gray-300 rounded"></div>
            <div className="h-10 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
