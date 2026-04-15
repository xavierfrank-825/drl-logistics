import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className={`glass rounded-full px-8 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "shadow-[0_0_30px_rgba(46,91,255,0.2)] border-primary/20" : ""
        }`}>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black animate-pulse-glow">
              D
            </div>
            <span className="font-black text-xl tracking-tighter uppercase text-glow group-hover:tracking-widest transition-all duration-500">
              DLR.LOGS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[2px]">
            {["Works", "Model", "Market", "Products", "Investment"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-[2px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(46,91,255,0.3)]">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
