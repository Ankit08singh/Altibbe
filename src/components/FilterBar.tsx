import { ProductCategory, ProductStatus } from '@/types';

interface FilterBarProps {
  selectedCategory: ProductCategory | 'All';
  selectedStatus: ProductStatus | 'All';
  sortBy: 'name' | 'date';
  onCategoryChange: (category: ProductCategory | 'All') => void;
  onStatusChange: (status: ProductStatus | 'All') => void;
  onSortChange: (sortBy: 'name' | 'date') => void;
}

const categories: (ProductCategory | 'All')[] = [
  'All',
  'Electronics',
  'Textiles',
  'Food & Beverage',
  'Pharmaceuticals',
  'Construction Materials',
  'Chemicals',
];

const statuses: (ProductStatus | 'All')[] = ['All', 'Draft', 'Submitted', 'Published'];

export default function FilterBar({
  selectedCategory,
  selectedStatus,
  sortBy,
  onCategoryChange,
  onStatusChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Category Filter */}
      <div className="flex-1 min-w-50">
        <label htmlFor="category" className="block text-xs mb-2" style={{ color: '#6B7280' }}>
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as ProductCategory | 'All')}
          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 transition duration-200 cursor-pointer"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB',
            color: '#111827'
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Status Filter */}
      <div className="flex-1 min-w-50">
        <label htmlFor="status" className="block text-xs mb-2" style={{ color: '#6B7280' }}>
          Status
        </label>
        <select
          id="status"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value as ProductStatus | 'All')}
          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 transition duration-200 cursor-pointer"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB',
            color: '#111827'
          }}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div className="flex-1 min-w-50">
        <label htmlFor="sort" className="block text-xs mb-2" style={{ color: '#6B7280' }}>
          Sort by
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as 'name' | 'date')}
          className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 transition duration-200 cursor-pointer"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB',
            color: '#111827'
          }}
        >
          <option value="name">Name (A-Z)</option>
          <option value="date">Last Updated (newest first)</option>
        </select>
      </div>
    </div>
  );
}
