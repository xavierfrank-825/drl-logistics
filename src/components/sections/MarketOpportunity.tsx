import { motion } from 'motion/react';
import { MARKET_OPPORTUNITIES } from '@/src/constants';
import { Globe, User, Gamepad2, Laptop, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  Globe,
  User,
  Gamepad2,
  Laptop,
  TrendingUp,
};

export default function MarketOpportunity() {
  return (
    <section id="market" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-secondary">Market Analysis</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-glow">
            Strategic <br />
            <span className="text-secondary">Opportunity</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {MARKET_OPPORTUNITIES.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="preserve-3d"
              >
                <div className="glass p-12 h-full rounded-[3rem] border-white/5 hover:border-secondary/30 transition-all duration-500 group">
                  <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(155,46,255,0.1)]">
                    {Icon && <Icon size={32} />}
                  </div>
                  <h4 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-secondary transition-colors">{item.title}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] translate-y-1/2" />
    </section>
  );
}
