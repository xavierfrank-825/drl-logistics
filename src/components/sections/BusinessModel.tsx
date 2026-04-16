import { motion } from 'motion/react';
import { BUSINESS_MODEL_STEPS } from '@/src/constants';

export default function BusinessModel() {
  return (
    <section id="model" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary">Strategy</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-glow">
              Operational <br />
              <span className="text-primary">Intelligence</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed text-center md:text-left mx-auto md:mx-0">
            A streamlined end-to-end model designed for maximum efficiency and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 perspective-1000">
          {BUSINESS_MODEL_STEPS.map((step, index) => {
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="preserve-3d"
              >
                <div className="glass h-full rounded-[2rem] md:rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all duration-500 group flex flex-col overflow-hidden">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={`/assets/sections/step-${index + 1}.jpg`} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 glass rounded-xl flex items-center justify-center text-primary font-black text-lg md:text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(122,147,66,0.1)]">
                        0{index + 1}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] translate-x-1/2" />
    </section>
  );
}
