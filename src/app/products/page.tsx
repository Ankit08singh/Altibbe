"use client";

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import { ProductCategory, ProductStatus } from '@/types';
import ProductCard from '@/components/ProductCard';
import SearchInput from '@/components/SearchInput';
import FilterBar from '@/components/FilterBar';
import EmptyState from '@/components/EmptyState';
import Disclaimer from '@/components/Disclaimer';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus | 'All'>('All');
  const [sortBy, setSortBy] = useState<'name' | 'date'>('date');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Status filter
    if (selectedStatus !== 'All') {
      result = result.filter((product) => product.status === selectedStatus);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

    return result;
  }, [searchQuery, selectedCategory, selectedStatus, sortBy]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FB' }}>
      {/* System Header */}
      <header className="bg-white border-b-2" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: '#111827' }}>
              Product Disclosures
            </h1>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Producer-declared product information
            </p>
          </div>
          
          <div className="mb-8">
            <Disclaimer />
          </div>

          {/* Filter Section */}
          <div className="border-t pt-6" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-xs font-medium uppercase tracking-wide mb-4" style={{ color: '#9CA3AF' }}>
              Filter & Sort
            </p>
            <div className="space-y-4">
              <SearchInput value={searchQuery} onChange={setSearchQuery} />
              
              <FilterBar
                selectedCategory={selectedCategory}
                selectedStatus={selectedStatus}
                sortBy={sortBy}
                onCategoryChange={setSelectedCategory}
                onStatusChange={setSelectedStatus}
                onSortChange={setSortBy}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {filteredAndSortedProducts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      {/* Page Footer */}
      <footer className="border-t mt-16" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="text-center">
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              All information on this page represents producer declarations and is not independently verified.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
