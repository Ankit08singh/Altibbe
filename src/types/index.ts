export type ProductStatus = 'Draft' | 'Submitted' | 'Published';

export type ProductCategory = 
  | 'Electronics'
  | 'Textiles'
  | 'Food & Beverage'
  | 'Pharmaceuticals'
  | 'Construction Materials'
  | 'Chemicals';

export interface VersionHistory {
  version: number;
  date: string;
  status: ProductStatus;
  changes?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  producer: string;
  status: ProductStatus;
  lastUpdated: string;
  declaredBy: string;
  declaredDate: string;
  evidenceCount: number;
  hasEvidence: boolean;
  versionHistory: VersionHistory[];
  description?: string;
}
