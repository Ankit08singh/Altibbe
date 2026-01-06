import { Package } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div 
        className="w-16 h-16 mb-4 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#E5E7EB' }}
      >
        <Package
          className="w-8 h-8"
          style={{ color: '#6B7280' }}
        />
      </div>
      <p className="text-sm" style={{ color: '#6B7280' }}>
        No products match the selected filters.
      </p>
    </div>
  );
}
