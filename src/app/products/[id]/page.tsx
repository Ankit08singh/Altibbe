import { products } from '@/data/products';
import StatusBadge from '@/components/StatusBadge';
import Disclaimer from '@/components/Disclaimer';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Disclaimer />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Header */}
            <div
              className="rounded-lg shadow-sm p-6"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
            >
              <h1 className="text-2xl font-semibold tracking-tight" style={{ color: '#111827' }}>
                {product.name}
              </h1>
              <p className="text-sm mt-2" style={{ color: '#6B7280' }}>
                Category: {product.category}
              </p>
              <div className="mt-4">
                <StatusBadge status={product.status} />
              </div>
            </div>

            {/* Disclosure Summary */}
            <div
              className="rounded-lg shadow-md p-10 border-2"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#2563EB' }}
            >
              <div className="border-b pb-4 mb-8" style={{ borderColor: '#E5E7EB' }}>
                <h2 className="text-2xl font-bold" style={{ color: '#111827' }}>
                  Disclosure Summary
                </h2>
                <p className="text-sm mt-2" style={{ color: '#6B7280' }}>
                  Primary disclosure information declared by producer
                </p>
              </div>
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6B7280' }}>
                    Declared by
                  </dt>
                  <dd className="text-lg font-medium" style={{ color: '#111827' }}>
                    {product.producer}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6B7280' }}>
                    Declared on
                  </dt>
                  <dd className="text-lg font-medium" style={{ color: '#111827' }}>
                    {new Date(product.lastUpdated).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6B7280' }}>
                    Evidence Attached
                  </dt>
                  <dd className="text-lg font-medium" style={{ color: '#111827' }}>
                    {product.hasEvidence ? 'Yes' : 'No'}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Version History */}
            <div
              className="rounded-lg shadow-sm p-6"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
            >
              <h2 className="text-lg font-medium mb-4" style={{ color: '#111827' }}>
                Version History
              </h2>
              <div className="space-y-4">
                {product.versionHistory.map((version, index) => (
                  <div
                    key={index}
                    className="pb-4"
                    style={{
                      borderBottom: index < product.versionHistory.length - 1 ? '1px solid #E5E7EB' : 'none',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-medium" style={{ color: '#111827' }}>
                          Version {version.version}
                        </p>
                        <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                          {new Date(version.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <StatusBadge status={version.status} />
                    </div>
                    {version.changes && (
                      <p className="text-sm mt-2" style={{ color: '#6B7280' }}>
                        {version.changes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div
              className="rounded-lg p-6 border"
              style={{ backgroundColor: '#F8F9FB', borderColor: '#E5E7EB' }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-6" style={{ color: '#9CA3AF' }}>
                Product Details
              </h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium" style={{ color: '#6B7280' }}>
                    Product ID
                  </dt>
                  <dd className="text-base mt-1" style={{ color: '#111827' }}>
                    {product.id}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium" style={{ color: '#6B7280' }}>
                    Producer
                  </dt>
                  <dd className="text-base mt-1" style={{ color: '#111827' }}>
                    {product.producer}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium" style={{ color: '#6B7280' }}>
                    Category
                  </dt>
                  <dd className="text-base mt-1" style={{ color: '#111827' }}>
                    {product.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium" style={{ color: '#6B7280' }}>
                    Status
                  </dt>
                  <dd className="mt-1">
                    <StatusBadge status={product.status} />
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium" style={{ color: '#6B7280' }}>
                    Last Updated
                  </dt>
                  <dd className="text-base mt-1" style={{ color: '#111827' }}>
                    {new Date(product.lastUpdated).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="border-t mt-16 pt-8" style={{ borderColor: '#E5E7EB' }}>
          <Disclaimer />
          <div className="text-center mt-6">
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              This disclosure represents information provided by the producer and is not independently verified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}