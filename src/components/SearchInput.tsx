import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Filter by product name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 transition duration-200"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB',
          color: '#111827'
        }}
      />
      <Search 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4"
        style={{ color: '#6B7280' }}
      />
    </div>
  );
}
