import { motion } from 'motion/react';
import { Shield, Globe, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            <motion.div 
              animate={{ y: [0, -20, 0], rotateY: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass p-4 rounded-[2.5rem] border-white/5 shadow-2xl preserve-3d"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-tr from-primary/10 to-secondary/10 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotateX: [0, 360],
                    rotateY: [0, 360]
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="text-primary/30"
                >
                  <Globe size={160} strokeWidth={0.5} />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 30, 0], rotateX: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-12 w-64 h-64 glass p-8 rounded-3xl border-primary/20 shadow-2xl hidden md:flex items-center justify-center"
            >
              <div className="w-full h-full rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Shield size={64} strokeWidth={1} />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary">Our Vision</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12 text-glow">
              Evolving <br />
              <span className="text-primary">Ecosystems</span>
            </h2>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                DLR Logistics is a dynamic and evolving company transitioning into a liquidation-based business model to enhance operational agility and optimize asset utilization.
              </p>
              <p>
                With a strong foundation in sourcing and supply chain coordination, we are strategically repositioned to capitalize on high-demand product segments, particularly in the gaming industry.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12">
              <div className="glass p-8 rounded-3xl border-white/5">
                <p className="text-4xl font-black text-primary mb-2">10+</p>
                <p className="text-[10px] text-muted uppercase tracking-[2px] font-bold">Years Experience</p>
              </div>
              <div className="glass p-8 rounded-3xl border-white/5">
                <p className="text-4xl font-black text-secondary mb-2">500+</p>
                <p className="text-[10px] text-muted uppercase tracking-[2px] font-bold">B2B Partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2" />
    </section>
  );
}
