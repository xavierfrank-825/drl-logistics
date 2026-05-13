import { motion } from 'motion/react';
import { Box, Zap, ArrowRight } from 'lucide-react';
import hero from '../../assets/hero-gaming.JPG';  // ✅ Imported but not used

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 md:mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary">Next-Gen Logistics</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8 text-glow">
              Future <br />
              <span className="text-primary">Logistics</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed">
              Revolutionizing the B2B supply chain with AI-driven liquidation models and high-demand product sourcing.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <a href="#model" className="bg-primary hover:bg-primary/80 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase text-[11px] md:text-[12px] tracking-[2px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(122,147,66,0.4)]">
                Explore Model
              </a>
              <a href="#products" className="glass hover:bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase text-[11px] md:text-[12px] tracking-[2px] transition-all duration-300">
                View Products
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-1000 hidden lg:block"
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotateY: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="preserve-3d max-w-[420px] ml-auto relative"
            >
              <div className="glass p-4 rounded-[3rem] border-white/10 shadow-2xl overflow-hidden relative">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative bg-slate-900 flex items-center justify-center group">
                  {/* ✅ FIXED: Use the imported hero image */}
                  <img 
                    src={hero}  // Changed from hardcoded path
                    alt="Gaming Ecosystem" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 border-2 border-primary/30 rounded-[3rem] relative z-10"
                  >
                    <div className="absolute inset-0 border-2 border-secondary/30 rounded-[3rem] rotate-45" />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-20" />
                  
                  <div className="absolute bottom-8 left-8 right-8 z-30">
                    <div className="glass-dark p-6 rounded-2xl border-white/10">
                      {/* <p className="text-[10px] font-bold uppercase tracking-[2px] text-primary mb-2">Current Project</p> */}
                      <h4 className="text-2xl font-black uppercase tracking-tight mb-4">Gaming Ecosystem</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-800" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[1px] text-muted-foreground">500+ Units</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-primary/20 animate-pulse">
                <Box className="text-primary" size={24} />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border-secondary/20 animate-pulse delay-700">
                <Zap className="text-secondary" size={24} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Rail - Now in flow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Active Partners", value: "500+" },
              { label: "Global Reach", value: "24/7" },
              { label: "Success Rate", value: "98%" },
              { label: "Market Value", value: "$2.4M" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 md:gap-2 text-center md:text-left">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">{stat.label}</span>
                <span className="text-2xl md:text-3xl font-black text-glow">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}