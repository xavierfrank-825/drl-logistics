import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/constants';
import { ArrowRight, Cpu, Monitor, Keyboard, Mouse, Headphones, Smartphone, Watch, Camera } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Cpu': Cpu,
  'Monitor': Monitor,
  'Keyboard': Keyboard,
  'Mouse': Mouse,
  'Headphones': Headphones,
  'Smartphone': Smartphone,
  'Watch': Watch,
  'Camera': Camera,
};

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary">Inventory</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-glow">
              Premium <br />
              <span className="text-primary">Ecosystem</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed text-center md:text-left mx-auto md:mx-0">
            A curated selection of high-performance gaming hardware and ergonomic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 perspective-1000">
          {PRODUCTS.map((product, index) => {
            // Map product names to icons for variety
            const icons = [Cpu, Monitor, Keyboard, Mouse, Headphones, Smartphone, Watch, Camera];
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  rotateX: -5,
                  z: 50
                }}
                className="preserve-3d group cursor-pointer"
              >
                <div className="glass p-4 rounded-[2rem] border-white/5 group-hover:border-primary/30 transition-colors duration-500 shadow-xl h-full flex flex-col">
                  <div className="aspect-square rounded-[1.5rem] overflow-hidden relative mb-6 bg-slate-900 flex items-center justify-center">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-full h-full object-cover opacity-100 transition-all duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                      <p className="text-white font-black uppercase tracking-tight text-lg md:text-xl leading-tight">{product.name}</p>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="glass-dark px-3 py-1 rounded-full border-white/10">
                        <span className="text-[10px] font-bold uppercase tracking-[1px] text-primary">{product.id}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between px-2 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">Availability</span>
                      <span className="text-xl md:text-2xl font-black text-glow">{product.units} Units</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
    </section>
  );
}
