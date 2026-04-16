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
    <section id="market" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-secondary">Market Analysis</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-glow">
            Strategic <br />
            <span className="text-secondary">Opportunity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-1000">
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
                <div className="glass h-full rounded-[2.5rem] md:rounded-[3rem] border-white/5 hover:border-secondary/30 transition-all duration-500 group overflow-hidden flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img 
                      src={`/assets/sections/market-${item.title.toLowerCase()}.jpg`} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(80,100,40,0.1)]">
                        {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8" />}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <h4 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight group-hover:text-secondary transition-colors">{item.title}</h4>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {item.description}
                    </p>
                  </div>
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
