export default function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-white border rounded-lg p-6" style={{ borderColor: '#E5E7EB' }}>
        <div className="flex items-start justify-between mb-4">
          <div className="h-5 rounded w-3/4" style={{ backgroundColor: '#E5E7EB' }}></div>
          <div className="h-5 w-20 rounded-full" style={{ backgroundColor: '#E5E7EB' }}></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 rounded w-1/2" style={{ backgroundColor: '#E5E7EB' }}></div>
          <div className="h-4 rounded w-2/3" style={{ backgroundColor: '#E5E7EB' }}></div>
          <div className="h-4 rounded w-1/3" style={{ backgroundColor: '#E5E7EB' }}></div>
        </div>
      </div>
    </div>
  );
}
