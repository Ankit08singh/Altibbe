import Link from 'next/link';
import { FrownIcon, ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
          <FrownIcon
            className="w-10 h-10 text-slate-400"
          />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Product Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The product disclosure you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </div>
    </div>
  );
}
