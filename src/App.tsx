import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import BusinessModel from './components/sections/BusinessModel';
import MarketOpportunity from './components/sections/MarketOpportunity';
import ProductShowcase from './components/sections/ProductShowcase';
import InvestmentOverview from './components/sections/InvestmentOverview';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessModel />
        <MarketOpportunity />
        <ProductShowcase />
        <InvestmentOverview />
      </main>
      <Contact />
    </div>
  );
}
