import { Product, MarketOpportunity, BusinessModelStep } from './types';

// Import images directly
import c1 from "./assets/c1.jpg";
import gc2503 from './assets/gc2503.jpg';
import gc2504 from './assets/gc2504.jpg';
import gc2505 from './assets/gc2505.jpg';
import gc2506 from './assets/gc2506.jpg';
import gc2404 from './assets/gc2404.jpg';
import ygc501 from './assets/ygc501.jpg';
import ygc501b from './assets/ygc501b.jpg';
// import sourcing from './assets/sourcing.jpg';
import Expansions from './assets/expansions-img.jpg';
import lifestyle from './assets/lifestyle.jpg';
import ecosystem from './assets/ecosystem.jpg';
import Shift from './assets/Shift.jpg';
import oppurnity from './assets/oppurnity.jpg';

import sourcing from './assets/sourcing.jpg';
import logistics from './assets/logistics.jpg';
import process from './assets/process.jpg';
import clients from './assets/clients.jpg';
import focus from './assets/focus.jpg'; 


export const PRODUCTS: Product[] = [
  { id: 'GC-2502', name: 'GC-2502 Premium Gaming Chair', image: c1, priceInr: 2695.6, priceUsd: 29.30, units: 56 },
  { id: 'GC-2503', name: 'GC-2503 Premium Gaming Chair', image: gc2503, priceInr: 2760, priceUsd: 30.00, units: 55 },
  { id: 'GC-2504', name: 'GC-2504 Premium Gaming Chair', image: gc2504, priceInr: 2649.6, priceUsd: 28.80, units: 56 },
  { id: 'GC-2505', name: 'GC-2505 Premium Gaming Chair', image: gc2505, priceInr: 2649.6, priceUsd: 28.80, units: 56 },
  { id: 'GC-2506', name: 'GC-2506 Premium Gaming Chair', image: gc2506, priceInr: 2695.6, priceUsd: 29.30, units: 56 },
  { id: 'GC-2404', name: 'GC-2404 Premium Gaming Chair', image: gc2404, priceInr: 2346, priceUsd: 25.50, units: 56 },
  { id: 'YGC501', name: 'YGC501 Premium Gaming Chair', image: ygc501, priceInr: 2760, priceUsd: 23.50, units: 55 },
  { id: 'YGC501-B', name: 'YGC501-B Premium Gaming Chair', image: ygc501b, priceInr: 1748, priceUsd: 19.00, units: 56 },
];
export const MARKET_OPPORTUNITIES: MarketOpportunity[] = [
  {
    title: 'Expansion',
    description: 'The gaming industry is rapidly scaling across global markets, creating sustained demand for gaming infrastructure and accessories.',
    icon: 'Globe',
    image: Expansions,
  },
  {
    title: 'Lifestyle',
    description: 'Increasing screen time and extended gaming or work sessions are driving the need for ergonomic and comfort-focused seating solutions.',
    icon: 'User',
    image: lifestyle,
  },
  {
    title: 'Ecosystem',
    description: 'The rise of esports, gaming cafés, and personalized gaming setups is fueling consistent demand for high-quality gaming chairs.',
    icon: 'Gamepad2',
    image: ecosystem,
  },
  {
    title: 'Shift',
    description: 'The hybrid work culture has significantly increased the adoption of ergonomic chairs for both professional and personal use.',
    icon: 'Laptop',
    image: Shift,
  },
  {
    title: 'Opportunity',
    description: 'A strong B2B resale market with high-volume purchasing potential, offering scalable and profitable business opportunities.',
    icon: 'TrendingUp',
    image: oppurnity,
  },
];

export const BUSINESS_MODEL_STEPS: BusinessModelStep[] = [
  { 
    title: 'Sourcing', 
    description: 'Specialized in sourcing high-demand products for B2B markets.',
    image: sourcing  // ✅ Using sourcing image
  },
  { 
    title: 'Focus', 
    description: 'Core focus on premium gaming chairs.',
    image: focus  // ✅ Changed from sourcing to focus
  },
  { 
    title: 'Logistics', 
    description: 'End-to-end supply chain management.',
    image: logistics  // ✅ Using logistics image
  },
  { 
    title: 'Process', 
    description: 'Procurement → Quality Check → Delivery.',
    image: process  // ✅ Changed from sourcing to process
  },
  { 
    title: 'Clients', 
    description: 'Serving retailers, distributors, gaming cafés & corporate buyers.',
    image: clients  // ✅ Changed from sourcing to clients
  },
];

export const CONTACT_INFO = {
  phone: '+91 85538 30149',
  email: 'info@dlrlogistics.com',
  website: 'www.dlrlogistics.com',
};
