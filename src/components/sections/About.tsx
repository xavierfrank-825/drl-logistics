import { motion } from 'motion/react';
import { Shield, Globe, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000 order-2 lg:order-1"
          >
            <motion.div 
              animate={{ y: [0, -20, 0], rotateY: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] border-white/5 shadow-2xl preserve-3d"
            >
              <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-slate-900 flex items-center justify-center relative group">
                <img 
                  src="/assets/sections/about-vision.jpg" 
                  alt="Vision" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
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
                  className="text-primary/50 relative z-10"
                >
                  <Globe className="w-32 h-32 md:w-40 md:h-40" strokeWidth={0.5} />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 30, 0], rotateX: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 md:-bottom-12 -right-6 md:-right-12 w-32 h-32 md:w-64 md:h-64 glass p-4 md:p-8 rounded-2xl md:rounded-3xl border-primary/20 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <img 
                src="/assets/sections/about-security.jpg" 
                alt="Security" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="w-full h-full rounded-xl md:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary relative z-10">
                <Shield className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 md:mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary">Our Vision</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12 text-glow">
              Evolving <br />
              <span className="text-primary">Ecosystems</span>
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                DLR Logistics is a dynamic and evolving company transitioning into a liquidation-based business model to enhance operational agility and optimize asset utilization.
              </p>
              <p>
                With a strong foundation in sourcing and supply chain coordination, we are strategically repositioned to capitalize on high-demand product segments, particularly in the gaming industry.
              </p>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-2 gap-6 md:gap-12">
              <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 relative overflow-hidden group">
                <img 
                  src="/assets/sections/about-experience.jpg" 
                  alt="Experience" 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10">
                  <p className="text-3xl md:text-4xl font-black text-primary mb-1 md:mb-2">10+</p>
                  <p className="text-[9px] md:text-[10px] text-muted uppercase tracking-[2px] font-bold">Years Experience</p>
                </div>
              </div>
              <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 relative overflow-hidden group">
                <img 
                  src="/assets/sections/about-partners.jpg" 
                  alt="Partners" 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10">
                  <p className="text-3xl md:text-4xl font-black text-secondary mb-1 md:mb-2">500+</p>
                  <p className="text-[9px] md:text-[10px] text-muted uppercase tracking-[2px] font-bold">B2B Partners</p>
                </div>
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
