import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Cotton T-Shirt',
    category: 'Textiles',
    producer: 'EcoThread Manufacturing Ltd.',
    status: 'Published',
    lastUpdated: '2025-12-15',
    declaredBy: 'Sarah Chen, Quality Manager',
    declaredDate: '2025-12-15',
    evidenceCount: 3,
    hasEvidence: true,
    description: 'Producer declares this garment is manufactured using 100% certified organic cotton from verified suppliers.',
    versionHistory: [
      {
        version: 2,
        date: '2025-12-15',
        status: 'Published',
        changes: 'Updated supplier certification documentation'
      },
      {
        version: 1,
        date: '2025-11-20',
        status: 'Submitted',
        changes: 'Initial disclosure submitted'
      }
    ]
  },
  {
    id: '2',
    name: 'LED Desk Lamp Model DL-450',
    category: 'Electronics',
    producer: 'BrightLight Industries Inc.',
    status: 'Published',
    lastUpdated: '2025-12-10',
    declaredBy: 'Michael Rodriguez, Compliance Director',
    declaredDate: '2025-12-10',
    evidenceCount: 5,
    hasEvidence: true,
    description: 'Producer states this product meets energy efficiency standards and contains no hazardous materials as per their internal testing.',
    versionHistory: [
      {
        version: 3,
        date: '2025-12-10',
        status: 'Published',
        changes: 'Added energy consumption test results'
      },
      {
        version: 2,
        date: '2025-11-28',
        status: 'Submitted',
        changes: 'Updated materials composition details'
      },
      {
        version: 1,
        date: '2025-11-15',
        status: 'Draft',
        changes: 'Initial draft created'
      }
    ]
  },
  {
    id: '3',
    name: 'Premium Coffee Blend - Dark Roast',
    category: 'Food & Beverage',
    producer: 'Mountain Peak Roasters',
    status: 'Submitted',
    lastUpdated: '2026-01-05',
    declaredBy: 'James Patterson, Production Manager',
    declaredDate: '2026-01-05',
    evidenceCount: 2,
    hasEvidence: true,
    description: 'Producer reports sourcing from direct trade partnerships with coffee farmers in three regions.',
    versionHistory: [
      {
        version: 1,
        date: '2026-01-05',
        status: 'Submitted',
        changes: 'Initial submission with sourcing information'
      },
      {
        version: 0,
        date: '2025-12-28',
        status: 'Draft',
        changes: 'Draft preparation'
      }
    ]
  },
  {
    id: '4',
    name: 'Pain Relief Tablets 500mg',
    category: 'Pharmaceuticals',
    producer: 'HealthCare Pharmaceuticals Corp.',
    status: 'Published',
    lastUpdated: '2025-11-30',
    declaredBy: 'Dr. Emily Zhang, Regulatory Affairs',
    declaredDate: '2025-11-30',
    evidenceCount: 8,
    hasEvidence: true,
    description: 'Producer declares formulation details and manufacturing processes according to their quality management system.',
    versionHistory: [
      {
        version: 2,
        date: '2025-11-30',
        status: 'Published',
        changes: 'Updated manufacturing facility information'
      },
      {
        version: 1,
        date: '2025-10-15',
        status: 'Submitted',
        changes: 'Initial product disclosure'
      }
    ]
  },
  {
    id: '5',
    name: 'Recycled Steel Rebar Grade 60',
    category: 'Construction Materials',
    producer: 'SteelWorks International',
    status: 'Draft',
    lastUpdated: '2026-01-02',
    declaredBy: 'Robert Kim, Documentation Specialist',
    declaredDate: '2026-01-02',
    evidenceCount: 0,
    hasEvidence: false,
    description: 'Producer is preparing disclosure regarding recycled content percentages and manufacturing specifications.',
    versionHistory: [
      {
        version: 1,
        date: '2026-01-02',
        status: 'Draft',
        changes: 'Draft in progress'
      },
      {
        version: 0,
        date: '2025-12-20',
        status: 'Draft',
        changes: 'Initial document created'
      }
    ]
  },
  {
    id: '6',
    name: 'Multi-Surface Cleaning Solution',
    category: 'Chemicals',
    producer: 'CleanTech Solutions Ltd.',
    status: 'Published',
    lastUpdated: '2025-12-20',
    declaredBy: 'Anna Kowalski, Product Development',
    declaredDate: '2025-12-20',
    evidenceCount: 4,
    hasEvidence: true,
    description: 'Producer provides ingredient listing and safety data based on their formulation records.',
    versionHistory: [
      {
        version: 1,
        date: '2025-12-20',
        status: 'Published',
        changes: 'Initial disclosure published'
      },
      {
        version: 0,
        date: '2025-12-01',
        status: 'Draft',
        changes: 'Initial draft with ingredient listing'
      }
    ]
  },
  {
    id: '7',
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    producer: 'AudioPro Technologies',
    status: 'Submitted',
    lastUpdated: '2025-12-28',
    declaredBy: 'Lisa Thompson, Quality Assurance',
    declaredDate: '2025-12-28',
    evidenceCount: 3,
    hasEvidence: true,
    description: 'Producer states technical specifications and battery composition as per their product documentation.',
    versionHistory: [
      {
        version: 1,
        date: '2025-12-28',
        status: 'Submitted',
        changes: 'Submitted for review'
      },
      {
        version: 0,
        date: '2025-12-15',
        status: 'Draft',
        changes: 'Initial technical specifications documented'
      }
    ]
  },
  {
    id: '8',
    name: 'Industrial Epoxy Adhesive',
    category: 'Chemicals',
    producer: 'PolyBond Industries',
    status: 'Draft',
    lastUpdated: '2025-12-05',
    declaredBy: 'David Martinez, Technical Director',
    declaredDate: '2025-12-05',
    evidenceCount: 1,
    hasEvidence: true,
    description: 'Producer is documenting chemical composition and application specifications.',
    versionHistory: [
      {
        version: 1,
        date: '2025-12-05',
        status: 'Draft',
        changes: 'Initial draft with partial information'
      },
      {
        version: 0,
        date: '2025-11-22',
        status: 'Draft',
        changes: 'Template prepared'
      }
    ]
  },
  {
    id: '9',
    name: 'Whole Grain Breakfast Cereal',
    category: 'Food & Beverage',
    producer: 'Sunrise Foods Company',
    status: 'Published',
    lastUpdated: '2025-11-18',
    declaredBy: 'Karen O\'Brien, Quality Control',
    declaredDate: '2025-11-18',
    evidenceCount: 6,
    hasEvidence: true,
    description: 'Producer reports nutritional information and ingredient sourcing details according to their records.',
    versionHistory: [
      {
        version: 2,
        date: '2025-11-18',
        status: 'Published',
        changes: 'Updated nutritional analysis'
      },
      {
        version: 1,
        date: '2025-10-30',
        status: 'Submitted',
        changes: 'Initial product information submitted'
      }
    ]
  },
  {
    id: '10',
    name: 'Bamboo Flooring Panels',
    category: 'Construction Materials',
    producer: 'EcoFloor Manufacturing',
    status: 'Published',
    lastUpdated: '2025-12-12',
    declaredBy: 'Thomas Lee, Sustainability Manager',
    declaredDate: '2025-12-12',
    evidenceCount: 7,
    hasEvidence: true,
    description: 'Producer declares sourcing from managed bamboo forests and provides manufacturing process details.',
    versionHistory: [
      {
        version: 3,
        date: '2025-12-12',
        status: 'Published',
        changes: 'Added forest management documentation'
      },
      {
        version: 2,
        date: '2025-11-25',
        status: 'Submitted',
        changes: 'Updated product specifications'
      },
      {
        version: 1,
        date: '2025-11-10',
        status: 'Draft',
        changes: 'Initial draft prepared'
      }
    ]
  },
  {
    id: '11',
    name: 'Premium Wool Blanket',
    category: 'Textiles',
    producer: 'Heritage Textiles Co.',
    status: 'Submitted',
    lastUpdated: '2026-01-04',
    declaredBy: 'Patricia Wilson, Production Lead',
    declaredDate: '2026-01-04',
    evidenceCount: 2,
    hasEvidence: true,
    description: 'Producer provides information about wool sourcing and weaving processes.',
    versionHistory: [
      {
        version: 1,
        date: '2026-01-04',
        status: 'Submitted',
        changes: 'Initial submission pending review'
      },
      {
        version: 0,
        date: '2025-12-18',
        status: 'Draft',
        changes: 'Draft with wool sourcing information'
      }
    ]
  },
  {
    id: '12',
    name: 'Vitamin D3 Supplements',
    category: 'Pharmaceuticals',
    producer: 'NutriWell Corporation',
    status: 'Published',
    lastUpdated: '2025-12-08',
    declaredBy: 'Dr. Mark Stevens, Formulation Specialist',
    declaredDate: '2025-12-08',
    evidenceCount: 5,
    hasEvidence: true,
    description: 'Producer states ingredient sources and manufacturing standards according to their quality protocols.',
    versionHistory: [
      {
        version: 1,
        date: '2025-12-08',
        status: 'Published',
        changes: 'Complete disclosure published'
      },
      {
        version: 0,
        date: '2025-11-25',
        status: 'Submitted',
        changes: 'Initial submission for review'
      }
    ]
  }
];
