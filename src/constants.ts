import { Product, MarketOpportunity, BusinessModelStep } from './types';

export const PRODUCTS: Product[] = [
  { id: 'GC-2502', name: 'GC-2502 Premium Gaming Chair', image: '/assets/products/gc2502.jpg', priceInr: 2695.6, priceUsd: 29.30, units: 56 },
  { id: 'GC-2503', name: 'GC-2503 Premium Gaming Chair', image: '/assets/products/gc2503.jpg', priceInr: 2760, priceUsd: 30.00, units: 55 },
  { id: 'GC-2504', name: 'GC-2504 Premium Gaming Chair', image: '/assets/products/gc2504.jpg', priceInr: 2649.6, priceUsd: 28.80, units: 56 },
  { id: 'GC-2505', name: 'GC-2505 Premium Gaming Chair', image: '/assets/products/gc2505.jpg', priceInr: 2649.6, priceUsd: 28.80, units: 56 },
  { id: 'GC-2506', name: 'GC-2506 Premium Gaming Chair', image: '/assets/products/gc2506.jpg', priceInr: 2695.6, priceUsd: 29.30, units: 56 },
  { id: 'GC-2404', name: 'GC-2404 Premium Gaming Chair', image: '/assets/products/gc2404.jpg', priceInr: 2346, priceUsd: 25.50, units: 56 },
  { id: 'YGC501', name: 'YGC501 Premium Gaming Chair', image: '/assets/products/ygc501.jpg', priceInr: 2760, priceUsd: 23.50, units: 55 },
  { id: 'YGC501-B', name: 'YGC501-B Premium Gaming Chair', image: '/assets/products/ygc501b.jpg', priceInr: 1748, priceUsd: 19.00, units: 56 },
];

export const MARKET_OPPORTUNITIES: MarketOpportunity[] = [
  {
    title: 'Expansion',
    description: 'The gaming industry is rapidly scaling across global markets, creating sustained demand for gaming infrastructure and accessories.',
    icon: 'Globe',
  },
  {
    title: 'Lifestyle',
    description: 'Increasing screen time and extended gaming or work sessions are driving the need for ergonomic and comfort-focused seating solutions.',
    icon: 'User',
  },
  {
    title: 'Ecosystem',
    description: 'The rise of esports, gaming cafés, and personalized gaming setups is fueling consistent demand for high-quality gaming chairs.',
    icon: 'Gamepad2',
  },
  {
    title: 'Shift',
    description: 'The hybrid work culture has significantly increased the adoption of ergonomic chairs for both professional and personal use.',
    icon: 'Laptop',
  },
  {
    title: 'Opportunity',
    description: 'A strong B2B resale market with high-volume purchasing potential, offering scalable and profitable business opportunities.',
    icon: 'TrendingUp',
  },
];

export const BUSINESS_MODEL_STEPS: BusinessModelStep[] = [
  { title: 'Sourcing', description: 'Specialized in sourcing high-demand products for B2B markets.' },
  { title: 'Focus', description: 'Core focus on premium gaming chairs.' },
  { title: 'Logistics', description: 'End-to-end supply chain management.' },
  { title: 'Process', description: 'Procurement → Quality Check → Delivery.' },
  { title: 'Clients', description: 'Serving retailers, distributors, gaming cafés & corporate buyers.' },
];

export const CONTACT_INFO = {
  phone: '+91 85538 30149',
  email: 'info@dlrlogistics.com',
  website: 'www.dlrlogistics.com',
};
