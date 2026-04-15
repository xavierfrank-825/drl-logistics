export interface Product {
  id: string;
  name: string;
  image: string;
  priceInr: number;
  priceUsd: number;
  units: number;
}

export interface MarketOpportunity {
  title: string;
  description: string;
  icon: string;
}

export interface BusinessModelStep {
  title: string;
  description: string;
}
