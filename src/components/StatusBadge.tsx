import { ProductStatus } from '@/types';

interface StatusBadgeProps {
  status: ProductStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = (status: ProductStatus) => {
    switch (status) {
      case 'Draft':
        return '#9CA3AF';
      case 'Submitted':
        return '#F59E0B';
      case 'Published':
        return '#2563EB';
    }
  };

  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium"
      style={{
        backgroundColor: `${getStatusColor(status)}25`,
        color: getStatusColor(status),
      }}
    >
      {status}
    </span>
  );
}
