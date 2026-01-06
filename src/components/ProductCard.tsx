import Link from 'next/link';
import { Product } from '@/types';
import StatusBadge from './StatusBadge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div 
        className="bg-white border rounded-lg p-6 transition-all duration-150 cursor-pointer group"
        style={{ borderColor: '#E5E7EB' }}
      >
        <div className="flex items-start justify-between gap-3 mb-5">
          <h3 
            className="text-lg font-semibold leading-tight group-hover:opacity-80 transition-opacity"
            style={{ color: '#111827' }}
          >
            {product.name}
          </h3>
          <div className="flex-shrink-0">
            <StatusBadge status={product.status} />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm" style={{ color: '#6B7280' }}>
            {product.category}
          </div>
          
          <div className="text-sm" style={{ color: '#6B7280' }}>
            Declared by {product.producer}
          </div>

          <div className="text-xs pt-4 border-t" style={{ color: '#9CA3AF', borderColor: '#E5E7EB' }}>
            Last updated {formatDate(product.lastUpdated)}
          </div>
        </div>
      </div>
    </Link>
  );
}
