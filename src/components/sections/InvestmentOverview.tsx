import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/constants';

export default function InvestmentOverview() {
  const totalUnits = PRODUCTS.reduce((acc, p) => acc + p.units, 0);

  return (
    <section id="investment" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary">Financials</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-glow">
              Investment <br />
              <span className="text-primary">Architecture</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
            Optimized bulk procurement and cost efficiency for strong margins in the B2B resale market.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 perspective-1000">
          {[
            { label: "Total Units", value: totalUnits, sub: "Premium Artifacts", color: "text-primary" },
            { label: "Global Partners", value: "500+", sub: "B2B Network", color: "text-secondary" },
            { label: "Market Reach", value: "24/7", sub: "Operational Agility", color: "text-white" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="preserve-3d"
            >
              <div className="glass p-12 rounded-[3rem] border-white/5 hover:border-primary/20 transition-all duration-500">
                <p className="text-[10px] text-muted-foreground uppercase tracking-[2px] font-bold mb-6">{stat.label}</p>
                <p className={`text-6xl font-black mb-2 ${stat.color} text-glow`}>{stat.value}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-[1px] font-bold">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
