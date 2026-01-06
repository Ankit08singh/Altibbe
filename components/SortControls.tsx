interface SortControlsProps {
  sortBy: 'name' | 'date';
  sortOrder: 'asc' | 'desc';
  onSortChange: (sortBy: 'name' | 'date') => void;
  onOrderChange: (order: 'asc' | 'desc') => void;
}

export default function SortControls({
  sortBy,
  sortOrder,
  onSortChange,
  onOrderChange,
}: SortControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-slate-700">Sort by:</label>
      
      <div className="flex gap-2">
        <button
          onClick={() => onSortChange('name')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            sortBy === 'name'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => onSortChange('date')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            sortBy === 'date'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
          }`}
        >
          Date
        </button>
      </div>

      <button
        onClick={() => onOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
        className="p-2 rounded-lg border border-slate-300 hover:border-slate-400 bg-white transition-all duration-200"
        title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      >
        <svg
          className={`w-5 h-5 text-slate-700 transition-transform duration-200 ${
            sortOrder === 'desc' ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}
